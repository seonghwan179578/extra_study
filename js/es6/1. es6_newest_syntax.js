// // 1. 객체 초기화


// let name = "seonghwan"
// let age = 29

// // 기존 방식 => let person = {name : name, age : age}
// // 아래의 새로운 방식과 결과는 같다

// // 새로운 방식 => 변수의 이름을 가지고 객체 키 값을 자동으로 만듦
// // let person = {name, age}
// // console.log(person) // {name: 'seonghwan', age: 29} 출력

// // 다만 이 방법은 변수 이름을 키 값으로 하는 경우에만 가능
// // 예를 들어 키 값이 nameValue, ageValue 등으로 변수 이름과 다르면, 여전히 기존 방법을 사용해야함. 키 값과 변수 이름이 같지 않기 때문
// let person = {nameValue : name, ageValue : age}
// console.log(person) // {nameValue: 'seonghwan', ageValue: 29} 출력




// 2. 객체 분해


// let bts = {
//     name : "방탄소년단",
//     num : 7
// }
// 기존 방식. 객체에 있는 값을 꺼내서 다시 변수로 만드는 방법
// let name = bts.name
// let num = bts.num
// 아래의 새로운 방식과 결과는 동일

// console.log(name, num) // 방탄소년단 7 출력

// 새로운 방식
// let {name, num} = bts // 키 값을 저절로 mention 해줘서 변수가 저절로 생성
// console.log(name, num) // 위의 기존방식과 똑같이 방탄소년단 7 출력. 방식의 차이일 뿐 결과는 동일

// 객체 초기화와 마찬가지로 변수의 이름를 객체의 키 값과 다르게 하고 싶다면, 여전히 기존 방식을 사용해야함
// let nameValue = bts.name
// let numValue = bts.num

let {nameValue, numValue} = bts
console.log(nameValue, numValue) // undefined undefined 출력. 객체 안에 nameValue, numValue가 없기 때문







// 3. 백틱


// 기존 방식
// let name = "seonghwan"
// let age = 30

// console.log("제 이름은",name,
// "입니다. 제 나이는 ", age, "입니다.")

// // ES6 방식
// console.log(`제 이름은 ${name}입니다. 제 나이는 ${age} 입니다.`)





// 4. 배열
// let array = [1, 2, 3]

// // 기존 방식
// // let a = array[0]
// // let b = array[1]
// // let c = array[2]
// // console.log(a, b, c)

// // 새로운 방식
// // let [a, b, c] = array
// // console.log(a,b,c)

// // a만 출력하는 방법
// let [a,...rest] = array

// console.log(a)
// // a를 제외한 나머지를 출력하는 방법
// console.log(rest)




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

// ...을 이용하면 변수의 내용을 복사
let result = [...a, ...b, ...c]
console.log(result)




// 새로운 함수 선언 방식

// 기존 방식
function foo() {
    return "haha"
}

// ES6 방식. 변수 안에 함수를 넣어버림
// 화살표(=>)가 function을 대체 
let foo = ()=> "haha"
console.log(foo())