// function logBetween(lowNum, highNum) {
//     let arr = [];
//     for(let i = lowNum; i <= highNum; i += 1) {
//         arr.push(i);
//     }

//     return arr;
// }

// console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
// console.log(logBetween(14, 6));  // => []
// console.log(logBetween(4, 6));  // => [4, 5, 6]

// function logBetweenStepper(min, max, step) {
//     let arr = [];
//     for(let i = min; i <= max; i += step) {
//         arr.push(i);
//     }

//     return arr;
// }

// console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
// console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]


// function printReverse(min, max) {
//     let arr = [];

//     for(let i = max - 1; i > min; i -= 1) {
//         arr.push(i);
//     }

//     return arr;
// }




// console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
// console.log(printReverse(90, 94)) // => [93, 92, 91]


// function fizzBuzz(max) {
//     let arr = [];

//     for (let i = 0; i < max; i += 1) {
//         if (i % 15 === 0) {
//             continue;
//         } else if(i % 3 === 0 || i % 5 === 0) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }



// console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

// function isPrime(number) {

//     for (let i = 2; i < number; i += 1) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }


// console.log(isPrime(2));  // => true
// console.log(isPrime(10));  // => false
// console.log(isPrime(11));  // => true
// console.log(isPrime(9));  // => false
// console.log(isPrime(2017));  // => true

// function maxValue(array) {
//     let max = array[0];
//     if(array.length === 0) return null;
//     for(let i = 0; i < array.length; i += 1) {
//         if(array[i] > max) {
//             max = array[i];
//         }
//     }

//     return max;
// }




// console.log(maxValue([12, 6, 43, 2]));  // => 43
// console.log(maxValue([]));  // => null
// console.log(maxValue([-4, -10, 0.43]));  // => 0.43


// function factorArray(array, number) {
//     let arr = [];
//     for (let i = 0; i < array.length; i += 1) {
        
//         if (number % array[i] == 0) {
            
//             arr.push(array[i]);
//         }
//     }

//     return arr;
// }



// console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
// console.log(factorArray([2,3,4,5,6],35)) // => [5]
// console.log(factorArray([10,15,20,25],5)) // => []

// function oddRange(end) {
//     let arr = [];
//     for(let i = 0; i <= end; i += 1) {
//         if (i % 2 !== 0) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }


// console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]


// function reverseHyphenString(string) {
//     return string.split('-').reverse().join('-')
// }



// console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
// console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"


// function intersect(arr1, arr2) {
//     let arr = [];

//     for (let i = 0; i < arr1.length; i += 1) {
//         for (let j = 0; j < arr2.length; j += 1) {
//             if (arr1[i] == arr2[j]) {
//                 arr.push(arr1[i]);
//             }
//         }
//     }

//     return arr;
// }



// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z']))// => []

// function mirrorArray(array) {
//     return [...array, ...array.reverse()]
// }





// console.log(mirrorArray([1,2,3]));
//   // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd']));
//   // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// function removeVowel(word) {
//     let vowel = "aeiou";
//     let newWord = "";
//     for (let i = 0; i < word.length; i += 1) {
//         if (vowel.includes(word[i])) {
//             continue;
//         } else {
//             newWord += word[i];
//         }
//     }

//     return newWord;

// }

// console.log(removeVowel("wordi"));

// function abbreviate(sentence) {
//     let strArr = [];
//     let word = sentence.split(" ");

//     for(let i = 0; i < word.length; i += 1) {
        
//         if(word[i].length > 4) {
//             strArr.push(removeVowel(word[i]));
//         } else {
//             strArr.push(word[i]);
//         }

        
//     }

//     return strArr.join(' ');;
// }




// console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'


// function adults(people) {
//     let arr = [];

//     for (let person of people) {
        
//         if(person.age >= 18) {
//             arr.push(person.name);
//         }
//     }

//     return arr;
// }




