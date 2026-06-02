# The Daily Curriculum — 26 Weeks, Day by Day

*Execution companion to your 6-month strategy plan. Every active day tells you **what** to learn, **why**, **where** (resource), your **DSA** problem, an **English** drill, and the **exact GitHub commit** to make. Six active days per week; Day 7 is rest/buffer — take it, recovery is part of the plan.*

---

## How to use this

- **Each morning:** open this file, find today, do the blocks in order (DSA → Learn → English → GitHub commit). Tick the day in your tracker and log the streak.
- **You will fall behind some weeks.** That's normal. Don't restart — just continue from where you are. The milestones matter, not the dates.
- **The non-negotiable:** one GitHub commit every active day. Even 15 minutes → a commit. The green graph is your discipline made visible and a real recruiter signal.
- **Time:** full days ≈ 4–4.5 hrs; light days (Day 6 each week) ≈ 2–2.5 hrs; tutoring days, do the DSA + English + commit minimum (~1.5 hrs).

## Your GitHub system (set up on Day 1)

Create one public repo, `road-to-remote`, with this structure. Every daily entry below tells you exactly what to put in it.

```
road-to-remote/
├── LOG.md            ← ONE line every single day: "Day 12 — async/await; solved Valid Anagram"
├── notes/            ← your learning notes, one .md per topic (js-closures.md, ts-generics.md…)
├── dsa/              ← your solutions, foldered by pattern (arrays-hashing/, two-pointers/…)
├── system-design/    ← your design write-ups (weeks 15–20)
└── README.md         ← a short "what this is" + link to AtomicTest (your profile showcase)
```

During project weeks (6, 15–18), commits go to your **atomic-test** repo instead — the daily line says which. Either way: **commit something every day.**

## Resource key (links used throughout)

| Tag | Resource | URL |
|---|---|---|
| `[JSinfo]` | The Modern JavaScript Tutorial | javascript.info |
| `[YDKJS]` | You Don't Know JS Yet (Kyle Simpson) | github.com/getify/You-Dont-Know-JS |
| `[TSHB]` | TypeScript Handbook | typescriptlang.org/docs/handbook |
| `[TotalTS]` | Total TypeScript free tutorials | totaltypescript.com/tutorials |
| `[ReactDev]` | Official React docs ("Learn") | react.dev/learn |
| `[Comeau]` | Josh Comeau (free articles) | joshwcomeau.com |
| `[NextLearn]` | Next.js Learn course | nextjs.org/learn |
| `[NextDocs]` | Next.js docs | nextjs.org/docs |
| `[NeetCode]` | NeetCode practice roadmap | neetcode.io/practice |
| `[NCyt]` | NeetCode solution videos | youtube.com/@NeetCode |
| `[Grind75]` | Grind 75 ordered list | techinterviewhandbook.org/grind75 |
| `[TIH]` | Tech Interview Handbook (behavioral/resume) | techinterviewhandbook.org |
| `[Hello]` | Hello Interview (system design) | hellointerview.com/learn/system-design |
| `[SDP]` | System Design Primer | github.com/donnemartin/system-design-primer |
| `[BBG]` | ByteByteGo (system design) | youtube.com/@ByteByteGo |
| `[Pramp]` | Free peer mock interviews | pramp.com |
| `[Exponent]` | Mock interviews + content | tryexponent.com/practice |
| `[intio]` | interviewing.io | interviewing.io |
| `[Fireship]` | Fireship (short tech videos, English) | youtube.com/@Fireship |
| `[Overleaf]` | LaTeX résumé editor | overleaf.com |
| `[RW]` | Resume Worded (ATS scoring) | resumeworded.com |
| `[Turing]/[Arc]/[Wellfound]/[Lemon]/[YC]` | Job channels | turing.com · arc.dev · wellfound.com · lemon.io · workatastartup.com |

---

# PHASE 1 · Weeks 1–6 — Own Your Code + Fundamentals
*Goal: be able to whiteboard AtomicTest and defend every decision. You learn fundamentals by re-understanding your own code.*

## Week 1 — JavaScript execution model
*Why this week: closures, scope, and the event loop are what your `tikz-service/queue.js` is built on. You can't explain that file until you own these.*

**Day 1 — Variables, scope & hoisting**
- Learn: `[JSinfo]` "Variables", "Code structure", "Functions" — *why:* hoisting is exactly what caused your `handleSubmit` bug; understand the mechanism, not the symptom.
- DSA: — (warm up only) read `[NeetCode]` intro / set up account.
- English: record a 60-sec clip — "what I'm studying this week and why."
- GitHub: **create `road-to-remote`**, add `README.md` + `LOG.md` day-1 line + `notes/js-scope.md`.

**Day 2 — Closures (deep)**
- Learn: `[JSinfo]` "Closures"; `[YDKJS]` Scope & Closures ch.1–3 — *why:* your queue's `waiting[]` array captures `resolve` functions in closures; this IS that concept.
- DSA: Contains Duplicate (hashing).
- English: explain "what a closure is" aloud, 90 sec, recorded.
- GitHub: `notes/js-closures.md` + `dsa/arrays-hashing/contains-duplicate.js` + LOG.

**Day 3 — `this`, call/apply/bind, arrow vs normal functions**
- Learn: `[JSinfo]` "Object methods, this", "Function binding"; `[Comeau]` arrow function article — *why:* understanding `this` prevents a whole class of React bugs.
- DSA: Valid Anagram (hashing).
- English: shadow one `[Fireship]` 100-seconds video (repeat each sentence).
- GitHub: `notes/js-this.md` + `dsa/arrays-hashing/valid-anagram.js` + LOG.

**Day 4 — The event loop, call stack, micro/macrotasks**
- Learn: `[JSinfo]` "Event loop"; watch "What the heck is the event loop" (Philip Roberts, YouTube) — *why:* this is the single most-asked JS interview topic and explains async behavior in your app.
- DSA: Two Sum (hashing).
- English: explain the event loop aloud using the "kitchen/orders" analogy.
- GitHub: `notes/js-event-loop.md` + `dsa/arrays-hashing/two-sum.js` + LOG.

