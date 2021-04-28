let list = document.querySelector('ul'); // เอา Tag ul มาเก็บไว้ใน ตัวแปร list
let input = document.querySelector('input');
let button = document.querySelector('button');

// เมื่อเรากดปุ่ม button แล้ว list มันจะถูกเพิ่ม
// เมื่อ click ที่ button แล้วจะมีการเรียกใช้ function ซึ่งภายใน function จะมีโค้ดต่างๆที่จะทําให้ list ทํางาน

button.onclick = function() {
    
    let myItem = input.value; // ตัวแปรนี้เก็บค่าที่ป้อนเข้ามาทาง input
    input.value = "";

    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;

    listItem.appendChild(listBtn); // เอาปุ่ม ลบ ให้ไปปรากฎที่ li
    listBtn.textContent = "ลบ";

    list.appendChild(listItem);

    // เมื่อกดปุ่ม ลบ
    listBtn.onclick = function (e) {
        list.removeChild(listItem);
    }

    input.focus(); // พอลบเสร็จก็ให้ cursor กลับไปแสดงที่ช่อง input


}