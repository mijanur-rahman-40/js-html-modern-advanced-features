// yield work like return
// function into iterator
// Simple example
function* generator(i) {
    yield i;
    yield i + 10;
}

const gen1 = generator(10);
console.log(gen1.next().value);
console.log(gen1.next().value);

function* idMaker() {
    let index = 0;
    while (true)
        yield index++;
}

var gen2 = idMaker()

console.log(gen2.next().value); // 0
console.log(gen2.next().value); // 1
console.log(gen2.next().value); // 2
console.log(gen2.next().value); // 3

// Example with yield*
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen3 = generator(10);

console.log(gen3.next().value); // 10
console.log(gen3.next().value); // 11
console.log(gen3.next().value); // 12
console.log(gen3.next().value); // 13
console.log(gen3.next().value); // 20

// Passing arguments into Generators
function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

var gen4 = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen4.next();             // 0
gen4.next('pretzel');    // 1 pretzel
gen4.next('california'); // 2 california
gen4.next('mayonnaise'); // 3 mayonnaise

// Return statement in a generator
function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
}

var gen5 = yieldAndReturn()
console.log(gen5.next()); // { value: "Y", done: false }
console.log(gen5.next()); // { value: "R", done: true }
console.log(gen5.next()); // { value: undefined, done: true }

// Generator as an object property
const someObj = {
    *generator() {
        yield 'a';
        yield 'b';
    }
}

const gen6 = someObj.generator()

console.log(gen6.next()); // { value: 'a', done: false }
console.log(gen6.next()); // { value: 'b', done: false }
console.log(gen6.next()); // { value: undefined, done: true }

// Generator as an object method
class Foo1 {
    *generator() {
        yield 1;
        yield 2;
        yield 3;
    }
}

const f = new Foo1();
const gen7 = f.generator();

console.log(gen7.next()); // { value: 1, done: false }
console.log(gen7.next()); // { value: 2, done: false }
console.log(gen7.next()); // { value: 3, done: false }
console.log(gen7.next()); // { value: undefined, done: true }

// Generator as a computed property
class Foo2 {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
    }
}

const SomeObj = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
    }
}

console.log(Array.from(new Foo2)); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]

// Generator defined in an expression
const foo = function* () {
    yield 10;
    yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
