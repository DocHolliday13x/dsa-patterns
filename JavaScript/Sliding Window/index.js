// Maximum Sum of a Subarray
// Brute Force Solution
function maxSubarraySumA(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // subtract the first number in the window and add the next number
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare the tempSum with the maxSum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Sliding Window Solution
function maxSubarraySumB(arr, num) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if(windowEnd >= num - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }

    return maxSum;
}

maxSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3); // 9
maxSubarrayOfSizeK([2, 3, 4, 1, 5], 2); // 7