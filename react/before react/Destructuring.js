let person = {
    name : "seonghwan",
    age : 30
}

// let name = person.name
// let age = person['age']

let {name, age} = person


console.log(name, age)

// 배열에서도 구조 분해 가능
let array = [1,2,3,4]
// let [a,b] = array

console.log(a,b)

// rest 파라미터 문법
let [a,b,...rest] = array
console.log(a)

