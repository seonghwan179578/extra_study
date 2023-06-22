// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
// 만약에 유저가 번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저가 고른 번호 => Down!!!
// 랜덤번호 > 유저가 고른 번호 => Up!!!
// Reset 버튼을 누르면 게임이 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다(더 이상 추측 불가, 버튼 비활성화)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 차감하지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 => 알려준다, 기회를 차감하지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button"); // HTML 태그 중 id가 play-buttion인 태그를 가져옴
let userInput = document.getElementById("user-input") // HTML 태그 중 id가 user-input인 태그를 가져옴
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area");

playButton.addEventListener("click", play); // 클릭하면 play 함수 실행
resetButton.addEventListener("click", reset)

function pickRandomNum() { // Math.floor => 수학에서의 버림 기능. 여기선 소수점 이하를 버림
    computerNum = Math.floor(Math.random()*100)+1; // Math.random() => 0~1 사이의 무작위 숫자 반환
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value; // 유저가 입력한 숫자를 나타냄

    chances -- ; // chances가 1씩 감소
    chanceArea.textContent = `남은 기회 : ${chances}번`
    console.log("chance", chances);

    if(userValue < computerNum) { // 입력한 숫자 < 랜덤숫자 => Up!!!
            resultArea.textContent = "Up!!!"
    }else if(userValue > computerNum) { // 입력한 숫자 > 랜덤숫자 => Down!!!
            resultArea.textContent = "Down!!!"
    } else { // 입력한 숫자가 랜덤숫자보다 크지도 작지도 않다 => 입력 숫자 = 랜덤 숫자
            resultArea.textContent = "맞췄습니다!!!"
    }

    if(chances < 1) { // 5번을 다 해서 남은 기회가 1 미만 즉 0일 때
        gameOver = true // Go 버튼 비활성화
    }

    if(gameOver == true) {
        playButton.disabled = true 
    }
}

function reset() {
    // user input 창이 깨끗하게 정리되고
    userInput.value = ""
    // 새로운 번호가 생성되고
    pickRandomNum()

    resultArea.textContent = "결과값이 여기 나옵니다!!!";
}
pickRandomNum();