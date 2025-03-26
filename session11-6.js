let so1 = Number(prompt("Mời bạn nhập vào số a"))
let so2 = +prompt("Mời bạn nhập vào số b")
let tinhToan = prompt("Mời bạn nhập các phép tính ( + - * / )")
const result = (so1 + so2);
if (tinhToan =="+"){
    alert(`${so1}+${so2}=${result}`)
}else if (tinhToan =="-"){
    const result = (so1 - so2);
    alert(`${so1}-${so2}=${result}`)
}else if(tinhToan =="*"){
    const result = (so1 * so2);
    alert(`${so1}*${so2}=${result}`)
}else if(tinhToan =="/"){
    const result = (so1 / so2);
    alert(`${so1}/${so2}=${result}`)
}