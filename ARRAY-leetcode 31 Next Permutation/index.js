/**Given an array of integers nums, find the next permutation of nums. */

//let nums = [4, 1, 7, 5, 3, 2, 0];
let nums = [1, 5, 1];
let i = nums.length - 2;
let j =0 ;

while (i >= 0 && nums[i] >= nums[i + 1]) i--;
if (i >= 0) {
    j = nums.length-1;
    while (j >= 0 && nums[j] <= nums[i]) j--;
    swap(nums, i, j);
}

function swap(nums, i, j) {
    nums[i] = nums[i] + nums[j];
    nums[j] = nums[i] - nums[j];
    nums[i] = nums[i] - nums[j];
}
reverse(nums, i + 1, nums.length - 1);
function reverse(nums, i, j) {

    while (i < j) {
        swap(nums, i++, j--);
    }
}
console.log(nums);
