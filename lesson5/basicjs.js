// Function definitions

// max Function
function max(a, b) {
    return a > b ? a : b;
}

// maxOfThree Function
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// isVowel Function
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// sum Function
function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// multiply Function
function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

// reverse Function
function reverse(str) {
    return str.split('').reverse().join('');
}

// findLongestWord Function
function findLongestWord(words) {
    return words.reduce((maxLen, word) => Math.max(maxLen, word.length), 0);
}

// filterLongWords Function
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// myFunctionTest
function myFunctionTest(expected, func) {
    const result = func();
    return result === expected ? "TEST SUCCEEDED" : `TEST FAILED. Expected ${expected} but got ${result}`;
}

// Tests
console.log("Expected output of max(20, 10) is 20 and " + myFunctionTest(20, function() { return max(20, 10); }));
console.assert(max(20, 10) === 20, 'max Test Case 1 Failed');

console.log("Expected output of maxOfThree(5, 4, 44) is 44 and " + myFunctionTest(44, function() { return maxOfThree(5, 4, 44); }));
console.assert(maxOfThree(5, 4, 44) === 44, 'maxOfThree Test Case 1 Failed');

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function() { return isVowel('a'); }));
console.assert(isVowel('a') === true, 'isVowel Test Case 1 Failed');

console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));
console.assert(sum([1, 2, 3, 4]) === 10, 'sum Test Case 1 Failed');

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));
console.assert(multiply([1, 2, 3, 4]) === 24, 'multiply Test Case 1 Failed');

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest('ratset gaj', function() { return reverse('jag testar'); }));
console.assert(reverse('jag testar') === 'ratset gaj', 'reverse Test Case 1 Failed');

console.log("Expected output of findLongestWord(['one', 'two', 'three', 'four']) is 5 and " + myFunctionTest(5, function() { return findLongestWord(['one', 'two', 'three', 'four']); }));
console.assert(findLongestWord(['one', 'two', 'three', 'four']) === 5, 'findLongestWord Test Case 1 Failed');

console.log("Expected output of filterLongWords(['one', 'two', 'three', 'four'], 3) is ['three', 'four'] and " + myFunctionTest(JSON.stringify(['three', 'four']), function() { return JSON.stringify(filterLongWords(['one', 'two', 'three', 'four'], 3)); }));
console.assert(JSON.stringify(filterLongWords(['one', 'two', 'three', 'four'], 3)) === JSON.stringify(['three', 'four']), 'filterLongWords Test Case 1 Failed');

// Modifications to JSFiddle on map/filter/reduce Slide
let arr = [1, 2, 3, 4, 5];

// a) Multiply each element by 10
let multipliedBy10 = arr.map(x => x * 10);
console.log("Expected output of arr.map(x => x * 10) is [10, 20, 30, 40, 50] and " + myFunctionTest(JSON.stringify([10, 20, 30, 40, 50]), function() { return JSON.stringify(multipliedBy10); }));
console.assert(JSON.stringify(multipliedBy10) === JSON.stringify([10, 20, 30, 40, 50]), 'map/filter/reduce Test Case a Failed');

// b) Return array with all elements equal to 3
let allThrees = arr.filter(x => x === 3);
console.log("Expected output of arr.filter(x => x === 3) is [3] and " + myFunctionTest(JSON.stringify([3]), function() { return JSON.stringify(allThrees); }));
console.assert(JSON.stringify(allThrees) === JSON.stringify([3]), 'map/filter/reduce Test Case b Failed');

// c) Return the product of all elements
let productOfAll = arr.reduce((acc, x) => acc * x, 1);
console.log("Expected output of arr.reduce((acc, x) => acc * x, 1) is 120 and " + myFunctionTest(120, function() { return productOfAll; }));
console.assert(productOfAll === 120, 'map/filter/reduce Test Case c Failed');

console.log('All tests completed.');
