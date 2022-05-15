enum Shoes{
    Nike = "나이키",
    Adidas = "아디다스"
}
var myShoes = Shoes.Nike
console.log(myShoes)

enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer:stAnswerring) {
    if (answer ==="yes") {
        console.log("정답입니다")
    }
    if (answer==="no") {
        console.log("오답입니다")
    }
}
askQuestion("예스")
askQuestion("y")
askQuestion("Yes")
