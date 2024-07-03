// Simple example. Generator function return an object like that {done: Boolean, value: any}

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const generation = gen();

const one = generation.next();
const two = generation.next();
const three = generation.next();

console.log(JSON.stringify(one)); // 1
console.log(JSON.stringify(two)); // 2
console.log(JSON.stringify(three)); // 3

// We can  work with generator in for of loop

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const generaiton = gen();

for (let item of generaiton) {
  console.log(item); // 1 then 2 then 3
}

// Cause the generator is iterable, we can work with all functionality

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const arrayTest = [0, ...gen()]; // [0,1,2,3]

// Also can use for working with an object

const range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
}

const testArray = [...range]
console.log(testArray); // [1,2,3,4,5]

// We can create compositions of generators and iterate them

function* generatorSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatorsCollection() {
  yield generatorSequence(11, 22);
  yield generatorSequence(55, 66);
  yield generatorSequence(20, 40);
}

const collection = generatorsCollection();

for (let item of collection) {
  for (let subItem of item) {
    console.log(subItem);
  }
}

// Also we can united the result of composition like here (need to use "*" symbol: yield*)

function* generatorSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatorsCollection() {
  yield* generatorSequence(11, 22);
  yield* generatorSequence(55, 66);
  yield* generatorSequence(20, 40);
}

const collection1 = generatorsCollection();

for (let item of collection1) {
  console.log(item);
}

// The under the hood example

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;

}

let str = '';

for (let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z


// We can set arguments in the next() Important - can't set arguments when call next() for the first time

function* gen() {
  let result = yield 'Show result';
  console.log(result); // (#)
}

const test = gen();
const word = test.next().value; // return 'Show result'
console.log(word); // Show result
test.next(4); // output in console 4 like here(#)


// Also we can call several times next() with arguments

function* gen() {
  let result1 = yield 'Test 1';
  console.log(result1);
  const result2 = yield 'Test 2';
  console.log(result1 + result2);
}

const generation1 = gen();
console.log(generation.next().value);
console.log(generation.next(3).value);
console.log(generation.next(40).done);

// Output: Test 1 -> 3 -> Test 2 -> 43 -> true
// Explanation: Це як гра в “пінг-понг”. Кожне next(value) (за винятком першого) передає значення в генератор, яке стає результатом поточного yield, а потім повертає результат наступного yield.

// We can interrup by throwing an error

function* gen() {
  try {
    let result = yield 'Test';
    // When we throw an error we will stop here
    console.log('Some data');
  } catch (error) {
    console.log(error);
  }
}

const generation2 = gen();
console.log(generation.next().value);
generation.throw(new Error('error')); // Error: error

// We can use generator.return(value: any) and this approach will stop generator work

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const generation3 = gen();

console.log(JSON.stringify(test.next())); // {done: false, value: 1}
console.log(JSON.stringify(test.return('Some value'))); // {done: true, value: 'Some value'}
console.log(JSON.stringify(test.next())); // {done: true}