**Day 5 — Promises (deep)**
- Learn: `[JSinfo]` "Promises, async/await" (Promise, chaining, error handling) — *why:* your `acquireSlot()` returns a Promise that resolves when a slot frees; you must trace that flow.
- DSA: Group Anagrams (hashing).
- English: explain "how a Promise resolves" aloud, recorded.
- GitHub: `notes/js-promises.md` + `dsa/arrays-hashing/group-anagrams.js` + LOG.

**Day 6 (light) — async/await + week review**
- Learn: `[JSinfo]` "Async/await", "Error handling with promises" — *why:* `async/await` is how your queue code reads; finish the model.
- DSA: review the week's 4 problems from memory (no looking).
- English: re-record your "closure" explanation; compare to Day 2.
- GitHub: `notes/js-async.md` + LOG + push a `notes/week-01-review.md` (3 lines: learned/stuck/next).
- *Day 7: rest.*

## Week 2 — JavaScript II + TypeScript I
*Why: prototypes/modules explain how your codebase is wired; TS is the language you actually write AtomicTest in — time to understand it, not fight it.*

**Day 8 — Prototypes, classes, inheritance**
- Learn: `[JSinfo]` "Prototypes, inheritance", "Classes" — *why:* understand what `class` compiles to; clarifies React class-vs-function history.
- DSA: Top K Frequent Elements (heap/bucket).
- English: shadow a `[Fireship]` video, 10 min.
- GitHub: `notes/js-prototypes.md` + `dsa/arrays-hashing/top-k-frequent.js` + LOG.

**Day 9 — Array/object methods & immutability**
- Learn: `[JSinfo]` "Array methods", "Object.keys/values/entries"; map/filter/reduce drills — *why:* your filter logic and data transforms live and die by these.
- DSA: Product of Array Except Self (prefix/suffix).
- English: explain `reduce` aloud with one example.
- GitHub: `notes/js-array-methods.md` + `dsa/arrays-hashing/product-except-self.js` + LOG.

**Day 10 — Modules (ESM vs CommonJS)**
- Learn: `[JSinfo]` "Modules"; note `import` (your app) vs `require` (your tikz-service) — *why:* you literally use both; know why and when.
- DSA: Valid Sudoku (hashing/matrix).
- English: 2-min recorded summary of "modules in JS."
- GitHub: `notes/js-modules.md` + `dsa/arrays-hashing/valid-sudoku.js` + LOG.

**Day 11 — TypeScript basics: types, interfaces, `type` vs `interface`**
- Learn: `[TSHB]` "Everyday Types", "Object Types"; `[TotalTS]` beginner tutorial — *why:* your 48-field problem schema is a TS type; you should be able to read and shape it confidently.
- DSA: Encode and Decode Strings (design).
- English: shadow 10 min; narrate your DSA solution aloud.
- GitHub: `notes/ts-basics.md` + `dsa/arrays-hashing/encode-decode.js` + LOG.

**Day 12 — TypeScript generics**
- Learn: `[TSHB]` "Generics"; `[TotalTS]` generics tutorial — *why:* generics are why reusable hooks like `useQuestionFilter` can be type-safe; relate to your `typeHelpers.test.ts`.
- DSA: Longest Consecutive Sequence (hashing).
- English: explain "what a generic is, in plain words," recorded.
- GitHub: `notes/ts-generics.md` + `dsa/arrays-hashing/longest-consecutive.js` + LOG.

**Day 13 (light) — Narrowing, unions, discriminated unions + review**
- Learn: `[TSHB]` "Narrowing", "Unions" — *why:* discriminated unions are the clean fix for several of your `as any`s.
- DSA: review week 2's problems from memory.
- English: re-record "generics" explanation; compare.
- GitHub: `notes/ts-narrowing.md` + `notes/week-02-review.md` + LOG.
- *Day 14: rest.*

## Week 3 — TypeScript II + React I + DSA begins for real
*Why: you start fixing your own `as any`s (a concrete CV story) and enter React with the language under control. DSA is now daily.*

**Day 15 — Utility types (Partial, Pick, Omit, Record)**
- Learn: `[TSHB]` "Utility Types"; `[TotalTS]` — *why:* these model your schema's optional/derived fields cleanly.
- DSA: Valid Palindrome (two pointers) — new pattern.
- English: shadow 10 min.
- GitHub: `notes/ts-utility-types.md` + `dsa/two-pointers/valid-palindrome.js` + LOG.

**Day 16 — Fix your `as any`, #1–4**
- Learn: re-open AtomicTest; find the first 4 `as any` assertions — *why:* each one is a place you (or I) took a shortcut; replacing them properly is real understanding + an interview story.
- DSA: Two Sum II (two pointers).
- English: explain "why `as any` is a code smell" aloud.
- GitHub: commit to **atomic-test** repo: "fix: replace 4 `as any` with proper types" + LOG in road-to-remote.

**Day 17 — Fix your `as any`, #5–9**
- Learn: finish the remaining 5 assertions — *why:* finishing it means you can say "I removed all unsafe casts" truthfully.
- DSA: 3Sum (two pointers) — important, expect to struggle; watch `[NCyt]` after attempting.
- English: narrate your 3Sum approach aloud.
- GitHub: **atomic-test**: "fix: remove remaining `as any`; type-safe codebase" + LOG.

**Day 18 — React mental model: rendering & reconciliation**
- Learn: `[ReactDev]` "Describing the UI", "Render and Commit"; `[Comeau]` "Why React Re-Renders" — *why:* this explains every "why did this re-render" question and your own perf choices.
- DSA: Container With Most Water (two pointers).
- English: shadow 10 min.
- GitHub: `notes/react-rendering.md` + `dsa/two-pointers/container-water.js` + LOG.

