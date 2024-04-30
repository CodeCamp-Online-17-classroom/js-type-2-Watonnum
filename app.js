let a = undefined;
let b = null;
let c = b + "4 2";

let d = Number(a);
let e = Number(b);
let f = Number(c);

console.log(d);
// NaN
console.log(e);
// 0
console.log(f);
// NaN

// จากผลลัพท์ อธิบายได้ว่า
//  เพราะ a ถูกกำหนดให้ตัวมัน เป็นตัวแปรที่ยังไม่ได้ถูก define จึงคืนค่าเป็น NaN
//  เพราะ null ไม่มีค่า การแปลงมันเป็น number จึง = 0
//  เพราะ มี "" อยู่ในคำสั่ง f , คำสั่งนี้จึงนับเป็นการแปลง string เป็น number ซึ่ง ก็ตรงตัว ไม่ใช่ตัวเลข
