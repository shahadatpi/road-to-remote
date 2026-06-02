# JS scope & hoisting (Day 1)

> My notes, grounded in the real `handleSubmit` temporal-dead-zone bug in `ExamScreen.tsx`.

## The mental model: two phases

Before any line of a scope runs, JavaScript does a **setup pass** that registers every binding in that scope (`var`, `let`, `const`, `function`). *Then* it runs the code top to bottom. "Hoisting" is that setup pass. The three kinds of declaration get set up differently — that difference is the whole lesson.

## var vs function vs let/const

- `function f() {}` — a function **declaration** — is hoisted **whole**. Name and full body are ready in the setup pass, so it's callable on a line *above* where it's written.
- `var x` — hoisted, initialised to `undefined`. Using it early gives `undefined`, no error.
- `let` / `const` — hoisted (the name is reserved) but **not initialised** until their line runs. The gap between scope-start and that line is the **Temporal Dead Zone (TDZ)**; touching the binding inside the TDZ throws.

### Worked example

```js
console.log(a)  // undefined  -> var a is hoisted and set to undefined
console.log(b)  // ReferenceError: Cannot access 'b' before initialization
var a = 1
let b = 2
```

Line 1 prints `undefined`. Line 2 throws, because `b` is still in the TDZ — and because it throws, execution halts right there. `const` behaves the same as `let` here.

## The real bug (ExamScreen.tsx)

The countdown `useEffect` lists `handleSubmit` in its dependency array. In the buggy version, the effect sat **above** the `const handleSubmit = useCallback(...)` line.

A React component body runs top to bottom on every render. The dependency array `[submitted, handleSubmit]` is built **synchronously, at render time**, the instant that line executes — so it reads `handleSubmit` immediately. With the effect ordered above the declaration, `handleSubmit` is still in the TDZ → `ReferenceError: Cannot access 'handleSubmit' before initialization` → the component throws before it can render → blank/crashed exam screen.

**The trigger** is the dependency array (a render-time read), **not** the `handleSubmit()` call inside the interval. That inner call runs a second later when the timer ticks, by which point render has finished and the const exists.

**The fix** is ordering: define `handleSubmit` *above* the effect that depends on it. (Current code: line 28 before line 45.) No logic changed.

## Why not just use `function handleSubmit() {}` (hoisted, no TDZ)?

It would dodge the TDZ — but a function declaration is a **brand-new function on every render**, so its identity changes each time. The effect's deps array would see a "different" `handleSubmit` every render, tear down and recreate the interval constantly, and risk a stale closure over `answers`. I want a *stable* reference, so it's a `useCallback` → which is a `const` → which lives in the TDZ → which is why order matters. The stability choice and the ordering rule are linked.

## Interview soundbite

"It was a temporal-dead-zone error: the effect's dependency array read the `handleSubmit` const at render time, before its initialisation line, because the effect was ordered above it. A function declaration would have been hoisted and dodged it, but I needed a stable `useCallback` reference for the deps, so the real fix was ordering, not changing the declaration."

## Test myself (revisit tomorrow, from memory)

1. What are the three hoisting behaviours — `var`, function declaration, `let`/`const`?
2. In the bug, which exact line reads `handleSubmit`, and *when* does it read it?
3. Why didn't switching to a function declaration solve it cleanly?
