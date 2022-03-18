/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * given that elements in array will be in range [1,n]
 * where n is nums.length-1
 * 
 * Leetcode 287
 * 
 */

let nums = [1, 3, 4, 2, 2];
var findDuplicate = function (nums) {
    let fast = 0, slow = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    slow = 0;
    while(slow!=fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
console.log(findDuplicate(nums))
