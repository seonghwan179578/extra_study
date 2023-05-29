// let fruit1 = "banana"
// let fruit2 = "apple"
// let fruit3 = "grape"
// let fruit4 = "mango"

// 배열 : 관련 있는 데이터들을 하나로 묶어서 하나의 변수 아래에 저장하는 것
let fruit = ["banana", "apple", "grape", "mango"] // // fruit1 ~ 4까지를 fruit 하나의 배열로 정리
console.log(fruit) 
console.log(fruit[0]) // banana 출력
                      // fruit 배열에 있는 0번째 값 출력(index번호가 0) // index 번호는 0부터 시작

fruit[0] = "cherry" // index번호0의 값을 cherry로 변경
console.log(fruit[0]) // cherry 출력 // 값을 바꾸고 싶으면 인덱스 번호로 접근해서 변경 가능
fruit[2] = "tomato"
console.log(fruit) // cherry, apple, tomato, mango 출력

// pop : 배열의 마지막에 있는 아이템을 제거
fruit.pop() // 마지막 번호인 mango 삭제
console.log(fruit) // cherry, apple, tomato만 출력

// push : 배열의 마지막 번호 뒤로 새로운 값을 추가
fruit.push("pineapple") // 마지막 번호의 뒷번호에 값을 추가
console.log(fruit) // cherry, apple, tomato, pineapple 출력

// includes() : 해당 아이템을 배열이 포함하고 있는지 알려줌
fruit.includes("apple") // fruit 배열에 apple이 있는지 확인
console.log(fruit.includes("apple")) // 배열에 apple이 있으므로 true 출력
console.log(fruit.includes("pear")) // 배열에 없으므로 false 출력

// indexOf() : 값의 인덱스 번호를 찾아줌
fruit.indexOf("apple")
console.log(fruit.indexOf("apple")) // apple의 인덱스번호인 1 출력
 
// slice() : 배열 아이템을 잘라내는 역할. 아이템을 하나를 받을 수도 있고 2개를 받을 수도 있다.
// 하나인 경우는 시작점을 말함(시작점 이후의 모든 값을 잘라냄).
// ※ 인덱스번호가 아닌 배열 아이템의 순서. 혼동하지 않도록 주의
// 값이 2개인 경우는 시작점과 끝점을 나타냄(끝점은 미포함)
console.log(fruit.slice(2)) // 두 번째 아이템인 apple까지 잘라내고 나머지만 출력 ∴ tomato, pineapple 출력
console.log(fruit.slice(1)) // 첫 번째 아이템인 cherry만 잘라내고 나머지 출력 ∴ apple, tomato, pineapple 출력
console.log(fruit.slice(1,3)) // 1번부터 3번 '이전'까지 자르기. 첫 번째 값인 cherry가 잘리고 세 번째 값인 tomato는 잘리지 않은 채 세 번째까지 출력이므로 apple, tomato 출력
// splice(n) -> n까지 자르고 출력
// slice(m,n) -> m까지 자르고 n까지 출력


// splice : 시작점으로부터 몇개의 아이템을 잘라내고 싶은지
// fruit.splice(2,1) // (시작점, 잘라낼 개수) //  인덱스번호2부터 1개의 아이템 잘라냄
// console.log(fruit) // 인덱스번호 2부터 하나가 잘라내므로 tomato만 잘려나간 채 cherry, apple, pineapple 출력

// fruit.splice(2,2)
// console.log(fruit) // 인덱스번호2부터 2개가 잘리므로 tomato, pineapple이 잘린 채 cherry, apple만 출력

fruit.splice(0,2) // 인덱스번호0부터 2개 제거
console.log(fruit) // 인덱스번호 0, 1이 잘리므로 tomato, pineapple 출력


// slice, splice의 차이
// slice는 기존의 배열은 수정되지 않는다. 
// 따라서 slice 후에 console.log(fruit)를 하면 과일 4개가 그대로 나온다. 기존의 배열 자체를 자른 건 아니기 때문
// splice는 기존의 오리지널 배열 자체가 수정된다