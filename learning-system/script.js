/*
Create these objects:

const book1 = {
  title: "Clean Code",
  author: "Robert C. Martin"
};

const book2 = {
  title: "Deep Work",
  author: "Cal Newport",
  rating: 0
};

Destructure rating with a default value of "Not rated".

Predict what happens for:

book1
book2
Pay special attention to whether the default replaces 0.

//--------------------------------------------------------------------

const book1 = {
  title: "Clean Code",
  author: "Robert C. Martin",
};

const book2 = {
  title: "Deep Work",
  author: "Cal Newport",
  rating: 0,
};

let { title, author, rating = "Not rated" } = book2;

console.log(title);
console.log(author);
console.log(rating); // The default rating value did not replace zero. The zero from the object persists, despite the default value. I would think that the default value was for the situation when we do not have any value at all.

*/


