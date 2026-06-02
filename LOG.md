# Road to Remote — daily log

One line every active day. Even a 15-minute day gets a line. The streak is the point.

---

- **Day 1 (2026-06-01)** — Set up the repo. Studied JS scope & hoisting; understood the real `handleSubmit` temporal-dead-zone bug in `ExamScreen.tsx` (the effect's dependency array reads the `handleSubmit` const at render time → `ReferenceError` when ordered above its declaration; the fix is ordering, and it's a `useCallback`/`const` precisely for referential stability). Wrote `notes/js-scope.md`.
- **Day 2 (2026-06-02)** - Closely Understood The Closure and Clear the confusion between global scope and modular scope in execution context With `queue.js` in my project.  Wrote `notes/js-closure.md`. Also wrote leetcode contains-duplicate in `db/contains-duplicate`
- 