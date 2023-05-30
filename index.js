function squareSum(numbers = [0, 3, 4, 5]) {
  let sum = 0;

  for (let i = 0; i <= numbers.length - 1; i = i + 1) {
    sum = sum + numbers[i] * numbers[i];
  }

  return sum;
}

console.log(squareSum());
