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

