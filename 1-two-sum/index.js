/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for(let i = 0; i <= nums.length; i ++) {
    for(let j = i + 1; j <= nums.length; j ++) {
      if(i !== j) {
        if(nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  }
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum2 = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(map.get(nums[i]) !== undefined) {
      return [map.get(nums[i]), i] ;
    }

    map.set(target - nums[i], i);
  }
  return -1;
}
