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

// 전체 이름의 길이가 20자 이상인 사람이 있는지 확인하기
console.log(names.some((item) => item.length >= 20))

// 성을 제외한 이름에 p를 포함한 사람이 있는지 확인하기(대소문자 상관x)
console.log(names.some((item) => {
    let splitName = item.split.apply(' ')
    splitName.pop()
    return splitName.some(eachName => eachName.toLocaleLowerCase().includes("p"))
}))