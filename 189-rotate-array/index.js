/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  tail = nums.slice(0, nums.length-k);
  nums.splice(0, nums.length - k);
  nums.push(...tail);
};
