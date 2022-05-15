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

interface Developer {
    name:string,
    skill:string
}

interface Person2 {
    name:string
    age:number
}

function askSomeone(someone:Developer|Person2) {
    someone.
    
}
