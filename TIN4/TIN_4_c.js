function palindrome(str) {
    str = str.replace(/[^A-Za-z]+/g, "");
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1])
            return false;
    }
    return true;
}
console.log(palindrome("1 h u  h "));