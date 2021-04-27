console.log("Hell World....")

document.getElementById("text").innerHTML = "Time Walker"; /*แสดงข้อความ Time Walker ใน tag html ที่มี id ="text"  */

document.write("Hello Document Write");

window.alert("Hello Alert Box"); /* มีกล่องขึ้นแจ้งด้านบนเว็บ แสดงข้อความว่า Hello Alert Box */

/* -------------------------------------------------------------------*/

/* ฟังก์ชั่น */
function myFunction(value1, value2) {
    return value1 * value2
}

console.log(myFunction(5, 2));

/* เปลี่ยนสี Background */

function changeBg() {
    document.body.style.backgroundColor = "red";
}

/* -------------------------------------------------------------------*/

/* Object */
let mycar = {
    brand: "BMW",
    model: "x4",
    color: "brown",
    FullName: function () {
        return this.brand + " " + this.model; /*this จะอ้างอิงถึง property ใน object เขียนแทนคําว่า mycar ประหยัดเวลาขึ้น */
    }

};

console.log(mycar.FullName());

/* -------------------------------------------------------------------*/

/* Event */
/* ใน javascript เราสามารถสร้าง event เช่น click ที่ปุ่ม แล้วมีบางอย่างเกิดขึ้น */
function displayDate() {
    document.getElementById("TimeDemo").innerHTML = Date();
}

/* -------------------------------------------------------------------*/

/* Array */
/* มีอยู่ 2 แบบ*/

/*Array Literal */
let MyArrayCar_1 = [
    "BMW",
    "Honda",
    "Toyota"];

/* Array Constructor*/
let MyArrayCar_2 = new Array("Mitsubishi", "Hyndai", "Tesla");

console.log(MyArrayCar_1);
console.log(MyArrayCar_2);

/* -------------------------------------------------------------------*/

/* Datatype มี 7 แบบ */
/* Primative Type*/
let myNum = 10; /* Number*/
let myString = "Worachote"; /* String*/
let myTrue = true; /* Boolean*/
let myFalse = false; /* Boolean*/
let myNull = null; /* null หมายถึงไม่รู้ว่าค่ามันคืออะไร */
let myUndefined; /* undefined หมายถึง ค่าที่ยังไม่ได้กําหนดให้ตัวแปร*/
/* Object Type*/
let myObject = {}; /* Object*/

/* -------------------------------------------------------------------*/

/* การใช้ if condition*/
let time = 15;

if (time < 12) {
    console.log("Good moring");
}
else if (time < 18) {
    console.log("Good Afternoon");
}

else {
    console.log("Good Evening");
}

/* -------------------------------------------------------------------*/

/* การใช้ switch*/
/* switch ใช้เช็คว่าค่าหรือผลลัพธ์ที่เราให้มามันตรงกับ case ตัวไหนรึเปล่า ถ้าไปตรง caseใด ก็จะให้แสดงผลลัพธ์ออกมา*/

switch (new Date().getDay()) {

    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;

    case 2:
        console.log("Saturday");
        break;


}

/* -------------------------------------------------------------------*/

/* loop for */
// ใช้ loop ดึงข้อมูลใน Array พิมพ์ออกมาทาง console
let cars = ["BMW", "Ford", "Honda", "Audi"];

let i;
for (i = 0; i <= 3; i++) {
    console.log("รถคันที่ " + (i + 1) + " " + cars[i]);


}

/* -------------------------------------------------------------------*/

/* การแปลงชนิดข้อมูล */

x = String(1234) // x จะเท่ากับ "1234"
console.log(x[2]); // ได้ 3

/* -------------------------------------------------------------------*/
/* Scope Javascript*/
/* Scope หมายถึง การกําหนดความสามารถ ในการเข้าถึงตัวแปร มี 2 แบบ*/

/* Local Scope คือ ตัวแปรที่ประกาศใน function จะสามารถเข้าถึงได้แค่ใน function ของมัน ไม่สามารถเข้าถึงได้จากนอก function ได้*/
/* Global Scope คือ แบบเข้าข้อมูลจากภายนอก function ได้ */
function myNameFunc() {
    let myName = "Worachote"; //อันนี้คือ Local Scope
    console.log(myName);

}

myNameFunc(); // ได้ output

// console.log(myName); //ไม่ได้ output เพราะเข้าถึงตัวแปรจากภายนอก

/* -------------------------------------------------------------------*/

/*  Var Let Const */

// var x = 5;
// var x = 6;
// console.log(x); // var เมื่อประกาศไปแล้ว สามาถประกาศค่าใหม่ได้ 

// let y = 7;
// let y = 8;
// console.log(y); /* let  จะไม่สามารถประกาศค่าใหม่ได้ แต่สามารถทําได้โดย ลบ let ออกหน้า y ออกในบรรทัดที่ 171*/

// const z = 9;
// z = 10;
// console.log(z); /* const จะไม่สามารถประกาศค่าใหม่ได้ไม่ว่าจะกรณีใดก็ตาม*/

/* -------------------------------------------------------------------*/

/* ES6 Arrow Function */

let hello = () => {
    return "Hello World ,Worachote";
}

console.log(hello());

/* -------------------------------------------------------------------*/

/*Class */
/* Class ก็จะเป็นฟังก์ชั่นอีกชนิดหนึ่ง แต่ประกาศคละแบบ ป็นต้นแบบในการสร้าง Object*/

class myClass {
    constructor(nickname) { /* ใน class จะมี method ชื่อ constructor เอาไว้ใส่ property ข้างใน */
        this.mynickname = nickname;
    }
    fullname() {
        return "my nickname is " + this.mynickname;
    }
}

let person = new myClass("ไทม์"); // สร้าง object มีการเรียกใช้ class แล้วเก็บไว้ในตัวแปร person ที่เป็น object

console.log(person); // output คือ ไทม์

console.log(person.fullname()); // output คือ nickname is ไทม์

/* -------------------------------------------------------------------*/

/* Class Inheritance*/
/* Inheritance ใช้เมื่อเรามี classแม่ แล้วเราต้องการให้ classลูก สามารถเอา method  
หรือ propertyต่างๆจากใน classแม่ มาใช้ 
โดยเราต้องใช้ extends */

class Car { // อันนี้เป็น class แม่
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return "I have a " + this.carname;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand); // super(brand) จะทําการเรียก constructor() จาก class แม่ แล้วเราก็สามารถเข้า method ต่างๆใน class แม่ ได้
        this.model = model;
    }
    show() {
        return "รถโปรดของผมคือ "+this.carname+" รุ่น "+this.model ;
    }
}

let MyFavoriteCar = new Model("BMW","Series 3 Gran Sedan");
console.log(MyFavoriteCar);
console.log(MyFavoriteCar.show());

console.log(MyFavoriteCar.present());