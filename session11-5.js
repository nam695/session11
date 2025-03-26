let kg = +(prompt("Xin mời nhập cân nặng(kg)"))
let m = +(prompt("Xin mời nhập chiều cao (vd:1m7=1.7)"))
let bmi = kg/(m*m);
console.log(bmi);
if ( bmi < 18.5 ){
    alert("cân nặng thấp ")
} else if ( 18.5 < bmi && bmi < 24.9 ){
    alert("Bình thường ")
}else if (  bmi >= 25 ){
    alert("Thừa cân")
}else if ( 25 < bmi && bmi < 29,9 ){
    alert("Tiền béo phì ")
}else if ( 30 < bmi && bmi < 34,9 ){
    alert("Béo phì loại 1 ")
}else if ( 35 < bmi && bmi < 39.9 ){
    alert("béo phì loại 2 ")
}else if (  bmi >40  ){
    alert("Béo phì loại 3 ")
}