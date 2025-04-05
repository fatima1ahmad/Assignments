
// Function to find the largest number in an array
let arr7 = [1, 5, 9, 6, 3, 87, 72, 23];
function largest(arr7) {
    let max = arr7[0]; 

    for (let i = 1; i < arr7.length; i++) {
        if (arr7[i] > max) { 
            max = arr7[i]; 
        }
    }
    return max; 
}
console.log(largest(arr7));

let array = [1, 5, 9, 6, 3, 87, 72, 23];

function fun(array, target) {
    array.sort((a, b) => a - b); 

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === target) {
            return [array[left], array[right]]; 
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; 
}