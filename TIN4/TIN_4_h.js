function secondMinAndMax(arr) {
    arr.sort();
    return "Second max: " + arr[arr.length - 2] + ", second min: " + arr[1];
}

console.log(secondMinAndMax([1,5,6,7,4,8,3]));