// findIndex
// 인덱스 번호를 알려줌

let names = ["Steven Paul Jobs",
"BIll Gates",
"Mark Elliot uckerberg",
"Elon Musk",
"Jeff Beznos",
"Warren Edward Buffett",
"Larry Page",
"Larry Ellision",
"Tim Cook",
"Lloyd Blankfein"]

// Larry Page의 인덱스 번호 6 반환
let data10 = names.findIndex((item)=>{
    return item == "Larry Page"
})
console.log(data10)