// const ppl = [
//     {name: 'John', age: 20},
//     {name: 'Jim', age: 13},
//     {name: 'Jane', age: 18},
//     {name: 'Bob', age: 7}
//   ];
  
//   console.log(adults(ppl)); // => [ 'John', 'Jane' ]




// function countScores(people) {

//     let obj = {};

    
//     people.map(person => {
       
//         if(obj.hasOwnProperty(person.name) == false) {
//             obj[person.name] = person.score
//         } else {
//             obj[person.name] += person.score;
//         }
        
        
//     });

//     return obj;
// }






// const ppl = [
//     { name: "Anthony", score: 10 },
//     { name: "Fred", score : 10 },
//     { name: "Anthony", score: -8 },
//     { name: "Winnie", score: 12 }
//   ];
//   console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
  
//   // Example 2
//   const peeps = [
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 }
//   ];
  
//   console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

// function isPrime(number) {

//     for (let i = 2; i < number; i += 1) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function firstNPrimes(n) {

//     let arr = [];
//     let count = 2;
//     while(arr.length < n) {
//         if(isPrime(count)) {
//             arr.push(count);
//         }
//         count += 1;
//     }
//     return arr;
// }




// console.log(firstNPrimes(0));  // => []
// console.log(firstNPrimes(1));  // => [2]
// console.log(firstNPrimes(4));  // => [2, 3, 5, 7]




// function peakFinder(arr) {
//     let arrs = [];

//     for (let i = 0; i < arr.length; i += 1) {
//         if((arr[i - 1] == undefined && arr[i + 1] < arr[i]) || (arr[i - 1] < arr[i] && arr[i + 1] == undefined)) {
//             arrs.push(i);
//         } else if(arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//             arrs.push(i);
//         }
//     }

   
//     return arrs;
// }




// console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]


// function divisibleByThreePairSum(arr) {
//     let arrs = [];
//     for(let i = 0; i < arr.length; i += 1) {
//         let nArr = [];
//         for(let j = i + 1; j < arr.length; j += 1 ) {
            
//             if ((arr[i] + arr[j]) % 3 == 0) {
//                 arrs.push([i, j]);
//             }
//         }
//         if(nArr.length == 0) {
//             continue;
//         }
//         // arrs.push(nArr);
//         // nArr= [];
//     }

//     return arrs;
// }







// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1) // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) // => [[1, 3]]


// function zipArray(arr1, arr2) {

//     let arr = [];
//     for(let i = 0; i < arr1.length; i += 1) {
//         arr.push([arr1[i], arr2[i]]);
//     }
//     return arr;

// }

// const a1 = ['a', 'b', 'c', 'd'];
// const a2 = [10, 20, 30, 40];

// const result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]


// function twoDimensionalTotal(arr) {

//     let sum = 0;

//     for(let i = 0; i < arr.length; i += 1) {
//         for(let j = 0; j < arr[i].length; j += 1) {
//             sum += arr[i][j];
//         }
//     }
//     return sum;
// }





// const arr1 = [
//     [5, 2, 5, 3],
//     [12, 13],
//   ];
  
//   console.log(twoDimensionalTotal(arr1));  // => 40
  
//   const arr2 = [
//     [2],
//     [1, 9],
//     [1, 1, 1]
//   ]
  
//   console.log(twoDimensionalTotal(arr2));  // => 15



// function countInnerElement(array) {
//     let obj = {};
//     for(let i = 0; i < array.length; i += 1) {
//         for(let j = 0; j < array[i].length; j += 1) {
//             if(obj[array[i][j]] == undefined) {
//                 obj[array[i][j]] = 1;
//             } else {
//                 obj[array[i][j]] += 1;
//             }
//         }
        
//     }

//     return obj;
// }



// const arr1 = [
//     [1, 2, 4, 5],
//     [2, 7, 4],
//     [1, 4, 5, 2, 7]
//   ]
  
//   console.log(countInnerElement(arr1))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
  
//   const arr2 = [
//     ['a','b','c','d'],
//     ['a','b'],
//     ['a','c','d','a']
//   ]
  
