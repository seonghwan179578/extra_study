// 객체 : 관련된 정보를 묶어서 하나의 데이터로 저장한 것
// 객체 생성
let patient = {
    name : "seonghwan",
    age : 30,
    disease : "cold"
} // 각각의 속성들을 ,(콤마)로 구분. 마지막은 콤마 제외
console.log(patient) // 변수 이름만으로 중괄호 안의 모든 내용 출력 가능
console.log(patient.name) // 변수 이름.키값을 통해 원하는 항목만 출력 가능. 여기서는 환자의 이름만 출력한 셈
// name, age, disease -> 키
// seonghwan, 30, cold -> (키의)값[키값]
// 키값을 이용하여 안에 있는 정보에 접근 가능
console.log(patient["name"]) // 표현방식 차이일뿐 console.log(patient.name)과 같은 출력

// 키값 변경
patient.name = "jun" // 키값 seonghwan을 jun으로 변경
console.log(patient.name) // jun 출력
patient.age = 32 // 30 -> 32 변경
console.log(patient.age) // 32 출력


// 객체 in 배열
let patientList = [{name : "jimin", age : 13}, {name : "jk", age : 25}, {name : "jhope", age : 40}]
console.log(patientList) // 환자 3명 모두 출력

// 첫 번째 환자 정보 확인
console.log("첫 번쨰 환자는:", patientList[0]) // 첫 번째 환자인 jimin 출력
console.log("첫 번째 환자의 나이는?", patientList[0].age) // 첫 번째 환자의 나이 13만 출력
console.log("첫 번째 환자의 나이는?", patientList[0]["age"]) // 표현방식 차이. 마찬가지로 첫 번째 환자의 나이 13만 출력
console.log("두 번째 환자의 이름 : ", patientList[1].name) // 두 번째 환자의 이름 jk 출력 