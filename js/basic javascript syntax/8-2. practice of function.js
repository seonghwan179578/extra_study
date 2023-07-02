// "안녕 내 이름은 박성환이야" 라는 문장을 프린트 하는 함수 'greet' 만들기
function greet() {
    console.log("안녕 내 이름은 박성환이야")
}

greet()


// 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정
// 예)"안녕 내 이름은 에밀리야", "안녕 내 이름은 할리야"

function greet(name) {
    console.log("안녕 내 이름은", name,"이야")
}

greet("성환")


// 매개변수로 전달받은 이름을 반환하게 함수를 수정
function greet(name) {
    console.log("안녕 내 이름은", name,"이야")
    return name
}
const name = greet("성환")
console.log("안녕 내 이름은", name, "이야")


// meetAt 함수 만들기 -> 인자를 세 개 받기 -> 첫 번째 인자는 년도에 해당하는 숫자
// 두 번째 인자는 월, 세 번째 인자는 일에 해다앟는 숫자
// 년도 인자만 받았을 경우 -> "1234년" 과 같은 형식의 문자열 리턴
// 년, 월 인자를 받았을 경우 -> 년도와 월을 조합, "1234년 5월" 형식의 문자열 리턴
// 년, 월, 일 모두 받았을 경우 -> 년, 월, 일을 조합, "1234/5/6" 형식의 문자열 리턴
function meetAt(year, month, date) {
    // undefined => false 리턴
    if (date) { // 매개변수는 왼쪽부터 읽기 때문에 
                // date만 있으면 year, month는 자동으로 먼저 옴
                // 따라서 date만 있으면 year, month, date가 다 있는 셈
      return `${year}/${month}/${date}`
    }
    else if (month) {
      return `${year}년 ${month}월`
    } else if (year) {
      return `${year}년`
    } 
  
  }
  console.log(meetAt(2023, 6, 22)) // 순서대로 year에 2023
                                   // month 6, date 22가 적용됨



// findSmallestElement 함수 구현하기
// findSmallestElement의 arr 인자는 숫자값으로만 이루어진 배열
// arr의 값들 중 가장 작은 값을 리턴 해주기                           
// 만일 arr가 비어있으면 0을 리턴
// [100, 200, 3, 0, 2, 1]
function findSmallestElement(arr) {
    // 어레이가 비어있다 
    if(arr.length == 0) {
      return 0
    }
    let result = arr[0]
    for(let i=1; i<arr.length; i++) {
      if(result > arr[i]) {
        result = arr[i]
      }
    }
    return result
    
  }
  
  console.log(findSmallestElement([100, 200, 3, 0, 2, 1]))


// 돈을 매개변수로 받으면 몇 개의 지폐와 동전이 필요한지 최소 개수를 계산하는 함수 만들기
// 출력예 )
// 12300인 경우
// 50000 X 0
// 10000 X 1
// 5000  X 0
// 1000 X 2
// 500 X 0
// 100 X 3
let unit = [50000, 10000, 5000, 1000, 500, 100]

function giveMeChange(money) {
    for(let i=0; i<unit.length; i++) {
        let num = Math.floor(money / unit[i])
        console.log(`${unit[i]}x${num}`)
        money = money - (unit[i] * num)
    }
} 

giveMeChange(12300)