function solution(A) {
  let newArray = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 3 === 0) {
      newArray.push(A[i]);
    } 
  }
  return Math.max(...newArray);
}




console.log(solution([-6, -91, 1011, -100, 84, -22, 0, 1, 473]));