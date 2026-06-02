# JS closure & hoisting (Day 1)

> My notes, grounded in the real `queue.js`.
> Created by  on 2020-04-24.

## The mental model: two phases
1. Closures are the function's that reffers to independant variables that are used locally but defined in an enclosing scope.
2. A closure is what happens when a function outlives the moment it was created but keeps a live link back to the scope it was born in. A closure is a function plus the variables it captured — carried around like a backpack.
3. That persistence-after-the-defining-function-returned is exactly the closure mechanism.