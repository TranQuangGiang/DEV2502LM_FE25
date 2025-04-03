// rẽ nhánh
// Cấu trúc câu lệnh rẽ nhánh
// 1.1: if else
/*  if (menh_de_dieu_kien){
        các khối lệnh được thực thi
    } else if (menh_de_dieu_kien2) {
        các khối lệnh 2 
    }... 
    else {
        các khối lệnh n 
    }
*/ 
// 1.2: switch case
/*
    var thang
    switch(thang) {
        case 1: 
        case 2:
        case 3: 
    }
*/

// II) Vòng lặp
// 2.1. for
// systax:
// for ( bien_khoi_tao; mệnh đề số sánh; biến tăng / biến giảm ){
//      các_khoi_lenh
// }
// Ví dụ
for (let i = 0; i<=10; i++) {
    for (let j = 2; j <= 2; j++ ){
        document.writeln("<br/>", i +'*'+ j +'='+ i * j);
    }
}
// 2.2 do while/ white
// systax:
/* 
    while(menh_de_dieu_kien) {
        khoilenh
    }

    // do while
    do {
        khoilenh
    }while(menh_de_dieu_kien) {
        
    }
*/
// vd while
var a = 3
while (a<3) {
    document.writeln("</br>", a, "<3")
    a++
}
do {
    document.writeln("</br>", a, "<3")
    a++
}while (a<3)
// 2.3 foreach/ for in