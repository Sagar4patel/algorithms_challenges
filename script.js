
//function to add all elements within array including strings
const summation = sumMix = (x) => {
    let sum = 0; // sum variable
    for(let i = 0; i < x.length; i++) { // loop through array
      sum+= parseInt(x[i]);   // changing index value to number and adding to sum
    }
    return sum;
  }



//function to find first nonconsectuive number in an array
const first = function firstNonConsecutive (arr) {
    for(let i = 1; i < arr.length; i++) { // loop through array
      if(arr[i] != arr[i-1]+1) { // checking if number is consectuive or not
        return arr[i];
      }  
    }
  return null;
}



const wordLength = function findLongestWordLength(str) {
  let string = str.split(' ');
  for(let i = 0; i < string.length; i++) {
      return string.length[i];
  }
}






function sumAll(arr) {
  let sum = 0;
  // empty array for range
  let newArr = [];
  // loop through array to get values up to max range;
  for(let i = arr[0]; i <= arr[1]; i++){
    newArr.push(i);
  }

  // loop through array to get values to minumun range
  for(let k = arr[0]; k >= arr[1]; k--) {
    newArr.push(k);
  }
  // loop through new array and add each i
  for(let j = 0; j < newArr.length; j++) {
    sum += newArr[j];
  }
  return sum;
  
}

console.log(sumAll([5,1]));


function largestOfFour(arr) {
    let newArr = [];
    // loop through the array
    for(let i = 0; i < arr.length; i++) {
      // create temperary max to compare each index to
      let tempMax = arr[i][0];
      // loop through array within array
      for(let j = 0; j < arr[i].length; j++) {
        // comparing each index value to temporary max and setting it
        let currentElement = arr[i][j];
        if(currentElement >= tempMax) {
            tempMax = currentElement;
        }
      }
      // push temporary max into the new array and iterate to the second array
      newArr.push(tempMax);
    }
    return newArr;
  }
  
  

function repeatStringNumTimes(str, num) {
  let newStr = '';
  // loop through number
  for(let i = 1; i <= num; i++) {
    // if num is less than 0 new string is empty
    if(num < 0) {
      newStr = '';
    // add str to new string
    } else {
        newStr += str;
    }
  }
  return newStr;

}



function truncateString(str, num) {
  let dotStr = '...';
  let newStr =  str.split('').splice(0,num).join('');
  if(num >= str.length) {
    return str;
  } else {
    return newStr.concat(dotStr);
  }
}




function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

function titleCase(str) { 
  let strSplit = str.toLowerCase().split(' ');
  let upperCase = strSplit.map(function(elem) {
      return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
  });
  return upperCase.join(' ');
}




function frankenSplice(arr1, arr2, n) {
  let sliceArr =  arr2.slice(0, n);
  let sliceDouble = arr2.slice(n);
  for(let i = 0; i < arr1.length; i++) {
      sliceArr.push(arr1[i]);
  }
  for(let j = 0; j < sliceDouble.length; j++) {
    sliceArr.push(sliceDouble[j]);
  }

  return sliceArr;
}




function bouncer(arr) {
  return arr.filter(Boolean);
}



function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}



function confirmEnding(str, target) {
  if(str.slice(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}



function digitize(n) {
  let newArr = n.toString().split('').reverse();
  return newArr.map(x => +x);
  
}



function reverseNumber(n) {
  if( n < 0) {
    let negValue = Math.abs(n);
    let negValue2 = negValue.toString().split('').reverse().join('');
    return -Math.abs(negValue2);
    
  } else {
    let value =  n.toString().split('').reverse().join('');
    return +value;
  }
}


function sumPrimes(num) {
    let newArr = [];
    for(let i = 2; i <= num; i++) {
        newArr.push(i);
    }
    newArr = newArr.filter((number) => {
        for(let j = 2; j <= Math.sqrt(number); j++) {
            if(number % j == 0) {
                return false;
            } 
        }
        return true;
    });
    return newArr;
    
  }
  
  console.log(sumPrimes(10));


function fearNotLetter(str) {
    let missing = '';
    let strSplit = str.split('');
    for(let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i].charCodeAt();
    }
    for(let j = 0; j < strSplit.length; j++) {
        if(strSplit[j]+1 !== strSplit[j+1]) {
            missing = strSplit[j]+1;
            break;
        }    
    }
    if(String.fromCharCode(missing) == '{') {
      return undefined;
    } else {
      return String.fromCharCode(missing);
    }
  }

  

function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            newArr.push(arr2[i]);
        }
    }
    for(let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
    
  }
  









