// Reverse an array using push and pop
let arr4 = ['a', 'b', 'c', 'd'];  // Fixed array elements (added 'c')
let arr5 = [];

while (arr4.length > 0) {
    arr5.push(arr4.pop());  // Pop from arr4 and push into arr5
}

console.log("Reversed array:", arr5);