//   console.log(countInnerElement(arr2))  // => {a: 4, b: 2, c: 2, d: 2}


// function twoDiff(arr) {
//     let arrs = [];
//     for(let i = 0; i < arr.length; i += 1) {
//         let nArr = [];
//         for(let j = i + 1; j < arr.length; j += 1 ) {
            
//             if ((arr[i] - arr[j]) == 2 || (arr[j] - arr[i]) == 2) {
//                 arrs.push([i, j]);
//             }
//         }
//         if(nArr.length == 0) {
//             continue;
//         }
//         // arrs.push(nArr);
//         // nArr= [];
//     }

//     return arrs;
// }




// console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([]))  // => []

// function arrayDiff(arr1, arr2) {
//     let arr = [];
//     for(let i = 0; i < arr1.length; i += 1) {

//         if(arr2.includes(arr1[i])) {
//             continue;
//         } else {
//             arr.push(arr1[i]);
//         }
//     }

//     return arr;
// }




// const array1 = [1, 23, 2, 43, 3, 4]
// const array2 = [3, 23]
// console.log(arrayDiff(array1, array2))  // => [1, 2, 43 ,4]

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// console.log(arrayDiff(array3, array4))  // => ['a', 'ab', 'c', 'c']


// function valueCounter(obj, name) {

//     let count = 0;

//     for (let key in obj) {
//         if (obj[key] == name) {
//             count += 1;
//         }
//         // console.log(key);
//     }

//     return count;
// }






// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// console.log(valueCounter(obj1, 'Anne'))  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// console.log(valueCounter(obj2, 88))  // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// console.log(valueCounter(pairs, 'Roman'))  // => 2


// function elementCount(array) {
//     let obj = {};

//     for(let i = 0; i < array.length; i += 1) {
//         if(obj[array[i]]) {
//             obj[array[i]] += 1;
//         } else {
//             obj[array[i]] = 1
//         }
//     }

//     return obj;
// }


// console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

// function isPrime(number) {

//     for (let i = 2; i < number; i += 1) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }


// function nextTwoPrimes(num) {
//     let arr = [];

//     for (let i = num + 1; i < num * (num * 2) ; i += 1) {
//         if(arr.length < 2) {
//             if(isPrime(i)) {
//                 arr.push(i);
//             }
//         } else {
//             break;
//         }
//     }

//     return arr;
// }







// console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
// console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
// console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
// console.log(nextTwoPrimes(97));  // => [ 101, 103 ]



// function pairProduct(arr, num) {
//     let arrs = [];
//     for(let i = 0; i < arr.length; i += 1) {
//         let nArr = [];
//         for(let j = i + 1; j < arr.length; j += 1 ) {
            
//             if ((arr[i] * arr[j]) == num) {
//                 arrs.push([i, j]);
//             }
//         }
//         if(nArr.length == 0) {
//             continue;
//         }
        
//     }

//     return arrs;
// }




// console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
// console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
// console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]


// function twoDimensionalSize(array) {
//     let count = 0;
//     for(let i = 0; i < array.length; i += 1) {
//         for(let j = 0; j < array[i].length; j += 1) {
//             count += 1;
//         }
//     }

//     return count;
// }





// const arr1 = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
//   ];
//   console.log(twoDimensionalSize(arr1));  // => 9
  
//   const arr2 = [
//     ['a'],
//     ['b', 'c', 'd', 'e']
//   ];
//   console.log(twoDimensionalSize(arr2));  // => 5


// function longWordCount(string) {
//     let count = 0;
//     let strArr = string.split(" ");
//     for(let i = 0; i < strArr.length; i += 1) {
//         if (strArr[i].length > 7) {
//             count += 1;
//         }
//     }

//     return count;
// }



// console.log(longWordCount(""));  // => 0
// console.log(longWordCount("short words only"));  // => 0
// console.log(longWordCount("one reallylong word"));  // => 1
// console.log(longWordCount("two reallylong words inthisstring"));  // => 2
// console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
// console.log(longWordCount("seventy schfifty five"));  // => 1


