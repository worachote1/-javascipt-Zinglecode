/* คุณสมบัติของ การใช้ HTML DOM 
-เข้าถึงและเปลี่ยนคุณสมบัติทั้งหมดของ Element ในหน้าเว็บได้ (Tag ต่างๆใน html เราจะเรียกว่า Element)
-ควบคุมและเปลี่ยนรูปแบบ CSS ได้
-สามารถตอบสนาองกับทุกเหตุการณ์ที่เกิดขึ้นหน้าเว็บได้
*/
/*
let a = document.querySelector('p'); // เข้าถึง tag p โดยเก็บลงใน ตัวแปร a
console.log(a);

let num = 4 ;
displayText = ()=> {
    a.textContent = "ปุ่มถูกกดแล้ว "+num ;
}

const menuList = document.querySelector('ul');

let count = 1;
addList = ()=> {
    
    const item = document.createElement('li');
    
    
    item.innerText= "Item ชิ้นที่ "+(count++) ;
    menuList.appendChild(item);
           
}
*/

/*---------------------------------------------------------------------------------------------------------*/

/* การใช้ DOM CSS 
คือ เอา javascript มาควบคุมการเปลี่ยน style ให้กับ element ของเรา

element.classList.add("class"); //เพิ่ม class style 
element.classList.remove("class"); // ลบ class style
element.classList.toggle("class") ; // สลับ class style
element.classList.contains("class"); // เปรียบเทียบ class style

*/

const box = document.querySelector('#box');

addDarkMode= ()=> {
    box.classList.add("darkMode"); // ใส่ ชื่อ class ที่สรา้งเอาไว้ใน css
}

removeDarkMode = ()=> {
    box.classList.remove("darkMode");
}

switchMode = ()=> { // เราต้องการที่ เพิ่ม และ ลบ  style ได้ในปุ่มเดียว คือกดครั้งคือนึงเพิ่ม style กดอีกครั้งคือ ลบ

    box.classList.toggle("darkMode");    
}

/*--------------------------------------------------------------------------------------------------------------*/

/* การใช้ DOM Event
คือ เหตุการณ์ หรือ การกระทําบางอย่างที่เกิดขึ้้นกับ element เช่น การคลิกเมาส์ ้ยายเมาสื กดปุ่มคีย์บอร์ด
โดยเราใช้ event ให้ตอบสนองต่อเหตุการณ์บางอย่างได้ เช่น คลิกแล้วแจ้งเตือน หรือ ตรวจสอบความถูกต้องของข้อมูลถ้าผู้ใช้ป้อนข้อมูลไม่ครบ ก็จะสร้างบัญชีไม่ได้
*/

/*--------------------------------------------------------------------------------------------------------------*/

/* EventListener
ใช้เหมือน event แต่รูปแบบการเขียน จะเขียนในฝั่ง javascript ทั้งหมด

รูปแบบคือ element.addEventListener(event,callback) // callback คือฟังก์ชั่่นที่เราอยากจะให้ทํางานเมื่อมีการเกิด event แบบที่ระบุไว้ขึ้น
ปัจจุบันการใช้ Event ควรในรูปแบบ EventListener มันจะสะดวกกว่าไม่ต้องไปยุ่งกับหน้าเว็บ HTML 
เหมือน Event แบบแรก อยากให้เกิดอะไรที่ใช้ javascript ควบคุมจะได้เขียนแค่ใน javascript อย่างเดียว
*/


