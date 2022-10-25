/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
   do {
     mid = parseInt((left + right) / 2);
     if(nums[mid] === target) {
       return mid;
     }

     if (nums[mid] > target) {
       right = mid - 1;
     } else {
       left = mid + 1;
     }
   } while(left <= right);
   return -1;
};