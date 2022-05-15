//유니온타입
var sehoe:string|number|boolean
function logMessage(value:string |number) {
    if (typeof value === "number") {
        value.toLocaleString()
    }
    if (typeof value === "string") {
        value.toString()
        
    }
}
logMessage("hello")
logMessage(100)