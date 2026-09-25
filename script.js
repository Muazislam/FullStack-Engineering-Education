let arr = [1, 2, 3];

let m = arr.push(5);
console.log(m);
console.log(arr);

for (const number of arr) {
  console.log(number * 2);
}

/*
I have 30 more minutes in the morning, the rest will be completed later.
The array is storing 3 integers. I declared a variable using let.

The .push appends an element at the end of the array.

The for...of takes 1 element from the array 'arr' at a time.
And it stores the elements in the const variable. 
Then it gives out each element but doubled. Because we are performing
multiplication operation inside the loop, we multiply the elements with 
number 2.

I double the number within the for loop. I double them and at the same time,
i print them.

*/
