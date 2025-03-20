//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array


let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let frequency = {};
let maxCount = 0;
let mostFrequentElement;

for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
}

console.log("Most frequent element is:", mostFrequentElement);
