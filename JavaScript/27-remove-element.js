/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for (let y = 0; y < nums.length; y++) {
        if (nums[y] != val) {
            nums[i] = nums[y];
            i++
        }
    }
    return i
};

/*
The prompt was to retain no further space complexity
This takes a single pointer method ino order to keep track of what values are not equal to the input value

*/