// How to make an objec iterable by Symbol.iterator

const test = {
  from: 1,
  to: 5
};

test[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      }
      return { done: true }
    }
  }
}

for (let i of test) {
  console.log(i)
}

// Or another approach for a bit cleaner code

let test = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    }
    return { done: true };
  }
}

for (let i of test) {
  console.log(i);
}

// Explicitly call iterator

const str = 'test';

const iterator = str[Symbol.iterator]();



while (true) {

  const result = iterator.next();
  if (result.done) {
    break;
  }
  console.log(result.value);
}