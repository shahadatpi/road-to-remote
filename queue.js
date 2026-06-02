/**
 * @file tikz-service/queue.js
 *
 * Single responsibility: cap concurrent compile jobs and queue the rest.
 *
 * LaTeX is CPU-bound (2–10 s per job). Without a cap, N simultaneous requests
 * spawn N xelatex processes, saturating the CPU and OOM-ing the container.
 *
 * Usage:
 *   const { acquireSlot, releaseSlot, stats } = require("./queue");
 *
 *   await acquireSlot();   // waits if at capacity, throws "QUEUE_FULL" if overflow
 *   try { ... } finally { releaseSlot(); }
 *
 * Both limits are configurable via env vars so you don't need to redeploy to tune:
 *   MAX_CONCURRENT_JOBS  (default 3) — compile slots; set to vCPU count - 1
 *   MAX_QUEUE_DEPTH      (default 20) — pending requests before returning 503
 */

"use strict";

const MAX_CONCURRENT = parseInt(process.env.MAX_CONCURRENT_JOBS ?? "3", 10);
const MAX_DEPTH      = parseInt(process.env.MAX_QUEUE_DEPTH     ?? "20", 10);

let active = 0;
/** Each entry is a `resolve` from a Promise waiting for a free slot. */
const waiting = [];

/**
 * Acquire a compile slot.
 * - If a slot is free: resolves immediately.
 * - If at capacity but queue has room: waits until a slot is released.
 * - If queue is full: throws Error("QUEUE_FULL") — caller should respond 503.
 */
function acquireSlot() {
    if (active < MAX_CONCURRENT) {
        active++;
        return Promise.resolve();
    }
    if (waiting.length >= MAX_DEPTH) {
        throw new Error("QUEUE_FULL");
    }
    return new Promise(resolve => waiting.push(resolve));
}

/**
 * Release a compile slot.
 * Wakes the next waiting caller if any, otherwise decrements the active count.
 */
function releaseSlot() {
    if (waiting.length > 0) {
        // Hand the slot directly to the next waiter — active count stays the same.
        waiting.shift()();
    } else {
        active--;
    }
}

/** Live snapshot for health endpoints and logging. */
function stats() {
    return { active, queued: waiting.length, maxConcurrent: MAX_CONCURRENT, maxDepth: MAX_DEPTH };
}

module.exports = { acquireSlot, releaseSlot, stats };
