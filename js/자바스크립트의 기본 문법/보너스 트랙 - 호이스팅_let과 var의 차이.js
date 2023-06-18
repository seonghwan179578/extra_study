// const -> 상수. 즉 변하고 싶지 않은 값들을 만들 때 쓰임 .ex) 아이디, 비밀번호 등

// var의 문제점 : 

// 호이스팅 : 함수가 실행되기 전에 안에 있는 변수들을 범위의 최상단으로 끌어올리는 것
// 자바스크립트에서는 호이스팅시 변수의 선언과 (변수의)초기화(undefined으로)를 같이 실행시킴
// 값 할당은 나중에 그 줄 가서 할당
// console.log(a) // 아직 변수 a를 선언하기 전이므로 undefined 출력
// var a = 1 // 변수 a에 1이라는 값 할당
// console.log(a) // 변수 a에 값이 할당되었으므로 1 출력


// a = 1 // 
// var a // 선언을 뒤에서 해도 가능
// console.log(a)


// var는 전역변수와 지역변수의 개념이 확실치 않다
// 전역변수 : 블럭 밖에서 선언을 한 어디서든 쓰일 수 있는 변수
// 지역변수 : 블럭{} 안에서 선언된 변수. 블럭 안에서만 사용 가능

// for(var i = 1; i<5;i++) {
//     console.log(i)
// } // 1, 2, 3, 4 출력. 블럭 안에서의 i라는 지역변수 사용
// console.log(i) // 5가 추가로 출력됨 // var는 함수만 지역변수로 호이스팅 되고, 나머지는 다 전역변수로 올림


// var a = 1
// console.log(a) 
// var a = 2 // 이름이 같은 변수가 2개. 하지만 var에서는 허용
// console.log(a) // 정상적으로 1, 2 출력


// let a = 1
// console.log(a)
// let a = 2
// console.log(a) // a가 이미 선언됐다는 에러 발생 // SyntaxError : identifier 'a' has already been declared 

// for(let i = 1; i<5; i++) {
//     console.log(i)
// }
// console.log(i) // i가 for문에서 지역변수로 선언됐기 때문에, 블럭 밖에 있는 i는 지역변수에 접근 불가
//                // ReferenceError : i is not defined at ~(에러 위치)

 console.log(a)
 let a = 1
 console.log(a) // ReferenceError : Cannot access a'a before initialization
                참조에러 : 치기화 전에 a에 접근할 수 없음

// Temporal Death Zone(TDZ)
// a가 호이스팅으로 기억된 건 알겠으나, a 선언문이 나오기 전까진 a에 접근할 수 없다
// 변수 a를 실행하는 코드가 변수 선언보다 먼저 나왔으므로 위의 에러 발생
