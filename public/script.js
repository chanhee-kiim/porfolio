// function foo(num){
//     let e = 0;
//     return num
// }

// console.log(e)

// const foo = (num) => {
//     return foo
// }


let a = 0 // hoisting 불가능
var b = 0 // hoisting이 가능
const c = 0 // 한번 할당한 값 변경 X


const selectNav = (id) => {

    const menuContents = document.getElementsByClassName("menu-content")

    for (let i = 0; i < menuContents.length; i++) {
        const element = menuContents[i];
        element.classList.remove("select")        
    }

    document.getElementById(id).classList.add("select")
}