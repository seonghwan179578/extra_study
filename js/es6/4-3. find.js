let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Tim Cook",
    "Lloyd blankfein",
]

// 전체 이름의 길이가 20자 이상인 사람 찾기
console.log(names.find(item => item.length >= 20))

// 미들네임이 포홤되어 있는 사람 찾기
console.log(names.find(item => item.split(' ').length >= 3))