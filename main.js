//1. Napisz funkcję która zwraca sumę wszystkich liczb zawartych w tablicy z wykorzsytaniem metody map.
//1b. Napisz drugą wersję tej funkcji z wykorzystaniem pętli for of.

//2. Napisz funkcję która zwraca sume wartości z przedziału dwóch liczb wprowadzonych do funkcji.

let sum = 0;

const addNumbersFromArray = (array) => {
  for (n of array) {
    n += sum;
  }
};

const addNumbersFromArray = (array) => {
  return array.map((n) => (n += sum));
};

const arr = [4, 3, 645];
addNumbersFromArray(arr);

// function addScope(a, b) {}
