//Bai1
function showAlertDialog() {
  alert("Welcome to TechMaster!");
}
showAlertDialog();
//Bai2
function showAlertWithName(name) {
  if (typeof name == "string") {
    alert(name + " Welcome to TechMaster!");
  } else alert("doi so truyen vao khong phai kieu string");
}
showAlertWithName("Tung");
//Bai3
function squareNumber(number) {
  if (typeof number == "number") {
    return Math.pow(number, 2);
  } else alert("Doi so truyen vao khong phai kieu number");
}
console.log(squareNumber(7));
