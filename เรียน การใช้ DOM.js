/* ใช้ DOM ในการเข้าไปจัดการ HTML CSS เช่น การเปลี่ยนข้อความในหน้าเว็บ , สร้าง tagใหม่ , เปลี่ยน style ...*/

// document.write("ความกว้างหน้าจอ "+window.innerWidth);
// document.write("<br>");
// document.write("ความสูงหน้าจอ "+window.innerHeight);

let link = document.querySelector('a'); // เราใช้ querySelector ในการเอา tag a มาเก็บไว้ใน ตัวแปร link สามารถใช้ชื่อ class แทน tag a ได้

link.textContent = 'Go to youtube ชื่อคลิป : JavaScript DOM เรียนรู้การปรับแต่งเว็บด้วยการ Manipulation DOM'
link.href = 'https://www.youtube.com/watch?v=QyQVbOAHXwI&list=PLpSigC2TmCQDQiebyIVOQR5_VHGCKPyt-&index=27' ;
link.style.color = 'green';

/*--------------------------------------------------------------------------- */

/*การสรา้ง element ใหม่โดยใช้ javascript */

let sect = document.querySelector('section');

let para = document.createElement('p'); // ใช้ javascript สรา้ง tag p

para.textContent = " Hello DOM ทดสอบ" // ข้อความส่วนนี้จะเกิดขึ้นได้ ต้องมี tag p ที่เราสรา้งใน HTML

sect.appendChild(para); // ให้ tag p ที่เราใช้ตัวแปร para สร้าง ไปปรากฏเป็น tag child หรือ tag ลูก ใน tag section ทําให้ข้อความจาก บรรทัด 21 จะแสดงออกมาในหน้า HTML ในส่วนของ tag section

// sect.removeChild(para); // ลบ tag p ที่เราใช้ตัวแปร para สร้าง

/*--------------------------------------------------------------------------- */

/* การปรับแต่ง CSS โดยใช้ javascript*/

/* อันนี้คือการเข้าถึง css แบบ inline ใน HTML tag */
// para.style.color ='red' ;
// para.style.backgroundColor = 'yellow';
// para.style.width = '300px';
// para.style.height = '75px';
// para.style.padding = '35px' ;
// para.style.textAlign = 'center';
// para.style.margin = '0 auto';

/* อันนี้คือการเข้าถึง css แบบเข้าถึงผ่าน class ที่สร้างไว้ใน CSS ในที่นี้คือ .highlight*/
para.setAttribute('class','highlight'); // ทีนี้ตัวแปร para ก็มี class ชื่อ highlight แล้ว