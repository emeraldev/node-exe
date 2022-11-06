function solution(A) {
  let arr = A.sort((a, b) => a - b);
  let small = 1;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n > 0) {
      if (small < n) {
        return small;
      } else {
        small = n + 1;
      }
    }
  }
  return small;
}