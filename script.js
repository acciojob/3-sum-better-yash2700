function threeSum(arr, target) {
  // Sort the array in non-decreasing order
  arr.sort((a, b) => a - b);
  
  let closestSum = Infinity;

  // Fix the first element and use two pointers to find the other two
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target);

      // Update closest sum if needed
      if (diff < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Move left and right pointers based on the sum
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Early exit if we find a sum equal to target
        return sum;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;