// 4. 배열
let array = [1, 2, 3]

// // 기존 방식
// let a = array[0]
// let b = array[1]
// let c = array[2]
// // INDEX 번호 0, 1, 2에 해당하는 1, 2, 3 출력
// console.log(a, b, c)

// // ES6 방식. 방식만 다를 뿐 위의 기존방식과 결과는 동일
// let [a, b, c] = array
// console.log(a,b,c)

// a만 출력하는 방법
let [a,...rest] = array

console.log(a)
// a를 제외한 나머지를 출력하는 방법
console.log(rest)
