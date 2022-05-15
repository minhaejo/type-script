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
//함수 스펙에 인터페이스 구조 활용
 interface SumFunction  {
     (a:number,b:number):number
 }
 var sum:SumFunction;
 sum = function (a:number,b:number) :number{
     return a+b
 }

 //