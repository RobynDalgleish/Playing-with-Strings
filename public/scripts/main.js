'use strict';

// I was experiementing with making this object oriented programing. I left my commented-out code to show where I got:
// const sentenceBreakdown = {};
// sentenceBreakdown.events = function() {


// function to grab the value of the text inputed, and to alert the user if the submit button is pushed and nothing has been inputted.
function myFunction() {
    // const myBtn = document.getElementById("myBtn");
    var str = document.getElementById("theInput").value;
    if (!str) {
        alert('Please, type something to analyze.');
        return;
    }

    // convert inputed characters all to lowercase:
    var toLowercase = str.toLowerCase();
    // regex to remove spaces and punctuation:
    var removeSpaces = /\s/g;
    var removePunct = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    var cleanStr = toLowercase.replace(removeSpaces, '').replace(removePunct, '');
    console.log('this is after removing spaces, and punctuation: ', cleanStr);
    // I am turning the string into an array using the split method:
    var splitStr = cleanStr.split("");
    console.log('result of .split: ', splitStr);

    // The following commented code was the start of making a fun "loading" indicator:
    // document.getElementById("preamble").innerHTML = 'We are deciphering the sentence ingredients; one moment, please...';
    // document.getElementById("preamble").style.color = "#000";

    // Using the sort method to put the characters into alphabetical order for UX reasons
    var sortedArray = splitStr.sort();
    console.log('result of .sort: ', sortedArray);

    // I am using the reduce method to reduce an array to a single value, so it will count the total instance of each character

    // Notes to myself, describing my process - I thought you might appreciate in this testing context:

    // obj is an empty object that will store the totals, and item is each individual item in the array. There’s an empty object at the end of the declaration, right before the final semicolon. That’s the empty object.

    // there’s an if statement that reads: if the item is not in the object array, then give it a value of 0, because there is nothing to count or tally.

    // the else is: if there is an item in the object already and there is another instance, add 1(item++)

    // Finally, return the object that has the new totals in it

    var result = sortedArray.reduce(function (obj, item) {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

    // this doesn't print to the page because it is a complex object. In the future, I would google how to output my current text index (ex: 'a' and then the value), but it works in the console.
    document.getElementById("result").innerHTML = obj[item];
    console.log(result);
};

// more object oriented escapades :) :
// };
// sentenceBreakdown.init = function() {
//     sentenceBreakdown.events();
// };

// sentenceBreakdown.init();


// I asked a friend about recursion, I don't have too much experience with it, but I got to the code below with him. It is the counting function recursively. I am continuing to go over it to learn:

// function countCharsRecursive(arrayOfChars) {
//     if (arrayOfChars.length === 0) {
//         return {}
//     }

//     else if (arrayOfChars.length === 1) {
//         return { [arrayOfChars[0]]: 1 }
//     }

//     else {
//         let rest = countCharsRecursive(arrayOfChars.slice(1, arrayOfChars.length));

//         if (rest[arrayOfChars[0]]) {
//             rest[arrayOfChars[0]]++
//         }

//         return Object.assign({ [arrayOfChars[0]]: 1 }, rest);
//     }
// }


// In the future, I would like to add much more to the styles, as well as learn more about traditional unit testing. Thank you so much for this challenge :) . It was alot of fun :) .