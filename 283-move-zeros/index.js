/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let zeroes = 0;
  let i = 0;
  while(i !== nums.length){
    if(nums[i + zeroes]) {
      nums[i] = nums[i + zeroes];
      i++;
    } else if((i + zeroes) >= nums.length) {
      nums[i] = 0;
      i++;
    } else {
      zeroes++;
    }
  }
};