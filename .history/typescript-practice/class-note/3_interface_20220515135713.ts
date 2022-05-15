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

 //인덱싱
 interface StringArray {
     [index:number] : string
 }

 var arr : StringArray=["a","b","c"]
//  arr[0] =10 오류 

//딕셔너리패턴
interface StringRegexDictionary {
    [key:string] :RegExp; //RegExp 정규표현식
    

}
var obj:StringRegexDictionary= {
    // sth:/abc/,
    cssFile:/\.css$/,
    jsFile:/\.js$/
}
// obj[cssFile] = "a" 오류 

Object.keys(obj).forEach((value)=>{
})

//인터페이스 확장 extends
interface Person1{
    name:string,
    age:number
}

interface Developer extends Person1{
    language:string,
}

// var captain:Developer={
//     name:"capt",
//     age:30,
//     language:"ko"
// }
