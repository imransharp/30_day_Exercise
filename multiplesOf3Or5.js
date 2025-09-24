
function multiplesOf3Or5(n) {
  function sumDivisibleBy(k) {
    const m = Math.floor((n - 1) / k);
    return k * m * (m + 1) / 2;
  }

  return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}

// ✅ Tests
console.log(multiplesOf3Or5(10));    // 23
console.log(multiplesOf3Or5(49));    // 543
console.log(multiplesOf3Or5(1000));  // 233168
console.log(multiplesOf3Or5(8456));  // 16687353
console.log(multiplesOf3Or5(19564)); // 89301183
