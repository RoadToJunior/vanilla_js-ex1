//1. Napisz funkcję która zwraca sumę wszystkich liczb zawartych w tablicy z wykorzsytaniem metody map.
//1b. Napisz drugą wersję tej funkcji z wykorzystaniem pętli for of.

//2. Napisz funkcję która zwraca sume wartości z przedziału dwóch liczb wprowadzonych do funkcji.

const arr = [4, 3, 645];

// const addNumbersFromArray = (array) => {
//   let sum = 0;
//   for (n of array) {
//     sum += n;
//   }
//   return sum;
// };

// const addNumbersFromArray = (array) => {
//   let sum = 0;
//   array.map((n) => (sum += n));
//   return sum;
// };

// addNumbersFromArray(arr);
// addScope(4, 5);

// function addScope(a, b) {
//   let sum = 0;
//   for (; a <= b; a++) {
//     sum += a;
//   }
//   return sum;
// }

//ex2. .forEach, .reduce
//reduce
const addNumbersFromArray = (array) => {
  let sum = 0;
  const result = array.reduce((acc, curr) => acc + curr, sum);
  return result;
};

addNumbersFromArray(arr);
