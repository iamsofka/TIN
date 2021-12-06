function binarySearch (arr, value){
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high){
        mid = Math.floor((low+high) / 2);
        if(arr[mid] === value)
            return mid;
        else if (arr[mid]<value)
            low = mid+1;
        else
            high = mid-1;
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4))