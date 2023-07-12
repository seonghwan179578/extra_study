// 1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"
// let store = {    name:name,    fruits:fruits,    address:address
// }
// console.log(store)

// 객체 초기화 

let name = "noona's fruit store"
let fruits = ["banana","apple","mango"]
let address = "Seoul"

let store = {name, fruits, address}
console.log(store)




// 2. es6 문법을 이용하여 다음과 같이 출력하시오
// 제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul에 있습니다.

// 백틱 활용

console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address}에 있습니다.`)




