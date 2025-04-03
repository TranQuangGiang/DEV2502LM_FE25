

// khái báo biến và gán giá trị trong js
var userName_ = '';
userName_ = 'Trần Quang Giang';
var UserName = "Trần Quang Giang";

// lưu ý về biến của JS
// không có kiểu giá trị cố định
// kiểu number
var temp = 1;
// in giá trị ra console.log - giá trị của temp = 1
document.writeln(temp);
console.log(temp);
// kiểu boolean
temp = true;
// in giá trị ra console.log - giá trị của temp = true
document.writeln(temp);
console.log(temp);
// kiểu string
temp = 'devmaster';
// in giá trị ra console.log - giá trị của temp = 1
document.writeln(temp);
console.log(temp);

var linkUrl = 'https://ant.design/docs/react/introduce/';
document.writeln(linkUrl);

// Một số hàm
// Hàm alert - đưa ra thông báo
alert("Xin chào bạn đã đến với chúng tôi");
// Hàm prompt - đưa ra thôngb báo nhập thông tin - và trả về giá trị null nếu để trống
// và là chuỗi nếu nhập string
var age = prompt("Mời bạn nhập tuổi của mình...");
document.writeln(age);
console.log(age);

// hàm confirm - đưa ra thông giá và trỏ về giá trị true or false 
var gioitinh = confirm('Bạn có phải là nam không');
document.writeln(gioitinh);
console.log(gioitinh);

// toán tử đặc biệt
/* Systax: 
    (ham_tra_ve_gia_tri true or false) ?  
    gia_tri_tra_ve_neu là true và ngược lại là false
*/
(3>5) ? document.writeln("<br/> 3 > 5 là đúng")
: document.writeln("<br/> 3 > 5 là sai"); 

// TypeOf
document.writeln("<br/> Kiểu giá trị của TypeOf(5): ", typeof(5));
document.writeln("<br/> Kiểu giá trị của TypeOf(devemaster): ", typeof('Devemaster'));
document.writeln("<br/> Kiểu giá trị của TypeOf(true): ", typeof(true));

/*
    var user_Name = "";
    var uesrname01 = "";
    var _userName = "";
*/

/* khai báo biến sai
    var 09userName = "";
    var user name = "";
    var user-name = "";
*/