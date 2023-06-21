// 문제1. 1부터 100까지 더하는 for문을 만들어보기
let sum = 0
for(i = 1; i <= 100; i++){
    sum += i
}
console.log(sum)
// 0 += 1 => 1
// 1 += 2 => 3
// 3 += 3 => 6
// 6 += 4 => 10
// ... => 5050 출력


// 문제2. 1부터 100까지 홀수만 출력시켜보기

let sum1 = 0
for(i = 1; i <= 100; i++ % 2) {
   if(i % 2 == 1) { // n ÷ 2의 나머지가 1 => 홀수
    sum1 += i // i가 홀수일 때만 연산 진행
   }
}
console.log(sum1) // 2500 출력


// 문제3. 1부터 50까지 369게임 결과를 프린트 해보기
for(n = 1; n <=50; n++) {
    let stringValue = n.toString()// 숫자 n을 문자열로 변환
    let result = ""
    for(let j=0; j<stringValue.length; j++) {
        if(stringValue[j]==="3" || stringValue[j]==="6" ||
        stringValue[j]==="9") {
            result += "짝" // 33등 양쪽 모두 짝을 할 경우는 짝짝이 되어야 하기 때문에
                                   // 앞에 result를 더해준다
        }
    }


    console.log(result.length > 0? result : i)
}