var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];



function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  let newArgs = args.slice(1);
  return arr.filter(item => !newArgs.includes(item));
  
}





function pairElement(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] == 'A') {
      newStr += str[i] + 'T';
    } else if (str[i] == 'T') {
      newStr += str[i] +'A';
    } else if (str[i] == 'C') {
      newStr += str[i] + 'G';
    } else if (str[i] == 'G') {
      newStr += str[i] + 'C';
    } 
  }
  
  let joy = newStr.match(/.{1,2}/g);
  
  for(let j = 0; j < joy.length; j++) {
    joy[j] = joy[j].split('');
  }
  return joy;
  

}


function myReplace(str, before, after) {
  let strSplit = str.split(' ');
  for(let i = 0; i < strSplit.length; i++) {
    if(strSplit[i] == before) {
      if(before[0] == before[0].toLowerCase()) {
        let sliceStr = after.slice(1);
        strSplit[i] = strSplit[i].replace(before, after[0].toLowerCase() + sliceStr);
      }
      if(before[0] == before[0].toUpperCase()) {
        let sliceStr = after.slice(1);
        strSplit[i] = strSplit[i].replace(before, after[0].toUpperCase() + sliceStr);
      } else {
        strSplit[i] = strSplit[i].replace(before, after);
      } 
    }
  }
  return strSplit.join(' ');
}



function sumFibs(num) {
  let a = 0;
  let b = 1;
  let c = 0;
  let newArr = [1];
  for(let i = 2; i <= num; i++){
    c = a + b;
    if(c > num) {
      break;
    }
    a = b;
    b = c;
    newArr.push(c);
  }
  
  return newArr.filter(x => {
     return x % 2 != 0;
  }).reduce((x,y) => {
    return x + y;
  });
  
  
}




function uniteUnique(arr) {
  for(let i = 1; i < arguments.length; i++) {
    arr = arr.concat(arguments[i]);
  }
  return [...new Set(arr)];
}


function convertHTML(str) {
  let strSplit =  str.split('');
  for(let i = 0; i < strSplit.length; i++) {
    if(strSplit[i] == '&') {
      strSplit[i] = strSplit[i].replace('&', '&amp;');
    }
    if(strSplit[i] == '<') {
      strSplit[i] = strSplit[i].replace('<', '&lt;');
    }
    if(strSplit[i] == '>') {
      strSplit[i] = strSplit[i].replace('>', '&gt;');
    }
    if(strSplit[i] == `"`) {
      strSplit[i] = strSplit[i].replace(`"`, '&quot;');
    }
    if(strSplit[i] == `'`) {
      strSplit[i] = strSplit[i].replace(`'`, '&apos;');
    }
  }
  return strSplit.join('');
  
}



function binaryAgent(str) {
  let strSplit = str.split(' ');
  for(let i = 0; i < strSplit.length; i++) {
    strSplit[i] = parseInt(strSplit[i], 2);
  }
  for(let j = 0; j < strSplit.length; j++) {
    strSplit[j] = String.fromCharCode(strSplit[j]);
  }
  return strSplit.join('');
}




function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter(function(obj) {
    for(let key of keys) {
      if(!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      } 
    }
    return true;
  });
}




function truthCheck(collection, pre) {
   let booleanArr = collection.map(function(obj) {
    if(obj[pre]) {
      return true;
    }
  });
  let count = 0;
  for(let i = 0; i < booleanArr.length; i++) {
    if(booleanArr[i] == true) {
      count++;
    }
  }
  if(count == booleanArr.length) {
    return true;
  } else {
    return false;
  }
}





function steamrollArray(arr) {
  return arr.toString().split(',').map(function(x) {
    if(x == '[object Object]') {
      return {};
    } else if(isNaN(x)) {
      return x;
    } else {
      return Number(x);
    }
  }).filter(x => {
    if(x == []) {
      return false;
    } else {
      return true;
    }
  })
}



function dropElements(arr, func) {
  let newArr = arr.slice();
  for(let i = 0; i < newArr.length; i++) {
    if(func(newArr[i]) == false) {
       newArr[i] = false;
    } else {
      newArr[i] = true;
    } 
  }
 
  let found = newArr.find(element => element === true);
  if(!found) {
    return [];
  } else {
     return arr.slice(newArr.indexOf(found));
  }
}






