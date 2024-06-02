/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
// ---- FOR EACH ----
function doubleValues(arr) {
    // Initialize an empty array to hold the doubled values
    const doubledValues = [];
    
    // Use forEach to iterate over each element in the input array
    arr.forEach(function(num) {
        // Double the current number and add it to the doubledValues array
        doubledValues.push(num * 2);
    });
    
    // Return the array containing the doubled values
    return doubledValues;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
     // Initialize an empty array to hold the even values
    const evenValues = []

      // Use forEach to iterate over each element in the input array
    arr.forEach(function(num) {
        // Check if the current number is even
        if (num % 2 === 0) {
            // If it is even, add it to the evenValues array
            evenValues.push(num);
        }
    });
     // Return the array containing only the even values
    return evenValues;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    // Initialize an empty array to hold the new strings with first and last characters
    const firstAndLastChars = [];
    
    // Use forEach to iterate over each string in the input array
    arr.forEach(function(str) {
        // Check if the string is non-empty
        if (str.length > 0) {
            // Construct the new string with the first and last character
            const newStr = str[0] + str[str.length - 1];
            // Add the new string to the firstAndLastChars array
            firstAndLastChars.push(newStr);
        }
    });
    
    // Return the array containing the first and last characters of each string
    return firstAndLastChars;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object.

Examples:

addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)

*/

function addKeyAndValue(arr, key, value) {
    // Use forEach to iterate over each object in the input array
    arr.forEach(function(obj) {
        // Add the new key and value to the current object
        obj[key] = value;
    });
    
    // Return the modified array
    return arr;
}


/*

Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. 
This function should be case insensitive so a lowercase letter and uppercase letter should count.

Examples:

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}


*/


function vowelCount(str) {
    // Initialize an empty object to hold the vowel counts
    let counts = {};
    
    // Convert the string to lowercase to make the function case insensitive
    let lowerCaseStr = str.toLowerCase();
    
    // Define a string containing all vowels
    let vowels = 'aeiou';
    
    // Split the string into an array of characters
    let characters = lowerCaseStr.split('');
    
    // Use forEach to iterate over each character in the array
    characters.forEach(function(char) {
        // Check if the current character is a vowel
        if (vowels.indexOf(char) !== -1) {
            // If the vowel is already a key in the counts object, increment its value
            if (counts[char]) {
                counts[char]++;
            } else {
                // Otherwise, set the initial count for the vowel to 1
                counts[char] = 1;
            }
        }
    });
    
    // Return the counts object
    return counts;
}


/*

Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled.

*/

// ---- MAP METHOD ----
function doubleValuesWithMap(arr) {
    // Use the map method to create a new array with all values doubled
    return arr.map(function(num) {
        return num * 2;
    });
}


/*

Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

*/

function valTimesIndex(arr) {
    // Use the map method to create a new array with each value multiplied by its index
    return arr.map(function(num, index) {
        return num * index;
    });
}


/*

Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

*/

function extractKey(arr, key) {
    // Use the map method to create a new array with the value of the specified key in each object
    return arr.map(function(obj) {
        return obj[key];
    });
}


/*

Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of 
“first” and the value of a key with the name of “last” in each object, concatenated together with a space. 

*/

function extractFullName(arr) {
    // Use the map method to create a new array with the full names extracted from each object
    return arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });
}



/*

Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

*/

//----FILTER----
function filterByValue(arr, key) {
    // Use the filter method to create a new array with objects containing the specified key
    return arr.filter(function(obj) {
        return obj.hasOwnProperty(key);
    });
}

/*

Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter 
or undefined if the value is not found in the array.

*/

function find(arr, value) {
    // Use the filter method to find the first element with the specified value
    return arr.filter(function(element) {
        return element === value;
    })[0];
}


/*

Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

*/

function findInObj(arr, key, value) {
    // Use the filter method to find the first object with the specified key and value
    return arr.filter(function(obj) {
        return obj[key] === value;
    })[0];
    
}

/*

Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.

*/

function removeVowels(str) {
    // Convert the string to lowercase and split it into an array of characters
    let characters = str.toLowerCase().split('');
    
    // Use the filter method to remove vowels
    let filteredCharacters = characters.filter(function(char) {
        // Return true if the current character is not a vowel
        return !'aeiou'.includes(char);
    });
    
    // Join the filtered characters array back into a string and return it
    return filteredCharacters.join('');
}

/*

Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled
 (HINT - you can use map and fitler to double and then filter the odd numbers). 

*/

function doubleOddNumbers(arr) {
    // Use the filter method to filter out the odd numbers
    const oddNumbers = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    
    // Use the map method to double each odd number
    const doubledOddNumbers = oddNumbers.map(function(num) {
        return num * 2;
    });
    
    // Return the array with doubled odd numbers
    return doubledOddNumbers;
}