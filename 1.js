//1 act
// let a= +prompt("a")
// let c= prompt("metod")
// let b= +prompt("b")
// switch (c) {
//     case "+":
//         alert(a + b)
//         break;
//     case "-":
//         alert(a-b)
//         break;
//     case "*":
//         alert(a*b)
//         break;
//     case "/":
//         alert(a/b)
//         break;
//     default:
//         alert("Ошибка")
//         break;
// }
//2 act
let name= prompt("What is your name?")
if(name[0].toLowerCase().trim() ==="a"){
    let age = prompt("How old are you?")
    if (age>=20 && age<=40){
        let money = prompt("money")
        if(money >=100 ){
            let people = +prompt("How many of you?")
            let busy= +prompt("busy")
            let mesta = 10
            if( busy + people <= mesta ){
                alert("Welcome")
            }
            else{
                alert("Get out")
            }
            
        }
        else{
            alert("Get out")
        }
    }
    else{
        alert("Get out")
    }
}
else{
    alert("Get out")
}
// 3 act
// let arr =[[{a: {price: 20}}][{a: {price: 35}}][{a: {price: 44}}]]
// let arr = [[{a: {price: 20}}][{a: {price: 35}}][{a: {price: 44}}]]
// let total= 0



