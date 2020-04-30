/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    let splitArray = s.split(' ')

    splitArray = splitArray.filter(emptyStr => emptyStr !== '');

    let lastString = splitArray[splitArray.length-1];

    if (!lastString) return 0
    else return lastString.length

}

/*
space complexity = 0(n)
time complexity = 0(n)
*/