// 배열함수 forEach

let names = ["Steven Paul Jobs",
"BIll Gates",
"Mark Elliot uckerberg",
"Elon Musk",
"Jeff Beznos",
"Warren Edward Buffett",
"Larry Page",
"Larry Ellision",
"Tim Cook",
"Lloyd Blankfein"]

// for문 방식
for(let i = 0; i<names.length; i++) {
    console.log(names[i])
}


// forEach 방식

// 매개변수로 함수를 받는다
// 이 함수에 item(배열 안에 있는 요소들)을 매번 넣어준다
function printName(item) {
    console.log(item)
}
names.forEach(printName) // => 배열함수가(forEach) 함수(printName)를 매개변수로 받음


// printName 함수가 forEach 함수 '딱 한 곳에서만 쓰이기 때문에'
// 굳이 이름을 부여할 필요 없이 익명함수로 처리 가능
// 익명함수는 불필요하게 메모리를 차지하지 않고, 사용된 후에 사라짐


names.forEach(function(item) {
    console.log(item)
})


// ES6 방식
names.forEach((item)=>{console.log(item)})
// 인덱스 번호도 매개변수로 이용 가능
names.forEach((item, index)=>{console.log(item, index)})