**Day 19 — useState & controlled components**
- Learn: `[ReactDev]` "Adding Interactivity", "State: A Component's Memory" — *why:* your `ProblemFilterBar` is controlled components + state; re-read it after.
- DSA: Best Time to Buy and Sell Stock (sliding window) — new pattern.
- English: explain "controlled vs uncontrolled inputs" aloud.
- GitHub: `notes/react-state.md` + `dsa/sliding-window/buy-sell-stock.js` + LOG.

**Day 20 (light) — JSX deep, keys, lists + review**
- Learn: `[ReactDev]` "Rendering Lists", "Keeping components pure" — *why:* keys + purity set up tomorrow's understanding of your `Date.now()` bug.
- DSA: review week 3 problems.
- English: re-record your "3Sum approach."
- GitHub: `notes/react-lists.md` + `notes/week-03-review.md` + LOG.
- *Day 21: rest.*

## Week 4 — React II (the deep parts)
*Why: effects, purity, and custom hooks are where most React interviews and your own bugs live.*

**Day 22 — useEffect, deeply (and when NOT to use it)**
- Learn: `[ReactDev]` "Synchronizing with Effects", "You Might Not Need an Effect" — *why:* misused effects cause most React bugs; know the boundaries.
- DSA: Longest Substring Without Repeating Characters (sliding window).
- English: shadow 10 min.
- GitHub: `notes/react-effects.md` + `dsa/sliding-window/longest-substring.js` + LOG.

**Day 23 — Render purity & your `Date.now()` bug**
- Learn: re-read `[ReactDev]` "Keeping Components Pure"; open the code where `Date.now()` ran in render — *why:* be able to explain exactly why a render-phase side effect is impure and what breaks.
- DSA: Longest Repeating Character Replacement (sliding window).
- English: explain "why calling `Date.now()` during render is a bug" aloud, recorded.
- GitHub: `notes/react-purity.md` + `dsa/sliding-window/char-replacement.js` + LOG.

**Day 24 — Custom hooks (your `useQuestionFilter`)**
- Learn: `[ReactDev]` "Reusing Logic with Custom Hooks"; then read your own hook line by line — *why:* "I unified three filter implementations into one hook" is a top interview story — own every line.
- DSA: Permutation in String (sliding window).
- English: walk through your `useQuestionFilter` aloud as if to an interviewer.
- GitHub: `notes/react-custom-hooks.md` + `dsa/sliding-window/permutation-in-string.js` + LOG.

**Day 25 — Memoization & the React Compiler**
- Learn: `[ReactDev]` "useMemo", "useCallback", `React.memo`; note your `babel-plugin-react-compiler` — *why:* know when memoization helps, and what the compiler now does for you automatically.
- DSA: Valid Parentheses (stack) — new pattern.
- English: shadow 10 min.
- GitHub: `notes/react-memo.md` + `dsa/stack/valid-parentheses.js` + LOG.

**Day 26 — Context & lifting state**
- Learn: `[ReactDev]` "Managing State", "Passing Data Deeply with Context" — *why:* know when context is right vs prop drilling vs a store.
- DSA: Min Stack (stack design).
- English: explain "prop drilling and when context fixes it" aloud.
- GitHub: `notes/react-context.md` + `dsa/stack/min-stack.js` + LOG.

**Day 27 (light) — Refs, cleanup + review**
- Learn: `[ReactDev]` "Referencing Values with Refs", "Manipulating the DOM with Refs" — *why:* refs come up in timers/exam-countdown logic like yours.
- DSA: review week 4.
- English: re-record the `useQuestionFilter` walkthrough; it should be smoother than Day 24.
- GitHub: `notes/react-refs.md` + `notes/week-04-review.md` + LOG.
- *Day 28: rest.*

## Week 5 — Next.js I (App Router + RSC)
*Why: this is the framework AtomicTest runs on; the server/client boundary and `replaceState` decision are prime interview material.*

**Day 29 — App Router structure & file conventions**
- Learn: `[NextLearn]` ch.1–4; map to your `app/(auth)`, `app/(dashboard)`, `app/(admin)` route groups — *why:* you should explain why you grouped routes the way you did.
- DSA: Evaluate Reverse Polish Notation (stack).
- English: shadow 10 min.
- GitHub: `notes/next-app-router.md` + `dsa/stack/rpn.js` + LOG.

**Day 30 — Server vs Client Components (the boundary)**
- Learn: `[NextDocs]` "Server and Client Components"; `[NextLearn]` rendering chapters — *why:* the single most important Next.js concept; know what `"use client"` actually costs.
- DSA: Generate Parentheses (backtracking/stack).
- English: explain "server vs client components" aloud, recorded.
- GitHub: `notes/next-rsc.md` + `dsa/stack/generate-parentheses.js` + LOG.

**Day 31 — Data fetching & caching in RSC**
- Learn: `[NextDocs]` "Data Fetching", "Caching" — *why:* this connects to your `getLandingStats()` N+1 — understand fetch caching before you fix it.
- DSA: Daily Temperatures (monotonic stack).
- English: shadow 10 min.
- GitHub: `notes/next-data-fetching.md` + `dsa/stack/daily-temperatures.js` + LOG.

**Day 32 — Route handlers (your API routes)**
- Learn: `[NextDocs]` "Route Handlers"; open 3 of your `app/api/*` routes — *why:* you have 30+ routes; be able to explain request → validation → DB → response for one of them.
- DSA: Binary Search (binary search) — new pattern.
- English: walk through one API route aloud.
- GitHub: `notes/next-route-handlers.md` + `dsa/binary-search/binary-search.js` + LOG.

**Day 33 — Server Actions & the `replaceState` decision**
- Learn: `[NextDocs]` "Server Actions"; then re-read your URL-serialised filter code — *why:* "why `replaceState` instead of the router?" is a question you must nail (avoiding an RSC round-trip per keystroke, shareable links, refresh-safe).
- DSA: Search a 2D Matrix (binary search).
- English: explain the `replaceState` trade-off aloud, recorded — this is interview gold.
- GitHub: `notes/next-replacestate-decision.md` + `dsa/binary-search/search-2d-matrix.js` + LOG.

