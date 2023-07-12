// 객체에서의 ... 활용
let person = {
    name : "seonghwan",
    age : 29,
    male : true
}
// name만 필요하고 나머지는 다시 객체로 이동
let {name, ...restInfo} = person

console.log(name, restInfo) // name만 변수로 빠져나오고 나머지 age, male은 객체에 포함된다





// a, b, c 합치기
let a = [1, 2]
let b = [3, 4]
let c = [5, 6]


// 기존 방식
let result = a.concat(b,c)
console.log(result)

// ES6 방식
// ...을 이용하여 변수의 내용을 복사
let result = [...a, ...b, ...c] // ...a => a에 있는 내용 전부를 가져와라, ...b => b에 있는 내용 전부를 가져와라...
console.log(result)