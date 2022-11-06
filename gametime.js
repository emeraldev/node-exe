function solution(A, B) {
  let a = [];

  if (A === B) {
    return 0;
  } else if (A > B) {
    let intervalValue = 15;
    var A = new Date("1/1/2022 " + A);
    var B = new Date("1/2/2022 " + B);


    var offset = intervalValue * 1000 * 60;
  
    let init = A.getMinutes() + intervalValue;
  
    do {
      A = new Date(A.getTime() + offset);
      if (A < B)
        a.push(A);
    } while(A < B);

    if (B.getMinutes() === 00) {
      return a.length + 1;
    }

  } else {
    let intervalValue = 15;
    var A = new Date("1/1/2022 " + A);
    var B = new Date("1/1/2022 " + B);
    var offset = intervalValue * 1000 * 60;
  
    let init = A.getMinutes() + intervalValue;
  
    do {
      A = new Date(A.getTime() + offset);
      if (A < B)
        a.push(A);
    } while(A < B);
    if (init < intervalValue || init < 30) {
      if (init > intervalValue) {
        return a.length - 1;
      } else {
        return a.length ;
      }
    }
  }
}




console.log(solution('20:00', '06:00'));