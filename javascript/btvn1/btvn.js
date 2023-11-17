//Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
function result(n){
    let result=1;
for(let i=1;i < n+1; i++){
 result*=i;
}
return result;
}
console.log(result(5))

//Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"))

  //Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia
  function translate(countryCode) {
    let message = '';
    switch (countryCode.toUpperCase()) {
        case 'VN':
            message = 'Xin chào';
            break;
        case 'EN':
            message = 'Hello';
            break;
        case 'FR':
            message = 'Bonjour';
            break;
        case 'GER':
            message = 'Guten Tag';
            break;
        default:
            message = 'Không tìm thấy câu chào cho mã quốc gia này';
            break;
    }
    return message;
}
console.log(translate("ger"))

//Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
function splitString(st){
let newString="";
for(let i=0; i<st.length;i++){
   newString+=st[i];
   if(i==9){
    newString+='...';
    break
   }
}
return newString
}
console.log(splitString("xinchaocacbandenvoiTechmaster"))

