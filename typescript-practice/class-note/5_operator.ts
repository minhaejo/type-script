//유니온타입
var sehoe:string|number|boolean
function logMessage(value:string |number) {
    if (typeof value === "number") {
        value.toLocaleString()
    }
    if (typeof value === "string") {
        value.toString()
    }
    throw new Error("value must be string or number");
    
}
logMessage("hello")
logMessage(100)

interface Developer2 {
    name:string;
    skill:string;
}

interface Person2 {
    name:string;
    age:number;
}
  //유니온에서 두가지 인터페이스를 할때 우리가 직접 디벨로퍼,펄슨2에 대한 키랑 벨류를 입력하지않고 someone으로 하면 공통속성만 쓸수있음
// function askSomeone(someone:Developer2 | Person2) {
//     // someone.name
//     // someone.age
//     // someone.skill
// }
// askSomeone({name:"디벨로퍼",skill:"웹개발"}) 둘중에 하나만 써도됨 
// askSomeone({name:"민해",age:30})



//&인터섹션 디벨롭퍼2,person2의 인터섹션이다 저 인터페이스를 모두 가진 애들을 썸원이라 부른다 . \
function askSomeone(someone:Developer2 & Person2) {
    someone.name
    someone.age
    someone.skill
}
askSomeone({name:"디벨로퍼",skill:"웹개발",age:30}) //age까지 모두 필요해



//왜 오류가 뜰까? 두가지 모두를 충족하는애들 공통속성만 쓰인다고 보면됨 두가지 인터페이스를 유니온으로 쓰면
