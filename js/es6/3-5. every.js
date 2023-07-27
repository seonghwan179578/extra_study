// every

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

// 모든 이름이 L로 시작하는가? 
// 모든 이름이 L로 시작하면 true, 하나라도 아니면 false 반환
let data6 = names.every((item)=>{
    return item.startsWith("L")
})
console.log(data6)

// 이름이 a로 시작하는 아이템이 있는가?
// 없으므로 false 반환
let data7 = names.every((item)=>{
    return item.startsWith("a")
})
console.log(data7)

// 이름의 길이가 0보다 큰가?
// 그러하므로 true 반환
let data8 = names.every((item)=>{
    return item.length>0
})
console.log(data8)