const numbers = [2, 4, 6];
const newLength = numbers.push(8);

console.log(numbers); // THis prints [2, 4, 6, 8] beause it gives out complete array
// and we are printing array after pushing 8 so, the changes are being reflected
console.log(newLength); // This prints 4 because when we assign a variable to the push operation , it gives out length of the array.


const book = {
  title: "Clean Code",
  read: false
};

book.read = true;
book.rating = 4.5;

console.log(book);
/*
This will print an object like:
book = { title: 'Clean Code', read: true, rating: 4.5}

This output willl happen because we change the read property from false to true
and we introduce a new property called rating.
*/

const account = {
  owner: "Muaz",
  active: false,
  
  toggleActive: function() {
    this.active = !this.active;
  }
};

account.toggleActive();

console.log(account.active);

/*
This gives an output of true for active property. Because the this keyword acts like
account.active = !account.active;
And the active changes from false to true because of NOT operation '!'.

*/
