function count(n) {
  let counts = new Array(n.length);
  for (let i = 0; i < n.length; i++) {
    let count = 0;
    for (let j = i + 1; j < n.length; j++) {
      if (n[j] < n[i]) {
        count++;
      }
    }
    counts[i] = count;
  }
  return counts;
}

let n = [5, 3, 4, 1];
console.log(count(n));