function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, ' ').toLowerCase().split(' ').join('-');
}





function translatePigLatin(str) {
  let strSplit = str.split('');
  let newArr;
  let firstPart;
  let regex = /[aeiou]/g;
  if(!regex.test(str)) {
    return str + 'ay';
  }
  
  if(str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u' ) {
    return str + 'way';
  } else {
    for(let i = 0; i < strSplit.length; i++) {
      if(strSplit[i] == 'a' || strSplit[i] == 'e' || strSplit[i] == 'i' || strSplit[i] == 'o' || strSplit[i] == 'u' ) {
        let index = strSplit.indexOf(strSplit[i]);
        firstPart = strSplit.slice(0, index);
        newArr = strSplit.slice(index);
        return newArr.concat(firstPart).join('') + 'ay';
      }     
    }
  }
}



var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  } 
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  } 
  this.getFullName = function() {
    return firstAndLast;
  };

  this.setFirstName = function(first) {
    let name = firstAndLast.split(' ');
    let firstName  =  firstAndLast.split(' ')[0];
    firstAndLast = name.map(x => {
      if(x == firstName) {
        return x.replace(firstName, first);
      } else {
        return x;
      }
    }).join(' '); 
  };
  this.setLastName = function(last) {
    let name = firstAndLast.split(' ');
    let lastName  =  firstAndLast.split(' ')[1];
    firstAndLast = name.map(x => {
      if(x == lastName) {
        return x.replace(lastName, last);
      } else {
        return x;
      }
    }).join(' '); 
  };

  this.setFullName = function(newName) {
    firstAndLast = newName;
     return firstAndLast;
  };  
  
};

var bob = new Person('Bob Ross');




function addTogether(x) {
  let args = Array.from(arguments);
  if(args.find(element => !Number.isInteger(element)) == undefined) {
    if(args.length > 1) {
      return args.reduce((a,b) => {
        return a + b;
      })
    } else {
      return function(y) {
        if(!Number.isInteger(y)) {
          return undefined;
        } else {
          return x + y;
        }
      }
   }
  } else {
    return undefined;
  }
}



function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let sum = earthRadius + arr[i].avgAlt;
    let inner = Math.pow(sum, 3) / GM;
    arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(inner));
    const {avgAlt, ...newData} = arr[i];
     newArr.push(newData);
  }
  return newArr;
}



function smallestCommons(arr) {
}

function findLCM(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let i = max;
  while(i % min !== 0) {
    i+=max;
  }
  return i;
}




function palindrome(str) {
  let regex = /[^a-z0-9]/g;
  let filterStr =  str.toLowerCase().replace(regex, '')
  let reverseStr = filterStr.split('').reverse().join('');
  
  if(reverseStr == filterStr) {
    return true;
  } else {
    return false;
  }
  
}



console.log(palindrome("A man, a plan, a canal. Panama "));



function convertToRoman(num) {
  let str = '';
  const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for(let i = 0; i <= rom.length; i++) {
    while(num >= array[i]) {
      str += rom[i];
      num -= array[i];
    }
  }
  return str;


  
 }

 
 console.log(convertToRoman(4));




function rot13(str) {
  const letters = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M'
  }
  let strSplit = str.split('');
  for(let i = 0; i < strSplit.length; i++) {
      for(let key in letters) {
        if(strSplit[i] == key) {
          strSplit[i] = letters[key];
          break;
        }
      }
  }
  return strSplit.join('');

}


console.log(rot13("SERR PBQR PNZC"));



function telephoneCheck(str) {
  let singleSplit = str.split('');
  let strSplit = str.split(' ');
  let count = 0;
  let secondCount = 0;
  let thirdCount = 0;
  for(let i = 0; i < singleSplit.length; i++) {
    if(!isNaN(singleSplit[i])) {
      count++;
    }
  }
  for(let j = 0; j < singleSplit.length; j++) {
    if(singleSplit[j] == '(' || singleSplit[j] == ')') {
      secondCount++;
    }
  }
  for(let k = 0; k < singleSplit.length; k++) {
    if(singleSplit[k] == '?' || singleSplit[k] == '!') {
      thirdCount++;
    }
  }

  if(strSplit.length >= 3) {
    if(strSplit[0] == '1') {
      return true;
    } else {
      return false;
    }
  } else if(singleSplit[singleSplit.length -1] == ')') {
    return false;
  } else if(thirdCount > 0) {
    return false;
  } else if(secondCount == 1) {
    return false;
  } else if(singleSplit[0] == '1') {
    return true;
  } else if(count == 10) {
    return true;
  } else if(count < 10 || count > 11) {
    return false;
  } else {
    return false;
  }   
}


