// find
// filter와 달리 배열이 아닌, 해당 값 하나만 반환
// 첫 번쨰로 찾은 아이템 하나만 반환

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

// 이름이 L로 시작하는 아이템을 찾는다
// 모든 이름이 L로 시작하면 true, 하나라도 아니면 false 반환
let data9 = names.find((item)=>{
    return item.startsWith("L")
})
console.log(data9)