// function lcm(num1, num2) {
//     for(let i = 2; i < num1 * num2 + 1; i += 1) {
//         if(i % num1 === 0 && i % num2 === 0) {
//             return i;
//         }
//     }
// }



// console.log(lcm(2, 3));  // => 6
// console.log(lcm(6, 10));  // => 30
// console.log(lcm(24, 26));  // => 312


function hipsterfyWord(word) {
    let str = word.split("").reverse();
    for(let i = 0; i < str.length; i += 1) {
        if("aeiou".includes(str[i]) || "AEIOU".includes(str[i])) {
            str.splice(i, 1);
            break;
        }

    }

    return str.reverse().join('');

}





// console.log(hipsterfyWord('proper')) // => 'propr'
// console.log(hipsterfyWord('tonic')) // => 'tonc'
// console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
// console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'



// function hipsterfy(sentence) {

//     return sentence.split(' ').map(word => hipsterfyWord(word)).join(" ");


// }





// console.log(hipsterfy("proper"));  // => "propr"
// console.log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
// console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
// console.log(hipsterfy("runner anaconda"));  // => "runnr anacond"
// console.log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"


// function objectToString(obj) {
//     let str = "";

//     for(let key in obj) {
//         str += key.repeat(obj[key]);
//     }

//     return str;
// }





// console.log(objectToString({ a : 2, b: 4, c: 1 })) // => 'aabbbbc'
// console.log(objectToString({ b: 1, o: 2, t: 1 })) // => 'boot'

// function shortestWord(sentence) {
//     let nSentence = sentence.split(" ");
//     let shortestWord = nSentence[0];

//     for(let i = 0; i < nSentence.length; i += 1) {
//         if(nSentence[i].length < shortestWord.length) {
//             shortestWord = nSentence[i];
//         }
//     }

//     return shortestWord;

// }



// console.log(shortestWord('app academy is cool')) // => 'is'
// console.log(shortestWord('programming bootcamp')) // => 'bootcamp'


// function greatestCommonFactor(num1, num2) {
//     for(let i = num1 * num2; i > 0; i -= 1) {
//         if(num1 % i === 0 && num2 % i === 0) {
//             return i;
//         }
//     }
// }




// console.log(greatestCommonFactor(15, 25)) // => 5
// console.log(greatestCommonFactor(16, 24)) // => 8
// console.log(greatestCommonFactor(7, 11)) // => 1


// function isPassing(array) {
//     let avg = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         avg += array[i].score;
//     }


//     return avg / array.length > 70;
// }






// const assessments1 = [
//     { number: 1, score: 60 },
//     { number: 2, score: 90 },
//     { number: 3, score: 80 },
//     { number: 4, score: 100 },
//     { number: 5, score: 85 }
//   ];
  
//   console.log(isPassing(assessments1)) // => true
//   const assessments2 = [
//     { number: 1, score: 60 },
//     { number: 2, score: 20 },
//     { number: 3, score: 45 }
//   ];
  
//   console.log(isPassing(assessments2)) // => false




// function valueConcat(array, obj) {
//     let arr = [];
//     let nextArr = []
    

//     for(let i = 0; i < array.length; i += 1) {

//         if(obj.hasOwnProperty(array[i])) {
//             arr.push(array[i] + obj[array[i]] );
//         } else {
//             arr.push(array[i]);
//         }
        
//     }

//     return arr;
    
// }


// const arr = ['alex', 'maurice', 'meagan', 'ali'];
// const obj = { alex: 'bronca', ali: 'harris' }
// console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]



// function threeInARow(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         if(array[i - 1] === array[i] && array[i] === array[i + 1]) {
//             return true;
//         }
//     }

//     return false;
// }






// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;



// function variableNameify(arr) {

//     str = [arr[0].toLowerCase()];

//     for (let i = 1; i < arr.length; i += 1) {
        
