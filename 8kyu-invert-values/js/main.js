//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(arr) {
    // Use the map function to create a new array with the inverse of each number
    return arr.map(number => -number);
}