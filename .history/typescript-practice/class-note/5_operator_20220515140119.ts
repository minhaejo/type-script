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

function askSomeone(someone:Developer2 | Person2) {
    someone.name
    someone.age
    someone.skill
}
function askSomeone(someone:Developer2 & Person2) {
    someone.name
    someone.age
    someone.skill
}
//왜 오류가 뜰까? 두가지 모두를 충족하는애들 공통속성만 쓰인다고 보면됨 두가지 인터페이스를 유니온으로 쓰면
