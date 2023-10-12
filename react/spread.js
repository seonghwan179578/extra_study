// 객체 안의 값을 변경도 가능
let person = {
    name : "seonghwan",
    age : 12
}

let person3 = person
let person2 = {...person,name : "jun"}

console.log(person3)
console.log(person2)

let a = [1,2]
let b = [...a,3]