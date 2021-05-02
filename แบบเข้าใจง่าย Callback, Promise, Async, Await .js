(() => {

//1.การทํางานของ Asynchronous code 
// โค้ดที่เขียนก่อนไม่ถูกทําก่อนเสมอไป เช่น setTimeOut() ก็เป็น ฟังก์ชั่น Asynchronous
/*
function simulateAsyncAPI(text,timeout){
    setTimeout(() => console.log(text) , timeout);

}

simulateAsyncAPI("A",1000);
simulateAsyncAPI("B",500);
simulateAsyncAPI("C",100); // จะได้ C มาก่อนน B และ B มาก่อน A ตามลําดับ
*/

//แต่ถ้าอยากจะให้ A ถูกทําให้เสร็จก่อนแล้วค่อยทํา B ให้เสร็จ แล้วค่อยทํา C
//จะต้องมีวิธีการที่จะบอกให้โค้ดทํางานใดให้เสร็จก่อน  แล้วค่อยเรียกใช้งานนอีกโค้ดถัดมา เป็นที่มาของการที่เราจะได้ใช้ callback , prommise , async/await

//2. Callback 
/*
function simulateAsyncAPI(text,timeout,callback){ // จะรับตัว callback ที่เป็น ฟังก์ชั่นเข้าไปด้วย แล้วภายในฟังก์ชั่น callback ก็ให้เรียกใช้ตัว Asynchronous code อันถัดไป....
    setTimeout(() => { console.log(text)
    callback();
    }, timeout );

}

simulateAsyncAPI("A",1000, () => {
    simulateAsyncAPI("B",500,()=>{
        simulateAsyncAPI("C",100,() =>{

        })
    })
});

*/

// แต่ว่าการใช้วิธี callback บางที่อาจต้องสร้าง function หลายๆขั้นจน code จะดูซับซ้อนอ่านยาก เรียกว่า callback hell
//เราจึงแก้ปัญหา callback hell ด้วยการใช้ Promise

//3. Promise 
/*
function simulateAsyncAPI(text,timeout){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{ 
            if (text=="B") return reject("B got rejected"); // โค้ดส่วนนี้ใช้งานร่วมกับ .catch() โดยเมื่อเราใช้งาน reject() มันจะ thorw error ออกมาจาก Promise ให้เรา
            console.log(text);
            resolve(); // ตัว resolve เป็นการบอก Promise ว่า Asynchronous code ของเราทํางานเสร็จแล้ว ดังนั้นเมื่อเราเรียกใช้งานงานตัว ฟังก์ชั่น Asynchronous เสร็จแล้วเราต้องเรียกใช้ resolve()
        } , timeout);
    } )
}

*/

/*
simulateAsyncAPI("A",1000)
    // ใน Promise เราจะไม่ pass callback เข้าไป แต่ object ของ Promise ที่ return มาจะมี method ชื่อว่า .then() โดยมันจะถูกเรียกใช้งานเมื่อ ฟังก์ชั่น Asynchronous ทําเสร็จ แล้วเราเรียกใช้งาน resolve
    // ก็คือเราเรียกใช้ resolve() ต่อมา .then() ก็จะถูกทํางานอัตโนมัติ
    .then( ()=>{
        return simulateAsyncAPI("B",500); // .then นั้นมันจะเช็คว่าข้างใน .then นั้นถ้า return เป็น Promise อีก มันจะรอให้ Promise ตัวนั้นทําให้เสร็จก่อน
    } )
    
    .then( ()=> {
        return simulateAsyncAPI("C",100);
    } )

    //method .catch() จะถูกเรียกใช้งานเมื่อเกิด error ขึ้นภายใน ฟังก์ชั่น ของเราที่เรียกใช้งาน โดยมันจะรับค่า ฟังก์ชั่น ที่มี พารามิเตอร์เป็น error
    .catch( (error)=>{
        console.log(error);
    } )

*/

// ถึงแม้ว่าการเรียกใช้งาน Promise จะทําให้ code อ่านกว่า callback แต่ก้ยังต้องเรียก .then ไปเรีอยๆ
// ซึ่งเราสามารถใช้ Async/Await แทนได้  สิ่งที่ Async/Await ต่างจาก Promise อยู่่ที่การเรียกใช้งาน

//4. Async/Await

function simulateAsyncAPI(text,timeout){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{ 
            if (text=="B") return reject("B got rejected"); // โค้ดส่วนนี้ใช้งานร่วมกับ .catch() โดยเมื่อเราใช้งาน reject() มันจะ thorw error ออกมาจาก Promise ให้เราไปใช้ใน catch
            console.log(text);
            resolve(); // ตัว resolve เป็นการบอก Promise ว่า Asynchronous code ของเราทํางานเสร็จแล้ว ดังนั้นเมื่อเราเรียกใช้งานงานตัว ฟังก์ชั่น Asynchronous เสร็จแล้วเราต้องเรียกใช้ resolve()
        } , timeout);
    } )
}

async function run() { // ตอนสร้างฟังก์ชั่น ต้องมี async นําหน้า
  try{
    await simulateAsyncAPI("A",1000); //เหมือนเรียกใช้ ฟังก์ชั่นปกติแต่มี await นําหน้าซึ่งมันจะทําการหยุด ไม่ไปทําคําสั่งอื่น จนกว่า บรรทัดจะเสร็จ
    await simulateAsyncAPI("B",500);
    await simulateAsyncAPI("C",100);
    }catch(error){
        console.error(error);
    }
}

run();

})();
