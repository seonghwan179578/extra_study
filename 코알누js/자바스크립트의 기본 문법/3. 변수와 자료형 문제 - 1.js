// 문제1. a와 b의 값을 바꾸시오

let a = 1
let b = 2 
console.log(a,b) // 1,2 


let c = a
a = b
b = c  // 자바스크립트는 기본적으로 한 줄 단위 실행
console.log(a,b) //  2,1 