**Day 34 (light) — Layouts, loading & error UI + review**
- Learn: `[NextDocs]` "Pages and Layouts", "Loading UI", "Error Handling" — *why:* error boundaries are on your roadmap; know the Next primitives.
- DSA: review week 5.
- English: re-record "server vs client components."
- GitHub: `notes/next-layouts.md` + `notes/week-05-review.md` + LOG.
- *Day 35: rest.*

## Week 6 — Next.js II + write your ARCHITECTURE.md
*Why: you convert six weeks of understanding into a written architecture doc — the artifact that makes interviews easy and proves the code is yours.*

**Day 36 — Rendering strategies (SSR/SSG/ISR/streaming)**
- Learn: `[NextDocs]` rendering section — *why:* know which strategy each AtomicTest page uses and why.
- DSA: Koko Eating Bananas (binary search on answer).
- English: shadow 10 min.
- GitHub: `notes/next-rendering-strategies.md` + `dsa/binary-search/koko-bananas.js` + LOG.

**Day 37 — Middleware & the auth flow (Better Auth)**
- Learn: `[NextDocs]` "Middleware"; trace your Better Auth OAuth + single-device session enforcement — *why:* "how does your auth work?" must be answerable end to end.
- DSA: Find Minimum in Rotated Sorted Array (binary search).
- English: explain "single-device session enforcement and why an exam app needs it" aloud.
- GitHub: `notes/next-auth-flow.md` + `dsa/binary-search/find-min-rotated.js` + LOG.

**Day 38 — Deployment model (Vercel + Render sidecar)**
- Learn: review your `Dockerfile`, `fly.toml`/Render setup for tikz-service — *why:* understand why the LaTeX compiler is a separate service, not in the Next app (CPU-bound, different scaling, isolation).
- DSA: Search in Rotated Sorted Array (binary search).
- English: explain "why I split the TikZ compiler into its own service" aloud, recorded.
- GitHub: `notes/architecture-deployment.md` + `dsa/binary-search/search-rotated.js` + LOG.

**Day 39 — Write ARCHITECTURE.md: the TikZ microservice**
- Learn: write the TikZ section in your own words — request flow, the concurrency queue, backpressure, the `503` overflow, caching of compiled figures — *why:* this is your strongest "hard technical problem" story; writing it cements it.
- DSA: Reverse Linked List (linked list) — new pattern.
- English: read your TikZ write-up aloud; tighten anything you stumble on.
- GitHub: **atomic-test**: `docs/ARCHITECTURE.md` (TikZ section) + LOG.

**Day 40 — Write ARCHITECTURE.md: auth, filters, AI pipeline**
- Learn: write three more sections — auth model, URL-state filters, the AI vision import pipeline (image → extraction → review → DB, with schema validation) — *why:* four sections = four ready interview answers.
- DSA: Merge Two Sorted Lists (linked list).
- English: explain the AI pipeline's validation layer aloud.
- GitHub: **atomic-test**: `docs/ARCHITECTURE.md` (3 more sections) + LOG.