//         let firstLetters = arr[i].toLowerCase().split("").splice(0, 1).join();
//         let lastPart = arr[i].toLowerCase().split("").splice(1).join('');
//         str.push(firstLetters.toUpperCase() + lastPart);
//     }

//     return str.join('');
// }





// console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
// console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
// console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'



// function threeIncreasing(arr) {
//     for(let i = 0; i < arr.length; i += 1 ) {
//         if(arr[i + 1] == arr[i] + 1 && arr[i + 2] == arr[i] + 2) {
//             return true;
//         }
//     }

//     return false;
// }




// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false


// function reverse2D(arr) {
//     let str = "";
//     for(let i =  arr.length - 1; i >= 0;  i -= 1) {
//         for(let j = arr[i].length - 1; j >= 0; j -= 1) {
            
//             str += arr[i][j];
//         }


        
//     }

//     return str;
// }






// const arr1 = [
//     ['a', 'b', 'c', 'd'],
//     ['e', 'f'],
//     ['g', 'h', 'i']
//   ];
  
//   console.log(reverse2D(arr1)) // => 'ihgfedcba'
//   const arr2 = [
//     ['Julian', 'Matt', 'Mike'],
//     ['Oscar', 'Patrick']
//   ];
//   console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'



// function reverb(word) {
//     let str = "";

//     for(let i = word.length - 1; i >- 0; i -= 1) {
//         if("aeiou".includes(word[i])) {
//             let restWord = word.slice(i);
//             return word + restWord;
//         }
//     }

//     return word;
// }




// console.log(reverb('running'));  // => 'runninging'
// console.log(reverb('wild'));  // => 'wildild'
// console.log(reverb('debugged'));  // => 'debuggeded'
// console.log(reverb('my'));  // => 'my'


// function countRepeats(word) {

//     let obj = {};
//     let count = 0;
//     for (let i = 0; i < word.length; i += 1) {
//         if(obj[word[i]]) {
//             obj[word[i]] += 1

//         } else {
//             obj[word[i]] = 1;
//          }
//     }

//     for (let key in obj) {
//         if(obj[key] > 1) {
//             count += 1;
//         }
//     }

//     return count;
// }

// console.log(countRepeats('calvin')); // => 0
// console.log(countRepeats('caaaalvin')); // => 1
// console.log(countRepeats('pops')); // => 1
// console.log(countRepeats('mississippi')); // => 3
// console.log(countRepeats('hellobootcampprep')); // => 4




// function pairsToString(array) {
//     let obj = {};
//     let str = ""
//     for(let i = 0; i < array.length; i += 1) {
        
//         str += array[i][0].repeat(array[i][1])
    
//     }

//     return str;
// }


// const array1 = [
//     ['a', 3],
//     ['b', 1],
//     ['c', 2]
//   ];
//   console.log(pairsToString(array1));  // => 'aaabcc'
  
//   const array2 = [
//     ['f', 1],
//     ['o', 2],
//     ['d', 1],
//     ['!', 1]
//   ];
//   console.log(pairsToString(array2));  // => 'food!'


// function countAdjacentSums(array, num) {
//     let count = 0;
//     for(let i = 0; i < array.length; i += 1) {
//         for(let j = i + 1; j < array.length; j += 1) {
//             if(array[i] + array[j] == num) {
//                 count += 1;
//             }
//         }
//     }
//     return count;
// }


// console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
// console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3


// function signFlipCount(array) {
//     let count = 0;

//     for (let i = 0; i < array.length; i += 1) {
//         if((array[i] > 0 && array[i+1]< 0) || (array[i] < 0 && array[i + 1] > 0) ) {
//             count += 1;
//         }
//     }

//     return count;
// }



// console.log(signFlipCount([5, 6, 10, 3])); // => 0
// console.log(signFlipCount([-12, 0, -3, -5])); // => 0
// console.log(signFlipCount([-12, 10, -3, -5])); // => 2
// console.log(signFlipCount([1, -2, -3, -4])); // => 1
// console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3