function shorter_reverse_longer(a,b){
  if(a.length == b.length) {
    return b + reverseStr(a) + b;
  }
  if(a.length < b.length) {
    return a + reverseStr(b) + a;
  } else {
    return b + reverseStr(a) + b;
  }
}
  
function reverseStr(str) {
  return str.split('').reverse().join('');
}

function addBinary(a,b) {
  let number = a +b;
  return number.toString(2);
}



function smallEnough(a, limit){
  let count = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] <= limit) {
      count++;
    }
  }
  if(count == a.length) {
    return true;
  } else {
    return false;
  }
}


const flip=(d, a)=>{
  if(d == 'R') {
    return a.sort(function(z,f) {
      return z-f;
    });
  } else {
   return  a.sort(function(x,y) {
      return y-x;
    });
  }
}


function reverseBits (n) {
  return parseInt(n.toString(2).split('').reverse().join(''), 2);
  }



  function factorial(n){
    let newArr = [];
    for(let i = n; i >= 1; i--) {
      newArr.push(i);
    }
    if(n == 0) {
      return 1;
    } else {
      return newArr.reduce((a,b) => a * b) ;
    }
  }


  function twistedSum(n) {
    let newArr = [];
    let secondArray = [];
    let thirdArray = [];
    for(let i = 1; i <=n; i++) {
      if(i >= 10) {
        secondArray.push(i.toString().split('').map(x=>+x));
      } else {
        newArr.push(i);
      }
    }
    for(let j = 0; j < secondArray.length; j++) {
      for(let k = 0; k < secondArray[j].length; k++) {
        thirdArray.push(secondArray[j][k]);
      }
    }
    return newArr.concat(thirdArray).reduce((a,b) => a +b);
  }



  let person = {
    Monday : 'James',
    Tuesday : 'John',
    Wednesday : 'Robert',
    Thursday : 'Michael',
    Friday : 'William'
  }
function task(w, n, c) {    
    return `It is ${w} today, ${person[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
  }



  function accum(s) {
    let strSplit = s.split('');
    for(let i = 0; i < strSplit.length; i++) {
      strSplit[i] = strSplit[i].toUpperCase() + strSplit[i].toLowerCase().repeat(i);
    }
    return strSplit.join('-');
  }



  function switcheroo(x){
    let strSplit = x.split('');
    for(let i = 0; i < strSplit.length; i++) {
      if(strSplit[i] == 'a') {
        strSplit[i] = 'b';
      } else if(strSplit[i] == 'b') {
        strSplit[i] = 'a';
      }
    }
    return strSplit.join('');
  }



  function flyBy(lamps, drone){
    let newArr = lamps.split('').splice(drone.length);
    if(drone.length > lamps.length){
      for(let i = 1; i <= drone.length-1; i++) {
      newArr.unshift('o');
      } 
    } else {
      for(let i = 1; i <= drone.length; i++) {
      newArr.unshift('o');
      }
    }
    return newArr.join('');
  }


  function alternateCase(s) {
    let strSplit = s.split('');
    for(let i = 0; i < strSplit.length; i++) {
      if(strSplit[i] == strSplit[i].toUpperCase()) {
        strSplit[i] = strSplit[i].toLowerCase();
      } else {
        strSplit[i] = strSplit[i].toUpperCase();
      }
    }
    return strSplit.join('');
  }

  function findMissingLetter(array)
{
  for(let i = 0; i < array.length; i++) {
    if(array[i].charCodeAt() + 1 != array[i+1].charCodeAt()) {
       let char = array[i].charCodeAt() + 1;
        return String.fromCharCode(char);
    }
  }
}


function calc(x){
  let newArr = [];
  let regex = /7/g;
  let splitStr = x.split('');
  for(let i = 0; i < splitStr.length; i++) {
    newArr.push(splitStr[i].charCodeAt());
  }
  let total1 = newArr.join('').split('').map(x=>+x).reduce(myFunc);
  let total2= newArr.slice(0).join('').replace(regex, '1').split('').map(x=>+x).reduce(myFunc);
  return total1 - total2;
  
}


function myFunc(a, b) {
  return a + b;
}
























