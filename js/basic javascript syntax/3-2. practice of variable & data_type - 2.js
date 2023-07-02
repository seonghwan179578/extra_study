//문제2. 다음 연산자들의 결과값을 예측한 후 console.log()를 확인해 보시오

// 20 + 30
let a = 20
let b = 30
console.log(a+b) // 20+30 -> 50
// “20” + “30”
a = "20"
b = "30"
console.log(a+b) // 2030
// “Hello” + " " + 2021
a = "Hello"
b = 2021
console.log(a+b) // hello2021
// 1 + 2 * 3
a = 1
b = 2
let c = 3
console.log(a+b*c) // 7
// (1 + 3) ** 2
console.log((a+c)**b) // 4*2*2 -> 16
// 1 / 0
let d = 0
console.log(a/d) // Infinity
// 6 % 2
let f = 6
console.log(f%b) // 6 ÷ 2의 나머지 -> 0
// 7.5 % 2
let g = 7.5
console.log(g % b) // 7.5 ÷ 2의 나머지 -> 1.5
// 5 == 5
let e = 5
console.log(5 == 5) // 양쪽 모두 값이 5로 같으므로 true
// 5 === 5
console.log(e === e) // 양쪽 값이 모두 5로 같고 데이터 타입 역시 숫자 타입으로 같으므로 true
// 5 == “5”
console.log(e == "5") // 값이 5로 같기 때문에 true
// 5 === “5”
console.log(e ==="5") // 값은 같지만 타입이 다르기 때문에 false
// 5 != 5.0
let ee = 5.0
console.log( e != ee) // 둘다 5라서 false
// 5 !== 5.0
console.log(e !== ee) // 마찬가지로 false
// “true” === true
console.log("true" === true) // "true" 는 문자열 타입, true는 Boolean 타입으로 서로 다르기 때무네 false
// 5 <= 5.0
console.log(e <= ee) // 5는 5.0 이하이므로 true
// 5 >= 5
console.log(e >= e) // 5는 5 이상이 맞으므로 true
// true || true
console.log(true || true) // or은 둘 중 하나만 true여도 true이기 때문에 true
// true || false
console.log(true || false) // or은 둘 중 하나만 true여도 true이기 때문에 true
// true && true
console.log(true && true) // and는 둘 다 true여야 true인데, 여기선 양쪽 모두 참이므로 true
// true && false
console.log(true && false) // 오른쪽이 거짓이므로 false
// !true
console.log(!true) // 참이 아니다를 출력하므로 결과는 false
// !false
console.log(!false) // 거짓이 아니다를 출력하므로 결과는 true