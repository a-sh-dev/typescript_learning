// learnt from Fireship

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { done: true, value: end };
    },
  };
}

// Use the range on for of loop
for (let n of range(0, 70, 5)) {
  console.log(n);
}