**Day 41 (light) — Whiteboard rehearsal + Phase 1 review**
- Learn: on paper, draw AtomicTest's whole architecture from memory; then answer aloud: queue cap? auth? filters? AI? — *why:* this is the Phase 1 milestone test.
- DSA: review all binary-search + linked-list problems so far.
- English: **re-record your 3-min AtomicTest explainer** (your Phase-0 baseline video). Compare. You should sound like a different person.
- GitHub: `notes/phase-1-retro.md` (what you can now explain that you couldn't on Day 1) + LOG.
- *Day 42: rest.* **🏁 Phase 1 milestone: you can defend your architecture cold.**

---

# PHASE 2 · Weeks 7–14 — DSA Core
*Goal: solve a fresh medium in ~30 min and explain it aloud. DSA is the main learning block now; in parallel you keep your code warm with small project tasks. Method every day: attempt 25–30 min → if stuck, watch `[NCyt]` → re-implement from memory next day.*

> **Daily rhythm for Phase 2:** 2 DSA problems (1 new pattern, 1 review) + 30 min reading the pattern theory on `[NeetCode]` + English (narrate every solution aloud — this doubles as interview practice) + commit each solution. The "narrate aloud in English" habit is what makes you interview-ready, not just LeetCode-ready.

## Week 7 — Linked Lists + Two Pointers consolidation
**Day 43** — Learn: linked-list patterns `[NeetCode]`. DSA: Reorder List; Remove Nth Node From End. Eng: narrate both. GitHub: `dsa/linked-list/` ×2 + LOG.
**Day 44** — DSA: Copy List With Random Pointer; Add Two Numbers. Eng: explain the "hash map of old→new node" trick aloud. GitHub: ×2 + LOG.
**Day 45** — DSA: Linked List Cycle (Floyd's); Find the Duplicate Number. Eng: explain Floyd's tortoise/hare aloud — *why:* classic "aha" interview pattern. GitHub: ×2 + `notes/dsa-fast-slow-pointers.md` + LOG.
**Day 46** — DSA: LRU Cache (design — *important*, relate to your figure cache idea). Eng: explain LRU design aloud. GitHub: `dsa/linked-list/lru-cache.js` + LOG.
**Day 47** — DSA: Merge K Sorted Lists; Reverse Nodes in k-Group (hard — attempt, then study). Eng: narrate. GitHub: ×2 + LOG.
**Day 48 (light)** — Review all linked-list problems from memory. Eng: re-narrate LRU. GitHub: `notes/week-07-review.md` + LOG. *Day 49: rest.*

## Week 8 — Trees I
**Day 50** — Learn: tree traversal (DFS/BFS) `[NeetCode]`. DSA: Invert Binary Tree; Max Depth. Eng: explain recursion base/recursive case aloud. GitHub: `dsa/trees/` ×2 + `notes/dsa-tree-traversal.md` + LOG.
**Day 51** — DSA: Diameter of Binary Tree; Balanced Binary Tree. Eng: narrate. GitHub: ×2 + LOG.
**Day 52** — DSA: Same Tree; Subtree of Another Tree. Eng: narrate. GitHub: ×2 + LOG.
**Day 53** — DSA: Lowest Common Ancestor of a BST; Binary Tree Level Order Traversal (BFS). Eng: explain BFS-with-a-queue aloud. GitHub: ×2 + LOG.
**Day 54** — DSA: Right Side View; Count Good Nodes. Eng: narrate. GitHub: ×2 + LOG.
**Day 55 (light)** — Review trees from memory. Eng: re-narrate level-order. GitHub: `notes/week-08-review.md` + LOG. *Day 56: rest.*

## Week 9 — Trees II + Tries
**Day 57** — DSA: Validate BST; Kth Smallest in BST (in-order). Eng: explain why in-order on a BST is sorted. GitHub: ×2 + LOG.
**Day 58** — DSA: Construct Tree from Preorder & Inorder (hard). Eng: narrate slowly. GitHub: ×1 + `notes/dsa-tree-construct.md` + LOG.
**Day 59** — DSA: Binary Tree Max Path Sum; Serialize & Deserialize Binary Tree (hard). Eng: narrate. GitHub: ×2 + LOG.
**Day 60** — Learn: tries `[NeetCode]`. DSA: Implement Trie. Eng: explain what a trie is and where you'd use one (autocomplete — like a problem-search feature!). GitHub: `dsa/tries/implement-trie.js` + `notes/dsa-tries.md` + LOG.
**Day 61** — DSA: Design Add & Search Words; Word Search II (hard). Eng: narrate. GitHub: ×2 + LOG.
**Day 62 (light)** — Review trees + tries. Eng: re-narrate Implement Trie. GitHub: `notes/week-09-review.md` + LOG. *Day 63: rest.*

## Week 10 — Heaps / Priority Queues + a project breather
*Why: heaps are common and underpractised; you also do one small AtomicTest task to keep code warm.*
**Day 64** — Learn: heaps `[NeetCode]`. DSA: Kth Largest in a Stream; Last Stone Weight. Eng: explain a min-heap aloud. GitHub: `dsa/heap/` ×2 + `notes/dsa-heaps.md` + LOG.
**Day 65** — DSA: K Closest Points to Origin; Kth Largest in an Array (quickselect). Eng: narrate. GitHub: ×2 + LOG.
**Day 66** — DSA: Task Scheduler; Design Twitter (heap design). Eng: explain Design Twitter's feed-merge aloud. GitHub: ×2 + LOG.
**Day 67** — DSA: Find Median from Data Stream (two heaps, hard). Eng: narrate the two-heap balance. GitHub: ×1 + LOG.
**Day 68 (project)** — AtomicTest: fix the `getLandingStats()` N+1 query yourself (batch it). Eng: explain "what an N+1 query is and how I fixed mine" aloud, recorded. GitHub: **atomic-test** "perf: batch getLandingStats to remove N+1" + LOG.
**Day 69 (light)** — Review heaps. GitHub: `notes/week-10-review.md` + LOG. *Day 70: rest.* **🏁 ~50 problems done.**

## Week 11 — Backtracking
**Day 71** — Learn: backtracking template `[NeetCode]`. DSA: Subsets; Combination Sum. Eng: explain the "choose/explore/un-choose" template aloud. GitHub: `dsa/backtracking/` ×2 + `notes/dsa-backtracking.md` + LOG.
**Day 72** — DSA: Permutations; Subsets II. Eng: narrate; explain handling duplicates. GitHub: ×2 + LOG.
**Day 73** — DSA: Combination Sum II; Word Search. Eng: narrate. GitHub: ×2 + LOG.
**Day 74** — DSA: Palindrome Partitioning; Letter Combinations of a Phone Number. Eng: narrate. GitHub: ×2 + LOG.
**Day 75** — DSA: N-Queens (hard). Eng: explain the constraint-tracking aloud. GitHub: ×1 + LOG.
**Day 76 (light)** — Review backtracking from memory. Eng: re-narrate Subsets. GitHub: `notes/week-11-review.md` + LOG. *Day 77: rest.*

## Week 12 — Graphs
*Why: graphs are the highest-leverage interview topic after arrays; your math brain will like these.*
**Day 78** — Learn: graph DFS/BFS, grids `[NeetCode]`. DSA: Number of Islands; Max Area of Island. Eng: explain grid-DFS aloud. GitHub: `dsa/graphs/` ×2 + `notes/dsa-graphs.md` + LOG.
**Day 79** — DSA: Clone Graph; Pacific Atlantic Water Flow. Eng: narrate. GitHub: ×2 + LOG.
**Day 80** — DSA: Surrounded Regions; Rotting Oranges (multi-source BFS). Eng: explain multi-source BFS aloud. GitHub: ×2 + LOG.
**Day 81** — DSA: Course Schedule; Course Schedule II (topological sort + cycle detection). Eng: explain topo sort aloud — *why:* very common. GitHub: ×2 + `notes/dsa-topo-sort.md` + LOG.
**Day 82** — DSA: Number of Connected Components; Redundant Connection (Union-Find). Eng: explain union-find aloud. GitHub: ×2 + `notes/dsa-union-find.md` + LOG.
**Day 83 (light)** — Review graphs. Eng: re-narrate Course Schedule. GitHub: `notes/week-12-review.md` + LOG. *Day 84: rest.*

## Week 13 — Dynamic Programming I (1-D)
*Why: DP scares people; broken into patterns it's learnable, and your maths background is an edge. Go slow, understand the recurrence.*
**Day 85** — Learn: DP intro, memoization vs tabulation `[NeetCode]`. DSA: Climbing Stairs; Min Cost Climbing Stairs. Eng: explain "what a recurrence relation is" aloud. GitHub: `dsa/dp/` ×2 + `notes/dsa-dp-intro.md` + LOG.
**Day 86** — DSA: House Robber; House Robber II. Eng: explain the state transition aloud. GitHub: ×2 + LOG.
**Day 87** — DSA: Longest Palindromic Substring; Palindromic Substrings. Eng: narrate. GitHub: ×2 + LOG.
**Day 88** — DSA: Decode Ways; Coin Change. Eng: explain Coin Change's bottom-up table aloud. GitHub: ×2 + LOG.
**Day 89** — DSA: Maximum Product Subarray; Word Break. Eng: narrate. GitHub: ×2 + LOG.
**Day 90 (light)** — DSA: Longest Increasing Subsequence; review week. Eng: re-narrate Coin Change. GitHub: `notes/week-13-review.md` + LOG. *Day 91: rest.* **🏁 ~100 problems done.**

## Week 14 — DP II (2-D) + Greedy + Intervals
**Day 92** — DSA: Unique Paths; Longest Common Subsequence. Eng: explain a 2-D DP grid aloud. GitHub: `dsa/dp/` ×2 + LOG.
**Day 93** — DSA: Coin Change II; Target Sum. Eng: narrate. GitHub: ×2 + LOG.
**Day 94** — DSA: Edit Distance (classic); Best Time to Buy/Sell with Cooldown. Eng: explain Edit Distance's recurrence aloud. GitHub: ×2 + LOG.
**Day 95** — Learn: greedy `[NeetCode]`. DSA: Maximum Subarray (Kadane); Jump Game. Eng: explain Kadane's aloud. GitHub: `dsa/greedy/` ×2 + `notes/dsa-greedy.md` + LOG.
**Day 96** — Learn: intervals. DSA: Insert Interval; Merge Intervals; Non-overlapping Intervals. Eng: explain the sort-by-start interval pattern aloud — *why:* maps to your exam time-slot logic. GitHub: `dsa/intervals/` ×3 + `notes/dsa-intervals.md` + LOG.
**Day 97 (light) — Phase 2 milestone test** — Pick one *unseen* medium at random `[Grind75]`; solve in 30 min while narrating aloud in English. GitHub: `notes/phase-2-retro.md` + the solution + LOG. *Day 98: rest.* **🏁 Phase 2 milestone: fresh medium in ~30 min, explained aloud.**

---

# PHASE 3 + 4 · Weeks 15–20 — System Design, Project Hardening, Portfolio & English
*Goal: learn system design by mapping it onto what you already built (one concept + one practice prompt per week), ship the AI hint feature solo, make your presence recruiter-ready, and get fluent speaking English. DSA drops to maintenance (1–2 review problems/week). System-design notes live in `system-design/concepts/` and `system-design/practice/`.*

## Week 15 — System design: fundamentals + fix AtomicTest bugs
*Why: learn the words for what you built — scale, networking, APIs — and clear the bugs you've been carrying.*
**Day 99** — SD concept: scale fundamentals (latency/throughput, vertical/horizontal) + networking (LB, CDN, DNS); estimate AtomicTest's load. Learn: `[Hello]` Core Concepts; DDIA ch.1. Eng: explain horizontal vs vertical scaling aloud. GitHub: `system-design/concepts/01-fundamentals.md` + LOG.
**Day 100** — SD concept: APIs (REST/RPC/GraphQL, idempotency) + the 7-step interview framework; draw AtomicTest's request-flow diagram. Learn: `[Hello]`. Eng: walk the request flow aloud. GitHub: `system-design/atomictest-map.md` + LOG.
**Day 101** — Project: fix the `handleSubmit` hoisting bug yourself. Eng: explain the TDZ fix aloud. GitHub: **atomic-test** "fix: handleSubmit hoisting (TDZ)" + LOG.
**Day 102** — Project: fix the dead dashboard filter state + the `Promise.all` taxonomy fetch. Eng: explain both fixes. GitHub: atomic-test commits ×2 + LOG.
**Day 103** — Project: fix the `getLandingStats()` N+1 (batch it). Eng: explain what an N+1 is and how you fixed yours. GitHub: atomic-test "perf: batch getLandingStats" + LOG.
**Day 104 (light)** — DSA maintenance: 2 review mediums. Eng: re-explain AtomicTest using this week's vocabulary. GitHub: `reviews/week-15.md` + LOG. *Day 105: rest.*

## Week 16 — System design: databases + ship the AI hint feature (solo)
*Why: databases are the #1 interview area; shipping one feature solo is your proof of independent capability.*
**Day 106** — SD concept: databases (SQL vs NoSQL, indexing, ACID, replication, sharding). Learn: `[Hello]` Databases; DDIA ch.2–3 (skim 5–6). Eng: explain a DB index + when you'd shard, aloud. GitHub: `system-design/concepts/02-databases.md` + LOG.
**Day 107** — SD practice: design a URL shortener, aloud, full 7-step (~35 min). GitHub: `system-design/practice/url-shortener.md` + LOG.
**Day 108** — Project: build the hint API route (Anthropic SDK → structured, schema-validated hint). Eng: explain your prompt design aloud. GitHub: atomic-test "feat: hint API" + LOG.
**Day 109** — Project: build the hint UI (button, loading, reveal) + validation + anti-spam guard. Eng: narrate the client/server split. GitHub: atomic-test "feat: hint UI + guards" + LOG.
**Day 110** — Project: test, deploy; draft case study "Building an AI hint system." Eng: record a 2-min demo in English. GitHub: atomic-test deploy + `notes/casestudy-hints-draft.md` + LOG.
**Day 111 (light)** — DSA maintenance. Eng: re-do the URL-shortener design aloud, timed. GitHub: `reviews/week-16.md` + LOG. *Day 112: rest.* **🏁 Hint feature shipped solo.**

## Week 17 — System design: caching + queues & backpressure (your home turf) + case studies
*Why: this is the week your real TikZ work becomes your strongest interview story.*
**Day 113** — SD concept: caching (layers, cache-aside vs write-through, LRU, invalidation) + async queues + backpressure — mapped to your TikZ queue + figure cache. Learn: `[BBG]` queues; `[Hello]` Caching. Eng: explain cache invalidation + backpressure aloud. GitHub: `system-design/concepts/03-caching-queues.md` + LOG.
**Day 114** — SD practice: design a rate limiter (token bucket, distributed counters), aloud. GitHub: `system-design/practice/rate-limiter.md` + LOG.
**Day 115** — SD: write your AtomicTest render-service deep-dive (request flow, queue cap, 503 overflow, cache, 10× plan) — your single strongest interview answer. Eng: rehearse it aloud. GitHub: `system-design/practice/design-atomictest-render.md` + LOG.
**Day 116** — Publish case study #1: "Why I built a LaTeX microservice instead of pre-rendering." Eng: read aloud, polish. GitHub: publish + link in `README.md` + LOG.
**Day 117** — Publish case study #2: "Capping concurrency in a CPU-bound queue." GitHub: publish + link + LOG.
**Day 118 (light)** — DSA maintenance. Eng: re-do the rate-limiter design aloud, timed. GitHub: `reviews/week-17.md` + LOG. *Day 119: rest.* **🏁 2 case studies live.**

## Week 18 — System design: reliability & consistency + portfolio site
*Why: "what happens when X fails?" is half of every interview; and your portfolio goes live.*
**Day 120** — SD concept: reliability & fault tolerance (redundancy, failover, retries, timeouts, idempotency, circuit breakers) + consistency/CAP + observability. Learn: `[Hello]`; DDIA consistency (skim). Eng: explain CAP + idempotency aloud. GitHub: `system-design/concepts/04-reliability.md` + LOG.
**Day 121** — SD practice: design a news feed (fan-out, caching, ranking), aloud. GitHub: `system-design/practice/news-feed.md` + LOG.
**Day 122** — Project: build a one-page portfolio (Next.js): hero, AtomicTest showcase, links + the AtomicTest case section from `ARCHITECTURE.md`. Eng: shadow. GitHub: new `portfolio` repo + LOG.
**Day 123** — Project: Excalidraw architecture diagram; deploy portfolio (Vercel); GitHub profile README pinning AtomicTest + portfolio. Eng: record a 90-sec portfolio tour. GitHub: portfolio deploy + profile README + diagram + LOG.
**Day 124** — Project: polish AtomicTest's `README.md` (add diagram + screenshots). Eng: narrate the diagram aloud. GitHub: atomic-test README commit + LOG.
**Day 125 (light)** — DSA maintenance. Eng: re-record the portfolio tour. GitHub: `reviews/week-18.md` + LOG. *Day 126: rest.* **🏁 Portfolio + profile live.**

## Week 19 — System design: architecture & security + CV, LinkedIn, first mocks
*Why: service boundaries + auth are decisions you actually made; and your application assets go live.*
**Day 127** — SD concept: service architecture (monolith vs microservices, boundaries, API gateways) + blob storage + security/auth (authn vs authz, sessions, OAuth) — mapped to your app↔sidecar split + single-device sessions + Supabase storage. Learn: `[Hello]`; Xu Vol 1. Eng: explain why you split the render service + single-device sessions aloud. GitHub: `system-design/concepts/05-architecture-security.md` + LOG.
**Day 128** — SD practice: design a file-storage service (Dropbox-lite: blob storage, metadata, chunking), aloud. GitHub: `system-design/practice/file-storage.md` + LOG.
**Day 129** — Project: draft CV in `[Overleaf]`; score on `[RW]`; quantify defensible bullets. Eng: read CV summary aloud. GitHub: `job-search/cv/cv.md` + LOG.
**Day 130** — Project: build LinkedIn (headline, About tutor→builder, Open-to-Work remote, pin case studies). Eng: shadow. GitHub: LOG (LinkedIn live).
**Day 131** — First mock interview `[Pramp]` (coding) + write 4 STAR stories (queue under pressure; N+1 fix; hint shipped solo; why you started AtomicTest). Eng: debrief the mock; tell each STAR aloud. GitHub: `job-search/mocks/mock-01.md` + `job-search/star-stories.md` + LOG.
**Day 132 (light)** — DSA maintenance. Eng: re-tell your 2 best STAR stories. GitHub: `reviews/week-19.md` + LOG. *Day 133: rest.*

## Week 20 — System design: AI/LLM systems + full interview rehearsal + behavioral
*Why: designing AI systems is the fastest-growing SD subtopic and bridges to your AI track; then you rehearse the whole thing.*
**Day 134** — SD concept: designing AI/LLM systems (RAG, vector search, model serving, cost/latency, evals, guardrails, agentic pipelines) — mapped to your AI vision pipeline + hint system. Learn: Chip Huyen "AI Engineering" (relevant chapters); Anthropic agents/RAG docs. Eng: explain a RAG pipeline aloud. GitHub: `system-design/concepts/06-ai-systems.md` + LOG.
**Day 135** — SD practice: design a RAG-powered hint system over your problem bank (vector store, retrieval, LLM call, eval, cost), aloud. GitHub: `system-design/practice/rag-hint-system.md` + LOG.
**Day 136** — SD practice: the big one — "Design AtomicTest" end to end, timed 45 min, recorded, full 7-step framework, ending on trade-offs. Eng: milestone rehearsal. GitHub: `system-design/practice/design-atomictest.md` + LOG.
**Day 137** — System-design mock (live) on `[Exponent]` or `[intio]`. Eng: debrief, focus on speaking clarity. GitHub: `job-search/mocks/mock-02.md` + LOG.
**Day 138** — Write 4 more STAR stories (debugging; stuck-and-learned; teamwork-from-tutoring; changed-my-mind) + prep "tell me about yourself" + own the "did you use AI?" answer. Eng: record until smooth. GitHub: `job-search/star-stories.md` + `notes/pitch-and-ai-answer.md` + LOG.
**Day 139 (light) — Phase 3/4 milestone** — Run a full 45-min system-design round in English (a classic prompt + AtomicTest), ending on trade-offs. GitHub: `reviews/phase-34-retro.md` + LOG. *Day 140: rest.* **🏁 You can run a system-design round in English.**

---

# PHASE 5 · Weeks 21–26 — The Job-Search Machine
*Goal: convert preparation into interviews into an offer. Treat it as a funnel; track every application. Keep ~3 DSA review problems/week and 2 mocks/week to stay sharp under pressure.*

> **Daily rhythm for Phase 5:** AM = applications + outreach (the funnel); midday = 1 DSA review or mock; PM = follow-ups + interview prep for whatever's live + commit. Aim for ~10–15 quality applications/week.

## Week 21 — Profiles live + first applications
**Day 141** — Create profiles on `[Turing]` + `[Arc]` (start their vetting — it takes time). Eng: shadow. GitHub: LOG (profiles live) + keep daily commit (a note or DSA).
**Day 142** — Create `[Wellfound]` + `[Lemon]` profiles; set search filters (remote, your timezone overlap). Eng: shadow. GitHub: LOG + commit.
**Day 143** — Apply to 5 roles (tailor CV summary keywords to each). Track each in your tracker + a sheet. Eng: practice a recruiter-screen answer aloud. GitHub: `notes/applications-log.md` started + LOG.
**Day 144** — Mock #4 `[Pramp]`. Apply to 3 more. Eng: debrief. GitHub: `notes/mock-04-debrief.md` + LOG.
**Day 145** — `[YC]` Work at a Startup: apply to 3 remote-friendly startups with a personal note. Eng: shadow. GitHub: applications-log update + LOG.
**Day 146 (light)** — DSA: 2 review mediums. Eng: re-do "tell me about yourself." GitHub: `notes/week-21-review.md` + LOG. *Day 147: rest.*

## Week 22 — Volume + warm outreach
**Day 148** — Apply to 5; post case study #1 on LinkedIn. Eng: shadow. GitHub: LOG + commit.
**Day 149** — DM 5 recruiters/engineers at target companies (one-line pitch + portfolio link). Eng: practice your pitch aloud. GitHub: `notes/outreach-log.md` + LOG.
**Day 150** — Mock #5 (system design) `[Exponent]`. Apply to 3. Eng: debrief. GitHub: mock debrief + LOG.
**Day 151** — Apply to 5; respond to any recruiter replies same day. Eng: recruiter-screen rehearsal. GitHub: applications-log + LOG.
**Day 152** — Comment thoughtfully on 5 posts by engineers at target companies; post case study #2. Eng: shadow. GitHub: LOG + commit.
**Day 153 (light)** — DSA review. Eng: re-record your strongest STAR story. GitHub: `notes/week-22-review.md` + LOG. *Day 154: rest.*

## Week 23 — Screens & first technicals
**Day 155–159** — Daily: handle live processes (screens, take-homes); for each upcoming interview, do a targeted prep block (company research + their stack + relevant STAR story). Keep applying to refill the funnel (≥3/day). Mock #6 mid-week. Eng: warm up your voice in English before every real call. GitHub: commit prep notes + a DSA problem daily + LOG.
**Day 160 (light)** — Review: which stage are candidates dropping at? Adjust. GitHub: `notes/week-23-review.md` + LOG. *rest day after.*

## Week 24 — Technicals & system-design rounds
**Day 161–165** — Daily: live technical/system-design rounds; before each, re-skim the matching `system-design/` note and rehearse aloud 10 min. Prep negotiation: research ranges (levels.fyi, marketplace rates); draft your "can I have a day to consider?" + counter email. Keep funnel ≥3 apps/day. Mock #7. Eng: speak English aloud daily, even just narrating your prep. GitHub: daily commit (prep note or DSA) + LOG.
**Day 166 (light)** — Review pipeline; tidy notes. GitHub: `notes/week-24-review.md` + LOG. *rest day after.*

## Week 25 — Finals, offers, negotiation
**Day 167–171** — Daily: final rounds; **never accept on the spot** — "thank you, can I have a day?" Always counter once, politely. Keep other processes warm as leverage. If a marketplace places you, weigh it against direct offers. Eng: stay sharp. GitHub: daily commit + LOG.
**Day 172 (light)** — Review offers/pipeline; decision matrix (pay, timezone, growth, stability). GitHub: `notes/week-25-review.md` + LOG. *rest day after.*

## Week 26 — Close, or extend with strength
**Day 173–177** — Daily: close negotiations and accept the best fit; OR, if no offer yet, do **not** stop — your pipeline + skills now compound. Keep applying, book 2 mocks, and write a public "what 6 months of daily practice built" post (great signal, and honest). Eng: keep speaking. GitHub: daily commit + LOG.
**Day 178 — Final retro** — Write `notes/26-week-retro.md`: every milestone hit, every metric (problems solved, apps, mocks, interviews), and what you'd tell yourself on Day 1. GitHub: commit + LOG. **🏁 Offer in hand, or a strong live pipeline + a portfolio that proves you're an engineer.**

---

## The daily checklist (print this / pin it)

Every active day, in order:
1. ☐ **DSA** — today's problem(s); narrate the approach **aloud in English**.
2. ☐ **Learn** — today's topic from the resource listed.
3. ☐ **English** — today's drill (shadow / explain aloud / record).
4. ☐ **GitHub** — make today's exact commit; add one line to `LOG.md`.
5. ☐ **Tracker** — tick the day, log the streak.

If a day collapses to nothing else, do #1 + #4 + #5. **Never break the commit streak.** The graph is the proof.

---

*The dates will slip. The order won't. Follow the sequence, commit every day, speak English out loud every day, and in 26 weeks you will not be a tutor who built an app with AI — you'll be an engineer with a product, a green graph, and the words to prove both.*
