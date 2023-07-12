// this가 없어서 생기는 문제
// 지역변수 대신 전역변수가 출력되는 문제 발생
let age = 17
let person = {
    name : "seonghwan",
    age : 29,
    getInfo : function() {
        console.log(age)
    }
}

person.getInfo() // 29가 아닌 17이 출력되는 문제, 즉 전역변수가 출력되버리는 문제가 발생

// 여기서 this의 역할 => 전역변수와 지역변수를 구분시키는 역할
// 정확히 말하면 함수를 부르는 객체가 this
// this를 이용하여 지역변수 years(1994)를 출력한 모습
// let years = 94
// let identity = {
//     name : "seonghwan",
//     years : 1994,
//     getInfo : function() {
//         console.log(this.years)
//     }
// }
// identity.getInfo()


// this : 나 자신을 불러준 객체
let years = 94
let identity = {
    name : "seonghwan",
    years : 1994,
    getInfo : function() {
        console.log(this)
    }
}
// this가 들어있는 객체 자체(여기서는 identity)를 출력
identity.getInfo()