let books = ["Quran", "Why Nations Fail", "The pragmetic programmer"];

console.log(books[0]);
console.log(books.length);

books.push("bhindi");
console.log(books);

books.pop();
console.log(books);

for (const book of books) {
  console.log(book.toUpperCase());
}
