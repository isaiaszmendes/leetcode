/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
	let leftSum = 0;
	for (let i = 0; i < nums.length; i++) {
		leftSum += i === 0 ? 0 : nums[i - 1]
		let rightSum = 0;
		for (let j = i + 1; j < nums.length; j++) {
			rightSum += nums[j] ?? 0 
		}

    if (leftSum === rightSum) {
      return i
    }
	}
	return -1
};
