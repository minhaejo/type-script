interface User {
    age:number
    name:string
}
//변수의 인터페이스 활용
var seho: User = {
    age:33,
    name:"세호"
}
//함수의 인터페이스 활용
function getUser(user:User) {
    console.log(user)
}
const capt ={
    name:"캡틴",
    age:20
}
getUser(capt)

const minhae:User ={
    name:"조민해",
    age:30
}

function getUserInfo(user) {
    console.log(user
}