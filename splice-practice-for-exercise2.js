const months = ["Jan", "March", "April", "June"];
months.splice(1,0, "Feb");  // insert at index 1

console.log(months);

months.splice(4,1, "May");  // Replaces 1 element at index 4.

console.log(months);

/*
 * splice(start)
 * splice(start, deleteCount )
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2)
 * splice(start, deleteCount, item1, item2, itemN)
 */

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2,0, "drum");
console.log(myFish) // remove zero elements before index 2 and insert "drum"


const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removed1 = myFish1.splice(2,0, "drum", "guitar");
console.log(myFish1);


const myFish2 = ["angel", "clown", "mandarin", "sturgeon"];
const removed2 = myFish2.splice(0,0, "angel");
console.log(myFish2);


// To insert an element at last index without deleting anything
const myFish3 = ["angel", "clown", "mandarin", "sturgeon"];
const removed3 = myFish3.splice(myFish3.length,0, "sturgeon");
console.log(myFish3);


// Remove 1 element at index 3
const myFish4 = ["angel", "clown", "mandarin", "sturgeon"];
const removed4 = myFish4.splice(3,1);
console.log(myFish4);


// Remove 1 element at index 2, and insert "trumpet"
const myFish5 = ["angel", "clown", "mandarin", "sturgeon"];
const removed5 = myFish5.splice(2,1, "trumpet");
console.log(myFish5);


// Remove 2 elements from index 0 and insert "parrot", "anemone" and "blue"
const myFish6 = ["angel", "clown", "mandarin", "sturgeon"];
const removed6 = myFish6.splice(0,2, "parrot","anemone","blue");
console.log(myFish6);

// Remove 2 elements starting from index 2.
const myFish7 = ["angel", "clown", "mandarin", "sturgeon"];
const removed7 = myFish7.splice(2,2);
console.log(myFish7);


// Remove 1 element from index-2 
const myFish8 = ["angel", "clown", "mandarin", "sturgeon"];
const removed8 = myFish8.splice(-2,1);
console.log(myFish8);
// Why did it remove mandarin when it should start from right from 0, -1, -2. and
// it should come at clown since it is at -2. Or if it starts from -1 then -2 
// then it will come to mandarin.

// Remove all elements starting from index 2.
const myFish9 = ["angel", "clown", "mandarin", "sturgeon"];
const removed9 = myFish9.splice(2);
console.log(myFish9);

// using splice on sparse array 
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1,2));
console.log(arr);


// splice() on non-array objects 

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

console.log(Array.prototype.splice.call(arrayLike, 0,1,2,3));

console.log(arrayLike)

