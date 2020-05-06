/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //create a pointer for lower value
    let lower_value_index = 0
    //create a pointer for upper value (that does not change)
    if (target < nums[0]) return 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            lower_value_index = i
        }
        if (nums[i] === target) {
            return i
        }
    }
    return lower_value_index+1
};
