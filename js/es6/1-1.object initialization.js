// // 1. 객체 초기화


let name = "seonghwan"
let age = 29

// 기존 방식 => let person = {name : name, age : age}
// 아래의 새로운 방식과 결과는 같다

// ES6 방식 => 변수의 이름을 가지고 객체 키 값을 자동으로 만듦
// let person = {name, age}
// console.log(person) // {name: 'seonghwan', age: 29} 출력

// 다만 이 방법은 변수 이름을 키 값으로 하는 경우에만 가능
// 예를 들어 키 값이 nameValue, ageValue 등으로 변수 이름과 다르면, 여전히 기존 방법을 사용해야함. 키 값과 변수 이름이 같지 않기 때문
let person = {nameValue : name, ageValue : age}
console.log(person) // {nameValue: 'seonghwan', ageValue: 29} 출력