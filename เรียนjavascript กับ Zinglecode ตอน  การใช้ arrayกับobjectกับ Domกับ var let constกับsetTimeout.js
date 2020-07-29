// -------ตอน Array------
//Array เป็นชนิดข้อมูลอย่างหนึ่งที่เอาไว้เก็บข้อมูล หลายข้อมูล มารวมอยู่ในกลุ่มเดียวกัน
let cars = ["BMW X1", "Toyota camary", "Ford renger", "Nissan navara"]; // array จะนับโดยเริ่มจากตัวที่ 0 แล้วก็ 1 2 3 ไปเรื่อยๆๆ
console.log(cars);
/*
 cars[0] = "Honda" ; //เปลี่ยนค่าใน array ตัวที่ 0 จาก BMW X1 ไปเป็น Honda

console.log(cars); */

//-----การเพิ่มและการลด ข้อมูลออกจากตําแหน่งแรกและตําแหน่งสุดท้ายของ array----
// ทําได้โดยใช้คําสั่งของ Array หรือที่เรียกว่า method

//เพิ่มข้อมูล ในตําแหน่งสุดท้ายของ array โดนการใช้ method ชื่อ push
/* cars.push("Mazda");
console.log(cars); */

//ลดข้อมูล ในตําแหน่งสุดท้ายของ array โดนการใช้ method ชื่อ pop
/* cars.pop();
console.log(cars); */

//-----method ที่ใช้ในการเพิ่มหรือลด ข้อมูล ออกจากแหล่งที่เรากําหนด----
//------ใช้ splice(ตําแหน่ง,จํานวนตัวที่จะลบ,ข้อมูลที่จะใส่เพิ่ม)-----

/*
cars.splice(2,1); // ลบข้อมูลตัวที่ 2 ออก คือ ลบFord renger ออก
console.log(cars); 
*/

/*
cars.splice(1,0,"Suzuki"); //เพิ่มข้อมูล Suzuki ลงในตําแหน่งที่ 1 โดยไม่ได้ลบตัวใดออก
console.log(cars);
*/

/*
cars.splice(0,1); //ลบข้อมูล ตําแนห่งที่ 0 ออก คือ ลบ BMW X1 ออก
console.log(cars);
*/

//---การนับจํานวนสมาชิกใน Array ว่ามีกี่ตัว---
//---- ทําได้โดยใช้ คําสั่ง lenght----

let fruits = ["Apple", "Banana", "Papaya", "Grape"];
console.log(fruits.length);

//-------- การใช้ Array ทํางานร่วมกับ loop -------

//สร้างโปรแกรมเพื่อตรวจสอบว่า มีคนสอบผ่านกี่คน
//let scores = [82, 75, 48, 64, 36];
//let passedCount = 0;

/*
for (let i = 0; i <= scores.length; i++) {

    if (scores[i] >= 50) {
        passedCount++;
    }
}

console.log("มีคนสอบผ่านจํานวน "+passedCount+"คน");*/ // loop นี้ใช้ได้แต่เป็นวิธีที่เก่า แล้ว แนะนําให้ใช้ คําสั่ง forEach จะทําให้โค้ดสั้นกว่า  

//ใช้วิธี forEach
// forEach เป็นคําสั่งของ Array ทําหน้าที่ถีบส่งค่าแต่ละค่า ของ Array ตั้งแต่ตัวที่ 0 ถึง ตัวสุุดท้าย เพื่อไปทํางานในฟังก์ชั่นที่กําหนด 
/*
scores.forEach(CheckScore => {

    if (CheckScore >= 50) {
        passedCount++;
    }
}
);
console.log("มีคนสอบผ่านจํานวน " + passedCount + " คน"); */

//----Array การใช้คําสั่ง map
// คําสั่ง map ทําหน้าที่ถีบส่งค่าแต่ค่า ของ Array เข้าไปในฟังก์ชั่น แล้วในfunction ก็จะมีการ return ค่ากลับไป แล้วค่าที่ได้ก็จะนําไปเก็บใน array ใหม่

