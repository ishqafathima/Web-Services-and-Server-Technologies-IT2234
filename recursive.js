//write recursive function to print numbers from 1 to n
function printNumbers(n, current = 1) {
    if (current > n) return;  // Base case: Stop when current exceeds n
    
    console.log(current);  // Print the current number
    printNumbers(n, current + 1);  // Recursive call with incremented value
}

// Test the function
printNumbers(10);  // Prints numbers from 1 to 10
