// 배열함수 map

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

// forEach와 마찬가지로 함수가 매개변수로 들어감
let data = names.map((item, index)=>{
    return item // map 함수는 리턴 필요
})
console.log(data)


// map 사용 예시
// name, age, ceo 여부 세 가지 중 name만 필요한 경우처럼
// 원하는 데이터만 가져오고 싶을 때 map을 많이 씀
let ceoList = [
    {name : "Larry Page", age : 23, ceo : true},
    {name : "Tim Cook", age : 40, ceo : true},
    {name : "Elon Musk", age : 55, ceo : false}
]
let data2 = ceoList.map((item)=>{
    return item.name // item 중  name만 가져오기
})
console.log(data2)