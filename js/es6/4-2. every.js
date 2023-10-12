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

// 모두의 전체 이름의 길이가 20자 이상인지 확인하기
console.log(names.every(item => item.length >= 20))

// 모두의 이름에 a가 포함되어 있는지 확인하기
console.log(names.every(item => item.includes('a')))