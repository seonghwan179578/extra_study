// let color = "black" // let : 변수를 선언하는 것. color : 변수 이름(변수의 이름은 겹치면 안 됨). = : 오른쪽에 있는 값을 왼쪽에 집어 넣는다는 뜻. black이라는 값을 color라는 양동이에 담는 것
// let color2 = "pink"
// console.log(color, color2) // 변수의 이름을 불러주면 그 안의 값이 나온다 // 복수의 변수를 같이 출력할 수 있다


// let color = "pink"
// color = "black" // let을 안 쓰면 기존 변수를 가져다 쓰는 것. 즉 기존에 있던 동일명 변수의 값만 변경 가능
// console.log(color) // pink가 아닌 black 출력

// const color = "pink"
// color = "black" // const는 변수에 있는 값을 변경하지 못한다. 1번 값을 할당하면 재할당 불가
//                 // 바뀌면 안 되는 고정시켜야 하는 값들을 const로 선언함
// console.log(color) // 에러 발생


var password = "pink" // var -> 변수 값 변경 가능
password = "black"

console.log(password) // 가장 마지막에 선언된 값인 black 출력