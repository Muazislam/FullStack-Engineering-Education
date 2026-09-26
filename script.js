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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// =============================================================

// MDN: Accessing array elements

// =============================================================
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

