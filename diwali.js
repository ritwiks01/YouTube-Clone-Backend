let currentDate = new Date();

console.log("current date:",currentDate);

//index of months is start from 0
let diwaliDate = new Date(2023, 10,12);

console.log("diwaliDate :",diwaliDate);

const timediff =diwaliDate.getTime() - currentDate.getTime();
const daydiff = timediff/(1000*60*60*24); 

console.log("day remaining :", (daydiff));