// function powerSequence(num1, num2) {
//     let arr = [num1];

//     for (let i = 1; i < num2; i += 1) {
//         if(arr.length < 1) {
//             arr.push(arr[i] * arr[i]);
//         } else {
//             arr.push(arr[i - 1] * num1);
//         }
        
//     }


//     return arr;
// }




// console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
// console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
// console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]


// function remDoubles(word) {
//     let arr = [];

//     for(let i = 0; i < word.length; i += 1) {
//         if( word[i] !== word[i + 1]) {
//             arr.push(word[i]);
//         } else {
//             continue;
//         }

//     }

//     return arr.join('');
// }


// function collapseString(sentence) {
//     let sentArr = sentence.split(' ');
    
//     let arr = [];

//     for (let i = 0; i < sentArr.length; i += 1) {
//         if(sentArr[i].length > 0) {

//             arr.push(remDoubles(sentArr[i]));
//         }
//     }
//     return arr.join(' ');
// }


// console.log(collapseString('apple')); // => 'aple'
// console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
// console.log(collapseString('hello   app academy')); // => 'helo ap academy'


// function oddWordsOut(sentence) {
    

//     return sentence.split(' ').filter(word => word.length % 2 == 0).join(' ');

// }


// console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
// console.log(oddWordsOut('what is the answer'));  // => 'what is answer'


// function mindPsAndQs(sentence) {

//     let count = 0;
//     let streak = 0;

//     for (let i = 0; i < sentence.length; i += 1) {
//         if(sentence[i] == "P" || sentence[i] == "Q") {
//             count += 1;
//             streak = count;
//         } else {
            
            
//             count = 0;
           
//         }
        
//     }
//     return streak;

// }


// console.log(mindPsAndQs('BOOTCAMP'));  // => 1
// console.log(mindPsAndQs('APCDQQPPC'));  // => 4
// console.log(mindPsAndQs('PQPQ'));  // => 4
// console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5



// function commonFactors(num1, num2) {
//     let arr = [];

//     for (let i = 0; i < num2; i += 1) {
//         if(num1 % i == 0 && num2 % i == 0) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }


// console.log(commonFactors(12, 50));  // => [ 1, 2 ]
// console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
// console.log(commonFactors(11, 22));  // => [ 1, 11 ]
// console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]




// function isPrime(number) {

//     for (let i = 2; i < number; i += 1) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function commonPrimeFactors(num1, num2) {
//     let arr = [];

//     for (let i = 2; i < num2; i += 1) {
//         if(num1 % i == 0 && num2 % i == 0) {
//             if(isPrime(i)) {
//                 arr.push(i);
//             }
            
//         }
//     }

//     return arr;
// }


// console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
// console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
// console.log(commonPrimeFactors(11,22));  // => [ 11 ]
// console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]


// function splitHalfArray(array) {
//     let split = Math.floor(array.length / 2);
//     if(split % 2 !== 0) {
//         return [array.slice(0, split), array.slice(split)]
//     } else {
//         return [array.slice(0, split), array.slice(split + 1)]
//     }
    
// }


// console.log(splitHalfArray([1, 2, 3, 4, 5]));
//   // => [ [ 1, 2 ], [ 4, 5 ] ]

// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
//   // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

// function threeUniqueVowels(word) {
//     let arr = word.split('');
//     let nSet = new Set(arr);
//     let finArr = [...nSet];
//     let count = 0;
//     for (let i = 0; i < finArr.length; i += 1) {
//         if("aeiou".includes(finArr[i])) {
//             count += 1;
//         }
//     }

//     return count >= 3;
// }


// console.log(threeUniqueVowels('delicious'));  // => true
// console.log(threeUniqueVowels('the bootcamp'));  // => true
// console.log(threeUniqueVowels('bootcamp'));  // => false
// console.log(threeUniqueVowels('dog'));  // => false
// console.log(threeUniqueVowels('go home'));  // => false







vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'