/*let scores = [24, 38, 56, 78, 49]

let passFailScores= scores.map((CheckPassFail) => {

    if (CheckPassFail >= 50) {

        return "สอบผ่าน"
    }
    return "สอบตก"
}
)

console.log(passFailScores[3]) */

//----Array การใช้คําสั่ง filter----
// คําสั่ง filter ทําหน้าที่ถีบส่งค่าแต่ค่า ของ Array เข้าไปในฟังก์ชั่น แล้วจะคัดเฉพาะ ค่าในarray ที่ผ่านมาตราฐานเงื่อนไขที่เรากําหนดไปเก็บไว้ใน array ใหม่

/*
let scores = [24, 38, 56, 78, 49]
let passScore = scores.filter( (score)=>{

    return  score >= 50 ;
} )

console.log(scores); //กลุ่มคะแนนเดิม
console.log(passScore);//กลุ่มคะแนน ในarray ใหม่ เฉพาะของคนสอบผ่าน */


//----Array การใช้คําสั่ง reduce-------
// คําสั่ง Reduce นั้นจะทำหน้าที่รวมผลลัพธ์โดยเราสามารถกำหนดค่าเริ่มต้น และ Function ที่ใช้ในการรวมได้ 

/*
let scores = [24, 38, 56, 78, 49]
let sumScores = scores.reduce((sum,score) => {

return sum+score }
)
 
console.log(scores); 
console.log(sumScores); */

//----Array การใช้คําสั่ง find-------
//คําสั่งfind ใช้ในการค้นหาข้อมูล จากเงื่อนไขที่เรากํษหนด จากตัวแรก ถึง ตัวสุดท้ายในarray
//ถ้าหาเจอมันจะคืนค่า ข้อมูลกับมาให้เราแล้วมันจะหยุดการทํางานทันที
//แต่ถ้าหาจนถึง array ตัวสุดท้ายไม่เจอ มันเจอ return กลับมาเป็น undefined

//เขียนโปรแกรมเพื่อ check ว่าเด็กที่สอบตกคนแรกใน array นี้ ได้คะแนนเท่าไหร่

/*let scores = [38, 24, 56, 78, 49]
let failScore = scores.find((score) => {
    return score < 50;
} );
console.log(scores);
console.log(failScore); */

//----Array การใช้คําสั่ง findIndex-------
//เหมือนคําสั่ง find แต่แตกต่างตรงที่ จะคืนค่าตําแหน่งindex กลับมาให้
//แต่ถ้าหาไม่เจอจะคืนค่ากลับมาเป็น -1 
/*
let scores = [58, 24, 56, 78, 49]
let failScore = scores.findIndex((score) => {
    return score < 50;
} );
console.log(scores);
console.log(failScore); */

//----Array การใช้คําสั่ง every -----------
//คําสั่ง every ใช้ในการตรวจสอบข้อมูลใน array ว่าข้อมูล ทุกข้อมูล ผ่านเงือนไขที่เรากําหนดรึเปล่า 
//ถ้าผ่านหมด จะคืนค่ากลับมาเป็น true
//แต่ถ้ามีข้อมูลใดข้อมูลหนึ่ง ทําให้ไม่ตรงกับเงื่อนไข จะคืนค่ากลับมาเป็น false

//เขียนโปรแกรม เพื่อ check ว่านักเรียนสอบผ่านทุกคนรึเปล่า
/*let scores = [58, 24, 56, 78, 49]
let everyonePass = scores.every((score)=>{

    return score >= 50
})

console.log(scores)
console.log(everyonePass) */

//----Array การใช้คําสั่ง some -----------
//คล้ายๆกับคําสั่ง every
//ใช้ในการตรวจสอบว่า มีข้อมูลตัวไหนใน array ตรงกับเงื่อนไขที่เรากําหนดบ้างไหม
//ถ้ามีซัก หนึ่ง ตัว จะคืนค่ากลับมาเป็น true
//ถ้าไม่ตรงซักตัวจะคืนค่ากลับมาเป็น false

