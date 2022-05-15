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
getUser()