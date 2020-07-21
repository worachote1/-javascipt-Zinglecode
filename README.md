# -javascipt-Zinglecode
รวม sourcecode  javascipt ที่เรียน 

//----การใช้ console.log() -----
console.log("asdfasf");

let x = 15;
let y = 4;

let username = "Worachote Jairew";
console.log(x % y);
console.log(username);

x--;

console.log(x)
//-----การใช้ loop-----
console.log("-----การใช้ loop-----");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//โจทย์loop ให้เขียนโปรแกรมหาค่ากําลัง 2 ของเลข 1 ถึง เลข 12
console.log("โจทย์loop ให้เขียนโปรแกรมหาค่ากําลัง 2 ของเลข 1 ถึง เลข 12");

for (let i = 1; i <= 12; i++) {

    let answer = i ** 2;
    console.log(answer);

}
// คําสั่งที่ใช้ได้ในเฉพาะในloop  คือ continue และ break 

//การใช้ continue เมื่อโปรแกรม run ไปเจอคําสั่งนี้ โปรแกรมจะข้ามloop ทันที โดยที่ไม่ทําคําสั่งข้างล่าง 
console.log("การใช้ continue")
//เช่น 
for (let i = 1; i <= 10; i++) {
    continue;
    console.log(i);


}
//การใช้continue เพื่อยกเลิกคําสั่งในloop เมื่อเป็นเลขคู๋
console.log("การใช้continue เพื่อยกเลิกคําสั่งในloop เมื่อเป็นเลขคู๋ (แต่ยังทําคําสั่งเมื่อเป็นเลขคี่อยู่)")

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
//การมช้ break เมื่อโปรแกรมrunไปเจอคําสั่งนี้ โปรแกรมยกออกจากloopเลยโดยไม่กลับมาทําอีก
//เช่น 
console.log("การใช้ break")
//โปรแกรมนี้ถ้าเจอ i ที่หารด้วย 3 ลงตัวจะออกจากloopทันที
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        break;
    }
    console.log(i);
}


//----การใช้ function ------
//function คือสิ่งเราสร้างขึ้นมาตั้งชื่อให้มัน แล้วเอาคําสั่งอะไรก็ตามใส่ใน function จะใช้เป็น ร้อยคําสั่งกะได้แล้วเวลาเราจะใส่ร้อย คําสั่งนี้น ไม่ต้อง coppy
//แล้ววาง  เราแค่เรียกใช้ function นั้นได้เลย
console.log("การใช้ ฟังก์ชั่น");
//function หาพื้นที่ พีระมิด
console.log("ฟังก์ชั่นหาพื้นที่ พีระมิด");
function getPyramidArea(width, height, length) {
    //let width=15;
    // let height =20;
    //  let length =47;

    let baseArea = width * length;

    let pyramidArea = 1 / 3 * baseArea * height;

    console.log(pyramidArea);
}

getPyramidArea(14, 25, 25);

//-----การใช้ HTML event-----
console.log('//-----การใช้ HTML event-----')
/*
let discountButton = document.getElementById("discount-button");
 

 let message = document.getElementById("message");


 function showMessage(){
     message.innerHTML = "หมดเวลา ลดราคาแล้วครับ ไว้โอกาสหน้า TwT" ;
 }

 discountButton.addEventListener("click",showMessage); */

let discountButton = document.getElementById("discount-button");

let message = document.getElementById("message");
function showMessage() {
    message.innerHTML = "หมดเวลาลดราคาแล้ว ครับ ไว้โอกาสหน้า";
}

discountButton.addEventListener("click", showMessage) //.addEventListener(เหตุการณ์ที่ต้องการจะจับ อย่างในcodeนี้ เหตุการณ์ที่จับคือ ตอนที่่เรา click , คําสั่งที่ต้องการให้ทําเมื่อจับเหตุการณ์ได้)
//ที่ไม่ใส่ () หลัง showMessage เพราะไม่ได้ต้องการให้ function ทํางานเลย แต่ต้องการให้ทํางานเมื่อ เรากดปุ่มแล้ว

//-----การใช้ HTML event มาสร้าง Web App สูตรคูณ-----

console.log("-----การใช้ HTML event-----");

let numberInput = document.getElementById("number-input"); //ได้อัญเชิญhtml tag ที่มีid ชื่อ number-input เข้ามาในโลกของ javascript 
// แล้ว และ ให้ ตัวแปร numberInput เป็นเหมือนร่างอวตาร ของ number-input สามารถนํา javascript ไปปรับแต่งได้

let runButton = document.getElementById("run-button");

let output = document.getElementById("output");

function showMultiply() {

    let number = Number(numberInput.value); //ดึงค่าจากฟอร์มที่ให้กรอกตัวเลข ใน HTML
    let outputHtml = "";

    for (let i = 1; i <= 12; i++) {

        outputHtml += "<p>"
        outputHtml += number + " X " + i + " = " + (number * i);
        outputHtml += "</p>"
    }

    output.innerHTML = outputHtml;

}

runButton.addEventListener("click", showMultiply);

//---การใช้ Arrow function----
console.log("---การใช้ Arrow function----");
//Arrow function เบื้องต้นจะเหมือน การใช้ฟังก์ชั่นปกติ 98 เปอเซนต์ ถือว่าเป็นทางเลืแกให้ใช้ เฉยๆก็ได้
function say1() {
    console.log("สวัสดี 1");  //การสร้างฟังก์ชั่นปกติ
}
let say2 = () => {
    console.log("สวัสดี 2 ");
}

say1();
say2();

//ประโยชน์อน่างหนึ่ง ของ Arrow function คือ ถ้าใช้ตอนเมื่อ ใช้ Event ไม่ต้องเสียเวลาไปสร้างฟังก์ชั่นเข้ากับปุ่ม
//ดังนี้



let sayButton = document.getElementById("say-button");

/*ถ้าเราใช้วิธีสร้างฟ function ปกติแบบเดิม

function saySomeThing1(){
    console.log("HELLO plz say something 1");
}

sayButton.addEventListener("click",saySomeThing1);

*/

sayButton.addEventListener("click", () => {
    console.log("HELLO plz say something 2");
})
