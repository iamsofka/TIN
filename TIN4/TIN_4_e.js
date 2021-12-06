function longest(str) {
    let max = "";
    let str_arr = str.split(/\s/g);

    str_arr.forEach(e => {
        if (e.length > max.length)
            max = e;
    });
    
    return max;
}
console.log(longest("ik hou van thee drinken"));