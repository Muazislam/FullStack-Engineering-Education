// -
// -
// -
/// Adding element to the array

const sports = ["soccer", "basketball"];
const total = sports.push("football", "swimming");

console.log(sports);
console.log(total);

// Merging two arrays

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

vegetables.push(...moreVegs); // honestly, i don't get why we use triple dot, but maybe to merge two arrays, or just to copy the
// // data of one array and paste it into the second array.
console.log(vegetables);

// push on non-array objects

const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);

/*
Object { 2: 4, 3: 1, 4: 2, length: 5, unrelated: "foo" }
​
2: 4
​
3: 1
​
4: 2
​
length: 5
​
unrelated: "foo"
​
<prototype>: Object { … }

THisis the output i get. Now, i don't  know why is it that, the sequence of the 
array peoperties changes. THat, the 2:4 was at last in the 
array but now it is at first. And the new numbers should have come to 
last because (arrayLike, 1, 2) has the numbers at the end. And sequentially
they should come at the end. but length and unrelated property come at last.

and the length property has it's number change to 5 from 3. why is it. does
length exist in javascript that if i put it in array, array will automatically detect it as array.

And the array itself is a normal array not object. And the properties
are very flexible. 

i also don't know why we use prototype and call. Do they do something?
*/

const obj = {
  length: 0,
  addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

obj.addElem({});
obj.addElem({});
console.log(obj); // 2

// why is it that, here, the length counts only the added element into array
// but the previous example was noticing everything and gave length of 5.
// Here, i see that the addElem is maybe a function. And we have put
// an empty square brackets [], and from what i remember is that
// it could call the array elements and pass them, i remember this in react.
// and we put push into the line as well. we put .push
// then we put .call, i don't  know what call is but [].push. can push elements
// into the array and i think that we placed push with [] as . dot notation,
// we want to push elements through a method.
// and within the practhesis, we give arguments of
// this and elem. The this will be like 'obj' itself as you told me before,
// the elem i don't know, maybe it is like the new elements that are added
// by obj.addElem({}) are now pushing elements into the array. but there is
// already a push in the method.

/*
so overall i guess that the array has to be a method and it
takes the elements inside it. It takes the elements and pushes them into the array
through the method
*/

//
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// =============================================================

// My own pracice. I did not do the other two documentation links practices. because
// i think that they are too high for me right now. And if not, I think this knowledge
// is enough for now and afterward i get used to working with this, i will practice then

// =============================================================
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const books = [
  {
    title: "Clean Code",
    read: false,
  },
  {
    title: "Deep Work",
    read: true,
  },
];

books.push({
  title: "The pragmatic programmer",
  read: false,
}); /* In the code that I have written, I see that I have an array of books and within it I have objects named title and read property. Now the objective is to introduce a third object into the array, so we use push method. Now the push method pushes the third object into the array just like it is a simple using the same methods as a simple array. Because if we are dealing with a simple array of one, two, three number and if we write push four, then the four digit is going to be pushed at the very end of the array. Similarly, now that we have objects, we have object zero, we have object one and the objects are at index zero, one and two. So similarly push is going to push that object at the last index number for the third object we are pushing right now. It will become at third index. No, sorry, second index. It will come at second index. */
// console.log(books);
books[0].rating = 8.7; // I honestly didn't really read about this. But the example you gave me, i just saw that example and i though, that objects are placed on index numbers, so, if i say book[0] it will access the object at index 0 and i can put the rating property using dot notation.
books[1].read = false;
for (let book of books) {
  console.log(book.title); /*  I just thought about this that, i had once made mistake of
  putting book and not .title and it started to print the objects 
  in the array one by one. And i learned that since dot notation
  allow us to access a single or any property from the array,
  i can use that and apply it to book because after taking each object
  individually, the book has the object and i can access
  a single property from it using dot notation */
}
console.log(books);



/* I have 5 confidence and i have spent 3 hours on thistask and previous tasks */
 
