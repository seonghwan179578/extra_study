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


// map 실습
// 모든 이름 대문자로 바꾸기
let upperCaseName = names.map((item) => item.toUpperCase())
console.log(upperCaseName)

// 성을 제외한 이름만 출력하기(Steven, Bill, Mark 등)
let firstNames = names.map((item) => item.split(' ')[0])
console.log(firstNames)

// 이름의 이니셜만 출력하기(SPJ, BG, MEZ 등)
let initialOnly = names.map((item) => {
    let splitName = item.split(" ")
    let initial = ""
    splitName.forEach((nameItem) => (initial += nameItem[0]))
    return initial
})
console.log(initialOnly)



// filter 실습
// 이름에 a가 포함된 사람들 출력하기
let includeA = names.filter((item) => item.includes('a'))
console.log(includeA)

// 이름에 같은 글자가 연속해서 들어간 사람들 출력하기(-tt, ff, ll 등)
let doubleLetter = names.filter((item) => {
    let splitName = item.split("")
    return splitName.some((letter, index) => letter == splitName[index + 1])
})
console.log(doubleLetter)