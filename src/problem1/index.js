// using a for loop
var sum_to_n_a = function (n) {
  let result = 0;
  for (let i = 1; i <= 5; i++) {
    result += i;
  }
  return result;
};

// using Array and reduce
var sum_to_n_b = function (n) {
  const array = Array.from({ length: n }, (_, i) => i + 1);
  const result = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
};

// using recursion
var sum_to_n_c = function (n) {
  if (n <= 0) return 0;

  return n + sum_to_n_c(n - 1);
};

console.log("using a for loop:", sum_to_n_b(5));
console.log("using Array and reduce:", sum_to_n_a(5));
console.log("using recursion:", sum_to_n_c(5));
