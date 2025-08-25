/*//testing with numbers comparison operators
console.log(50>30);
console.log(50==30);
console.log(30>=20);
console.log("apple">"banana");
console.log("01"===1);
console.log(null>=1);
*/
let sum = 0;
const n = 100

for (let i = 1; i <= n; i++) {
   sum += i;
}

console.log('sum:', sum);

console.log(foo());
var foo = function() {
  return "Function Expression";
};
function foo() {
  return "Function Declaration";
}