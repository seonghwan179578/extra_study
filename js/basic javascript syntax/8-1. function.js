// console.log("빵 두기")
// console.log("상추 두기")
// console.log("고기패티 두기")
// console.log("뚜껑 덮기")

// console.log("콜라통 선택")
// console.log("얼음 담기")
// console.log("콜라 담기")

// console.log("감튀박스 선택")
// console.log("감튀 담기")


// -----------------------------------------------------


// function makeBurger() {
//     console.log("빵 두기")
//     console.log("상추 두기")
//     console.log("고기패티 두기")
//     console.log("뚜껑 덮기")
// }

function serveCoke() {
    console.log("콜라통 선택")
    console.log("얼음 담기")
    console.log("콜라 담기")
}

function serveFrenchFries() {
    console.log("감튀박스 선택")
    console.log("감튀 담기")
}

// 이 상태로 실행하면 함수가 실행되지 않는다
// 함수를 '불러야' 실행된다
// 이름 뒤에 괄호를 꼭 붙일 것!!
// makeBurger() // makeBurger 함수 실행 -> 이하의 console.log 4개가 실행되어 출력
// serveCoke() // serveCoke 함수 실행 -> 이하의 console.log 3개가 실행되어 출력



// 함수 이름 뒤의 소괄호에는 매개변수가 들어간다
// function makeBurger(type) { // 함수는 모든 값을 type으로 받는다
//     console.log("빵 두기")
//     console.log("상추 두기")
//     if(type == "불고기") {
//         console.log("고기패티 두기")
//     } else if(type == "새우") {
//         console.log("새우패티 두기")
//     }
//     console.log("뚜껑 덮기")
// }
// makeBurger("새우") // 고기패티 두기 -> 새우패티 두기 출력
// makeBurger("불고기") // type이 불고기이므로 고기패티 두기 출력



//매개면수를 여러 개 넣을 수도 있다
// function makeBurger(type, size, num) { // 패티 종류, 사이즈, 수량. 필요한 매개변수를 순서대로 입력
//     console.log("빵 두기")
//     console.log("상추 두기")
//     if(type == "불고기") {
//         console.log("고기패티 두기")
//     } else if(type == "새우") {
//         console.log("새우패티 두기")
//     }
//     console.log("뚜껑 덮기")
//     console.log(type,"버거", size,"사이즈", num,"개 준비 완료")
// }
// makeBurger("불고기", "L", 3) // 불고기 버거 L 사이즈 3 개 준비 완료 -> 출력



// return -> 어떤 값을 반환하는 것. 함수가 끝난 후 어떤 결과값이 필요할 때 등 사용
// function makeBurger(type, size, num) { 
//     console.log("빵 두기")
//     console.log("상추 두기")
//     if(type == "불고기") {
//         console.log("고기패티 두기")
//     } else if(type == "새우") {
//         console.log("새우패티 두기")
//     }
//     console.log("뚜껑 덮기")
//     console.log(type,"버거", size,"사이즈", num,"개 준비 완료")
//     return "완료 되었습니다"

// makeBurger("불고기", "L", 3)}
// let result = makeBurger("불고기", "L", 3) // makeBurger라는 함수가 끝나고 나서 생긴 결과를 result 변수에 담음
// console.log("버거 프로세스 결과",result) // 마지막에 리턴값으로 "버거 프로세스 결과 완료되었습니다" 까지 출력
 


// return을 만나는 순간 함수는 종료된다
// function makeBurger(type, size, num) { 
//     console.log("빵 두기")
//     console.log("상추 두기")
//     if(num < 1) { // 주문한 버거 개수가 1 미만이면 return 실행 후 함수 종료
//         return "버거 개수가 0개 입니다."
//     }
//     if(type == "불고기") {
//         console.log("고기패티 두기")
//     } else if(type == "새우") {
//         console.log("새우패티 두기")
//     }
//     console.log("뚜껑 덮기")
//     console.log(type,"버거", size,"사이즈", num,"개 준비 완료")
//     return "완료 되었습니다"
// }
// makeBurger("불고기", "L", 0) // 주문한 버거 개수가 0개 -> 리턴값인 "버거 개수가 0개 입니다" 까지만 실행되고 함수 종료
// makeBurger("불고기", "L", 2) // 버거 개수가 2이므로 return이 실행되지 않고 함수가 끝까지 정상적으로 실행("완료되었습니다"까지 출력)



// 함수를 묶어서 새로운 함수 생성 가능
// makeSet 함수 안에서 함수 부르기
function makeBurger(type, size, num) { // 패티 종류, 사이즈, 수량. 필요한 매개변수를 순서대로 입력
    console.log("빵 두기")
    console.log("상추 두기")
    if(type == "불고기") {
        console.log("고기패티 두기")
    } else if(type == "새우") {
        console.log("새우패티 두기")
    }
    console.log("뚜껑 덮기")
    console.log(type,"버거", size,"사이즈", num,"개 준비 완료")
}
function makeSet() { // 
    makeBurger("새우","M",3)
    serveFrenchFries()
    serveCoke()
}
makeSet() // 3개의 함수 makeBurger, serveFrenchFries, serveCoke가 모두 실행되어 출력