function solution(S) {
  let newArray = [];

  newArray.push(S.split("v").length - 1);
  newArray.push(S.split("<").length - 1);
  newArray.push(S.split(">").length - 1);
  newArray.push(S.split("^").length - 1);

  const index = newArray.indexOf(Math.max(...newArray));
  if (index > -1) { 
    newArray.splice(index, 1); 
  }
  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    
    sum += newArray[i];
  }

  return sum;
}