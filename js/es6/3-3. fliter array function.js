// 배열함수 filter
// 조건을 넣고, 조건에 대해 참인 것만 반환
let ceoList = [
    {name : "Larry Page", age : 23, ceo : true},
    {name : "Tim Cook", age : 40, ceo : true},
    {name : "Elon Musk", age : 55, ceo : false}
]



let data2 = ceoList.filter((item)=>{
    // 23살인 아이템만 반환
    return item.age == 23 // true, false로 떨어지는 조건을 넣어야함
})
console.log(data2)

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


// 이름 첫 글자가 L로 시작하는 아이템 반환
let data3 = names.filter((item)=>{
    return item.startsWith("L")
})
console.log(data3)
