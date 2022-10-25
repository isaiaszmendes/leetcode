/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  return nums.map((num, i) => {
    if(i === 0) return num
    return nums[i] += nums[i-1]
  })
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum2 = function(nums) {
  const prevNums = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prevNums[i] = prevNums[i - 1] + nums[i]
  }

  return prevNums;
};
