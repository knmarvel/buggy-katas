// Buggy Katas

// 101 Dalmatians - squash the bugs, not the dogs! from https://www.codewars.com/kata/56f6919a6b88de18ff000b36

// Your friend has been out shopping for puppies (what a time to be alive!)... 
// He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond,
// depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!

function howManyDalmations(numer :
  
    var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    
    var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
    
  return respond



// Testing
console.assert(howManyDalmatians(26) === "More than a handful!");
console.assert(howManyDalmatians(8) === "Hardly any");
console.assert(howManyDalmatians(14) === "More than a handful!");
console.assert(howManyDalmatians(80) === "Woah that's a lot of dogs!");
console.assert(howManyDalmatians(100) === "Woah that's a lot of dogs!");
console.assert(howManyDalmatians(101) === "101 DALMATIANS!!!");