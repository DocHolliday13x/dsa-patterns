# Coding Interview Prep

This repository will be my playground for practicing/testing coding patterns to solve various DS/A problems. My goal is to first become familiar with the patterns and then to be able to solve problems using the patterns without having to reference them. I'll start using JavaScript, but maybe down the road I can attempt similar patterns using other coding languages. 

Below is the table of contents for the patterns I'll be practicing. Further down is a brief description of each pattern and the efficiency of the pattern vs. a brute force method to solving the same problem for comparison, as well as a code snippet example of the pattern in use.

## Table of Contents

| Pattern | Link |
| ----------- | ----------- |
| 01 | [Sliding Window](/JavaScript/Sliding%20Window/index.js) |
| 02 | [Two-Pointer](/JavaScript/Two-Pointer/index.js) |
| 03 | [Fast & Slow Pointers](/JavaScript/Fast%20&%20Slow%20Pointers/index.js) |
| 04 | [Merge Intervals](/JavaScript/Merge%20Intervals/index.js) |
| 05 | [Cyclic Sort](/JavaScript/Cyclic%20Sort/index.js) |
| 06 | [In-Place Traversal of a LinkedList](/JavaScript/In-Place%20Traversal%20of%20a%20LinkedList/index.js) |
| 07 | [Tree - Breadth First Search](/JavaScript/Breadth%20First%20Search/index.js) |
| 08 | [Tree - Depth First Search](/JavaScript/Depth%20First%20Search/index.js) |
| 09 | [Two Heaps](/JavaScript/Two%20Heaps/index.js) |
| 10 | [Subsets](/JavaScript/Subsets/index.js) |
| 11 | [Modified Binary Search](/JavaScript/Modified%20Binary%20Search/index.js) |
| 12 | [Bitwise XOR](/JavaScript/Bitwise%20XOR/index.js) |
| 13 | [Top 'K' Elements](/JavaScript/Top%20'K'%20Elements/index.js) |
| 14 | [K-way Merge](/JavaScript/K-Way%20Merge/index.js) |
| 15 | [0 1 Knapsack (Dynamic Programming)](/JavaScript/0%201%20Knapsack/index.js) |
| 16 | [Topological Sort (Graph)](/JavaScript/Topological%20Sort/index.js) |

## Resources

- [Rhett's Forked Repo](https://github.com/rtrom/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews)
- [Educative.io](https://www.educative.io/courses/grokking-the-coding-interview)
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)

## Approach and Efficiency

### Sliding Window

The sliding window pattern involves creating a window which can either be an array or number from one position to another. Depending on certain conditions, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/linked list/string etc. 

- Brute Force Method Efficiency: O(n^2)
- Sliding Window Method Efficiency: O(n)

```javascript
function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}
```

### Two-Pointer

### Fast & Slow Pointers

### Merge Intervals

### Cyclic Sort

### In-Place Traversal of a LinkedList

### Tree - Breadth First Search

### Tree - Depth First Search

### Two Heaps

### Subsets

### Modified Binary Search

### Bitwise XOR

### Top 'K' Elements

### K-way Merge

### 0 1 Knapsack (Dynamic Programming)

### Topological Sort (Graph)

## That's It. I'm Done For Now.

![GIF](https://media.giphy.com/media/j5PHGhZMNOMznyhYPT/giphy.gif)
