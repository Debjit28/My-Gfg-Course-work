const readlineSync=require("readline-sync");
const myname=readlineSync.question("Tell me your name : ");

console.log(`Welcoome to club ${myname}`);