let scores = [58, 24, 56, 78, 49]
let someonePass = scores.some((score) => {

    return score >= 50
})
console.log(scores);
console.log(someonePass);

//------------------------------------------------------
//-----------------------------------------------------

//--------Object -------------
//Object เป็นชนิดข้อมูลที่ ใช้รวบรวมข้อมูลต่างๆของสิ่ง สิ่งหนึ่ง มาเก็บรวบรวมไว้ในที่เดียว

/*
let person = {

    name: 'Worachote Jairew', // ขั้นข้อมูลด้วยเครื่องหมาย ,
    job: 'Mobile develpoer ',
    hobby: "Reading investment  book , Playing FIFA",
    color: "ฺBlack",

};

console.log(person);
console.log(person.name);

person.name = "Time Walker"; //เปลี่ยน ข้อมูล ใน Object
console.log(person.name);

*/
//การใช้ array ร่วมกับ Object ใช้เวลาเขียนเกม แล้วต้องสร้างตัวละครที่มีข้อมูลคล้ายกัน หลายตัวๆ

/*
let officers = [

    {
        name: 'Worachote Jairew',
        job: 'Mobile develpoer ',
        hobby: "Read investment  book , Play FIFA",
        color: "Black"
    },

    {
        name: 'Samuel Kivrack ',
        job: 'Data science ',
        hobby: " Watch netflix",
        color: "Brown"
    },

    {
        name: 'Roys Henderson',
        job: 'Backend develpoer ',
        hobby: " Play Robox",
        color: "Red"
    },

    {
        name: 'Wei Shen ',
        job: 'Frontend develpoer ',
        hobby: " Sleep",
        color: "White"
    }


];

console.log(officers); */

// -----------------Object การใช้งาน Methods , This----------------
//Methods คือ ฟังก์ชั่นที่เข้าไปอยู่ใน object หมายความว่า ถ้าต้องการใช้งาน Methods เราต้องเรียกผ่าน Object ที่เราสร้างขึ้นมา

/*
let person = {

    name: 'Worachote Jairew', // ขั้นข้อมูลด้วยเครื่องหมาย ,
    job: 'Mobile develpoer ',
    hobby: "Reading investment  book , Playing FIFA",
    color: "ฺBlack",
    salary:   50000  ,

    talk() {

        console.log("สวัสดี ครับบบบบ"+" ผมชื่อ "+ this.name); //สร้าง Medthode คือ สร้างฟังก์ชั่น ใน object
        //ใช้ this. เพื่อให้ Object สามารถ เรียกค่าที่อยู่ในตัวของมันเอง มาใช้งานใน Methode ของมัน ได้
    },

    rich(){
        if(this.salary >= 50000){

            return"เงินเดือนเยอะมาก!!!"
        }
        else if(this.salary <= 25000){
            return "เงินเดือนปานกลาง"
        }
        else {

            return "เงินเดือนน้อย"
        }


    }

};  

person.talk(); 
console.log(person.rich()); */

//--------- Object Constructor----------

// Constructor function คือ function ที่ใช้สร้าง Object

function Officers(name,job,company,salary){ // เป็นมาตราฐานโดยทั่วไป ที่ว่า Constructor function ตัวอักษรตัวแรกเริ่มด้วยตัวใหญ่่
this.name = name ; //การใส่ข้อมูลให้ตัวละครของเรา ข้อมูลจะขึ้นต้นด้วย this.
this.job = job ;
this.company = company;
this.salary = salary ;
    
this.talk = function(){

    console.log( "Hello , my name's "+ this.name +" I work as a" + this.job + ", for" + this.company );

}



}
//// new ใช้รับ object ใหม่ที่ถูกสสร้างขึ้น 
let officer_1 = new Officers("Worachote Jairew","Mobile developer","Code mobile","50,000 THB"); // new  ใช้รับค่าที่ Constructor function สร้างเสร็จแล้วกลับมาเก็บให้ตัวแปร
let officer_2 = new Officers("Jack Trippier ","Frontend developer","Bankok bank","20,000 THB");

officer_1.talk();
officer_1.name


