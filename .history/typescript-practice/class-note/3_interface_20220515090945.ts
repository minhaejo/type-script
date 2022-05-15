interface User {
    age:number
    name:string
}

var seho: User = {
    age:33,
    name:"세호"
}

function getUser(user:User) {
    console.log(user)
}
const capt ={
    age:20
    name:"캡틴"
    
}
getUser(capt)