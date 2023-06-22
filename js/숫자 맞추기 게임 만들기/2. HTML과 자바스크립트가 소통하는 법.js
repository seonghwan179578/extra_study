// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
// 만약에 유저가 번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저가 고른 번호 => Down!!
// 랜덤번호 > 유저가 고른 번호 => Up!!
// Reset 버튼을 누르면 게임이 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다(더 이상 추측 불가, 버튼 비활성화)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 차감하지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 => 알려준다, 기회를 차감하지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button"); // HTML 태그 중 id가 play-buttion인 태그를 가져옴
let userInput = document.getElementById("user-input") // HTML 태그 중 id가 user-input인 태그를 가져옴
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play); // 클릭하면 play 함수 실행

function pickRandomNum() { // Math.floor => 수학에서의 버림 기능. 여기선 소수점 이하를 버림
    computerNum = Math.floor(Math.random()*100)+1; // Math.random() => 0~1 사이의 무작위 숫자 반환
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value; // 유저가 입력한 숫자를 나타냄
    if(userValue < computerNum) {
            resultArea.textContent = "Up!!!"
        console.log("Up!!!")
    }else if(userValue > computerNum) {
            resultArea.textContent = "Down!!!"
        console.log("Down!!!")
    } else {
            resultArea.textContent = "맞췄습니다!!!"
        console.log("맞습니다!!")
    }
}
pickRandomNum();