function makeCounter() {
    let count = 0;
    return () => ++count;
}
const counter = makeCounter();
console.dir(counter());
console.dir(counter());
console.dir(counter());
