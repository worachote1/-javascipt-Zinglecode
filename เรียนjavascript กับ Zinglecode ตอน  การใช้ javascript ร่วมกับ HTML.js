//HTML controls การใช้ javascript ร่วมกับ HTML 

//console.log("การใช้ javascript ร่วมกับ HTML ")
//console.log('sdfefee')

//ต้องการใช้javascript ควบคุมการทํางานของ div ที่มี id คือ content-2
let content2 = document.getElementById('content-2'); //อัญเชิญ HTML เข้าสู่โลกของ javascript ด้วยการ ใช้ document ซึ่งเป็นตัวแปรที่เป็นเหมือนหน้า เว็บเพจ HTML
                                                  // แล้วใน document มีคําสั่งท่ี่ชื่อว่า getElementById โดยให้ใส่ id ของ tag html ที่เราต้องการจะปรับแต่งด้วยjavascript
let textHtml = '<b>Hello Time Worachote</b>'

content2.innerHTML = textHtml;

//-----การใช้ HTML event-----
console.log('//-----การใช้ HTML event-----')
/*
let discountButton = document.getElementById("discount-button");
 

 let message = document.getElementById("message");


 function showMessage(){
     message.innerHTML = "หมดเวลา ลดราคาแล้วครับ ไว้โอกาสหน้า TwT" ;
 }

 discountButton.addEventListener("click",showMessage); 

let discountButton = document.getElementById("discount-button") ;

let message = document.getElementById("message") ;
function showMessage() {
    message.innerHTML = "หมดเวลาลดราคาแล้ว ครับ ไว้โอกาสหน้า" ; 
}

discountButton.addEventListener("click",showMessage) //.addEventListener(เหตุการณ์ที่ต้องการจะจับ อย่างในโค้ดนี้ เหตุการณ์ที่จับคือ ตอนที่่เรา click , คําสั่งที่ต้องการให้ทําเมื่อจับเหตุการณ์ได้)
                                                    //ที่ไม่ใส่ () หลัง showMessage เพราะไม่ได้ต้องการให้ function ทํางานเลย แต่ต้องการให้ทํางานเมื่อ เรากดปุ่มแล้ว

//-----การใช้ HTML event มาสร้างโปรแรกมสูตรคูณ-----
/*
console.log("-----การใช้ HTML event-----");

let numberInput = document.getElementById("number-input");

let runButton = document.getElementById("run-button");

let output = document.getElementById("output");

function showMultiply() {

    let number = Number(numberInput.value) ; //ดึงค่าจากฟอร์มที่ให้กรอกตัวเลข ใน HTML
    let output = "" ;

    for(let i = 1 ;i<=12;i++){
     
     output = number + " X " + i + " = " +  (number * i) ;

    }
}

runButton.addEventListener("click",showMultiply); */
