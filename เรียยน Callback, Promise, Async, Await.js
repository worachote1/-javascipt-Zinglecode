// Synchronous คือ การทํางานของโปรแกรมแบบเป็นลําดับขั้นตอน จากบรรทัดบนลงล่าง เช่นการใช้ console.log() หลายๆบรรทัด
// Asynchronous คือ การทํางงานของโปรแกรมแบบ ไม่ เป็นลําดับขั้นตอน

// อันนี้เป็น Asynchronous
// จะทําconsole.log() ของบรรทัด ที่ 6 กับ 12 ก่อน จากนั้นเป็นเวลา 3000 millisecon หรือ จากนั้น 3 วินาที จึงจะ console.log() ของฟังก์ชั่น call back ที่อยู่ใน setTimeout 
console.log("Plant corn");

setTimeout(function() { // ถ้า ฟังก์ชั่นของเรามีการรับ ฟังก์ชั่นตัวอื่นมาเป็น argument แบบนี้เราจะเรียก ฟังก์ชั่นตัวที่รับมาว่า Callback Function
    console.log("Water plant ");
}, 3000);

console.log("Add fertilizer");

/*---------------------------------*/

const list  =  ["man","woman","child"] ;

/* ใช้ call back function ร่วมกับ .map() ให้เอาค่า Array ทีละตัว ไปผ่าน function*/

const newList = list.map(function (val){ // เราจะให้ call back function ของเรามีหรือไม่มีชื่อก็ได้ อย่างตัวนี้คือไม่มีชื่อ

    return val+" kind"
})

console.log(newList); 

/*------------------------------------------------------------------*/

// function test(firstName, LastName) {
//     return  `ชื่อจริงคือ ${firstName} นามสกุลคือ ${LastName}`;
// }

// console.log(test("Worachote","Jairew"));

/*------------------------------------------------------------------*/

/* การตั้งชื่อให้ call back function ของเรามีหรือไม่มีชื่อก็ได้ */

function greeting(name){
    console.log(`สวัสดี , Mr.${name} ยินดีต้อนรับสู่ประเทศไทย`);

}

function introduction(firstName,LastName,callback){

    let fullName = `${firstName} ${LastName}`;
    callback(fullName) ;
}

introduction("Worachote","Jairew",greeting); // greeting เป็น call back ไม่ต้องใส่() ใส่แค่ชื่อ ฟังก์ชั่นได้เลย

/*---------------------------------------------------------------------------------------------------------*/

// Promise จะทําทุกอย่างที่เป็น true ทําให้เราเขียน Asynchronous ได้แล้ว code ดู clean มากกว่า ใช้ callback

const weather = true  ;

const date = new Promise(function(resolve , reject){ //สร้าง promise

    if(weather) {
        const dateDetails = {
            Username:"Time Walker",
            location: "ร้าน โอชินเน ฝั่งตรงข้าม เดอะมอลล์ โคราช,Nakhonrajsima, Thailand",
            table : 5
        }

        resolve(dateDetails)
    }

    else{
        reject(new Error("อากาศวันนี้ไม่ดี ต้องยกเลิกนัด"));
    }

});

// console.log(date);


/*Promise Chain */

// Promise Chain เราสามารถเขียน promise โดยใช้ .then() กับ .catch() มาต่อได้
// โดย .then() จะเอาข้อมูลจาก resolve มา และตัว .catch() จะเอาข้อมูลจาก reject มา
/* 
    date
        .then(function(done){
            // ข้อมูลจาก resolve
        })

        .catch(function(error){
            // ข้อมูลจาก reject
        })

*/

const oderUber = function(dateDetails){ // ฟังก์ชั่นเรียกใช้บริการ รถ Uber

    return new Promise(function(resolve,reject){
        const message = `ไปส่งผมที่ ${dateDetails.location} หน่อยครับ มีนัดว่าจะไป dinner` ;
        resolve(message);
    })


}

/*
const myDate = function(){

    date
        .then(oderUber)
       
        .then(function(done){
            console.log("We are going on a dinner.");
            console.log(done); //เอาขข้อมูลจาก object dateDetails มา
        })

        .catch(function(error){

        console.log(error.message); // เอาข้อความ จาก reject มา คือคําว่า อากาศวันนี้ไม่ดี ต้องยกเลิกนัด

        })    
}
*/

//myDate();

/* -------------------------------------------------------------------------------------------------------*/

/* Async และ Await */
//ทําให้เราเขียน Promise ได้ง่ายขึ้น โดย Async ฟังก์ชั่น จะ return มาเป็น Promise

//await ใช้เพื่อบอกให้ JavaScript รอจนกว่าคำสั่งนั้นจะเสร็จ ถึงค่อยไปทำงานอันต่อไป โดยฟังก์ชันที่จะมี await อยู่ข้างในได้ต้องประกาศเป็น async เสมอ

async function myDate(){
    try{
        let dateDetails = await date; // รอให้ทํา date เสร็จก่อน
        let message = await oderUber(dateDetails); 
        console.log(message);
    } catch(error){

        console.log(error.message);
    }

}

(async ()=> { //เรียกใช้ async ฟังก์ชัน
    await myDate();
})();