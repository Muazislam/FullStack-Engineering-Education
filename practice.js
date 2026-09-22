// Destructuring assignment
// importance: 5

// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };

// Write the destructuring assignment that reads:

//     name property into the variable name.
//     years property into the variable age.
//     isAdmin property into the variable isAdmin (false, if no such property)

// Here’s an example of the values after your assignment:

// let user = { name: "John", years: 30 };

// // your code to the left side:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// ======================================

// Solution

// ======================================

// let user = { name: "John", year: 30 };

// let { name, year, isadmin = false } = user;

// alert(name);
// alert(year);
// alert(isadmin);


// ==============================================================

// The maximal salary
// importance: 5

// There is a salaries object:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// Create the function topSalary(salaries) that returns the name of the top-paid person.

//     If salaries is empty, it should return null.
//     If there are multiple top-paid persons, return any of them.

// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

let salaries = {
  'john': 100,
  'pete': 300,
  'Mary': 250,
};

function topSalary('john', 'pete', 'Mary'){
  for(int i = 0, i < myArray.length; i++){
    if(myArray[i] > max){
      ma
    }
  }
}


int[] myArray = new int[] {20,10,5,40,20,41,41,2,6,7,3,4,5,6,23,34,7,8,9,2};
        int max = Integer.MIN_VALUE;
        int sum=0;
        for(int i = 0; i < myArray.length; i++)
        {
            if(myArray[i] > max) 
            {
                 max = myArray[i]*3;
                 sum = sum + max;
             }
        }
        System.out.println(sum);
    }
