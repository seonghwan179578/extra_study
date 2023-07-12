// 새로운 함수 선언 방식

// 기존 방식
function foo() {
    console.log("hello")
}

foo()

function laugh() {
    return "haha"
}
laugh()


// ES6 방식. 변수 안에 함수를 넣어버림
// 화살표(=>)가 function을 대체 
let foo = ()=> {
    console.log("hello")
}
foo()

// 함수가 한 줄이면 return 생략 가능
// 함수가 한 줄이고 리턴만 있으면 {} 생략 가능
let laugh = () => "haha"
laugh()

// 함수가 두 줄 이상이면 {} 필요
let smile = ()=>{
    console.log("kekeke")
    return "haha"
}
smile()



// 화살표 함수의 단점 : this를 생성하지 못함
let years = 94
let identity = {
    name : "seonghwan",
    years : 1994,
    getInfo : ()=> {
        console.log(this.years)
    }
}
// this를 생성하지 못하기 때문에 undefined 출력
identity.getInfo()
