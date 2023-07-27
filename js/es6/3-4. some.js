// some

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

// 이름이 L로 시작하는 아이템이 있는가? 
// 하나라도 있으면 true, 없으면 false 반환
let data4 = names.some((item)=>{
    return item.startsWith("L")
})
console.log(data4)

// 이름이 a로 시작하는 아이템이 있는가?
// 없으므로 false 반환
let data5 = names.some((item)=>{
    return item.startsWith("a")
})
console.log(data5)