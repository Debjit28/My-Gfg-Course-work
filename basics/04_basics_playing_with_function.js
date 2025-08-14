let myArray = ["apple", "banana", "cherry"];

console.log(myArray.length); // outputs 3

myArray.push("date");
console.log(myArray); // outputs ["apple", "banana", "cherry", "date"]

myArray.splice(1, 1, "orange");
console.log(myArray); // outputs ["apple", "orange", "cherry", "date"


let name="Debjit"


/*
Built-In Methods :-
length: returns the number of elements in the array.
push(): adds one or more elements to the end of the array.
pop(): removes the last element from the array and returns it.
shift(): removes the first element from the array and returns it.
unshift(): adds one or more elements to the beginning of the array.
splice(): removes elements from the array and/or adds new elements.
concat(): joins two or more arrays and returns a new array.
slice(): extracts a portion of an array and returns a new array.
indexOf(): returns the index of the first occurrence of a specified element in the array.
forEach(): calls a function for each element in the array.
map(): creates a new array with the results of calling a function for each element in the array.
filter(): creates a new array with all elements that pass a test implemented by a function.
reduce(): applies a function to each element in the array to reduce the array to a single value.
 */
//simple function in js
function greeting(name){
    console.log(`Hello ${name}`)
}
greeting(name)//as name already a key word in js so show in cutting line