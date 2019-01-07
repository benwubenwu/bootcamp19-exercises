const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(' ');
};

const reverse = str => {
  // TODO - write a function which reverses the string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--)
  {
    newString = newString + str[i]; 
  }
  return newString;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  // const result = [];
  // for (let i = 0; i < arr.length; i++)
  // {
  //   if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
  //   {
  //     result.push(arr[i]);
  //   }
  // }
  // return result;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
    {
      arr.splice(i,1);
    }
  }
  return arr;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let product = 1;
  for (let i = num; i > 0; i--)
  {
    product = product * i;
  }
  return product;
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  const results = [arr1.length];
  if (arr1.length !== arr2.length)
  {
    return -1;
  }
  else
  {
    for (let i = 0; i < arr1.length; i++)
    {
      results[i] = [arr1[i],arr2[i]];
    }
  }
  return results;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  arr1 = [];
  arr2 = [];
  for (let i = 0; i < arr.length; i++)
  {
    arr1.push(arr[i,0]);
    arr2.push(arr[i,1]);
  }
  return arr1;
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:
test = ["a","b","a","c"]
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
// [1,5],
// [2,3],
// [3,1]



assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
