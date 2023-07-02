// 키오스크 같은 메뉴가 있는 프로그램을 만든다고 가정해보자
let menu = 1

// if(menu == 1) {
//     console.log("물건 사기")
// } else if(menu == 2) {
//     console.log("잔고 확인")
// }else if(menu == 3) {
//     console.log("히스토리 확인")
// } else {
//     console.log("홈으로 돌아가기")
// }

switch (menu) {
    case 1 : 
    console.log("물건 사기")
    break;
    case 2 :
    console.log("잔고 확인")
    break;
    case 3 :
    console.log("히스토리 확인")
    break;
default : // if문의 else와 비슷한 기능
    console.log("홈으로 돌아가기")
}

// switch문의 한계점 => 값이 하나로 딱 떨어지는 경우에만 사용 가능
// ex) if문은 "1<menu && menu < 4" 와 같은 범위표현 가능.
// but switch문은 불가능



if(menu <= 3) {
    console.log("범위 안의 숫자입니다")
} else {
    console.log("범위 밖의 숫자입니다")
}
// 삼항연산식 조건? true 일 때 : false 일 때
// 1. 조건이 많지 않고 2. 리턴값 딱 하나만 코드에 있을 때
let answer = menu <=3? "범위 안의 숫자입니다" : "범위 밖의 숫자입니다"

console.log(answer) // menu의 value가 1이므로 true => 범위 안의 숫자입니다 출력

