// String 타입 : 문자열(일반적으로 흔히 보는 문장, 단어 등)
// 큰따옴표 or 작은따옴표 안에 들어간 데이터는 모두 String 타입
let password1 = "pink"
let password2 = "123"+1



console.log(password2) // => 1231 출력. 123 오른쪽에 1이 붙는 것일 뿐 
                       // 123+1이 아니다


// 숫자 타입 : 따옴표 안에 안 들어간 숫자는 숫자 타입
let password3 = 123+1
console.log(password3) // 124 출력


// boolean 타입(true, false 두 가지만 존재)
// 논리 연산에서 자주 쓰임

let password4 = true
let password5 = false


// 연산
let password = 1
password = password + 2
console.log(password) // 3 출력. 사칙연산 모두 가능

password = password % 2 // % => 나누기 한 나머지

console.log(password) // 1 출력 = 2÷1의 나머지 


// 논리연산자
password = password > 2 // password는 1이므로 2보다 작다 
                        // 거짓이므로 false 출력


