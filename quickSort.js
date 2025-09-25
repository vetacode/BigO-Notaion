function quickSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Choose pivot: middle element
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];
  const equal = [];

  // Partition into three arrays: < pivot, = pivot, > pivot
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]); // handles duplicates
    }
  }

  // Recursively sort left and right, then merge
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const arr = [64, 25, 42, 55, 12, 22, 11, 20, 70, 5, 7, 3, 2];
console.log('Original:', arr);
console.log('Sorted:', quickSort(arr));

/*
Worst case scenario: this happens when the most significant element is consistently chosen as a pivot point. This will cause a loop to iterate over every element n from the left. The split will cause a search of every element on the right with none on the left, O(n^2).

Average case scenario: an average pivot point is selected at every call. This will reduce the number of additional iterations required. So, there will be n iterations and an ever-decreasing logn iterative calls, O(n*logn).

Best case scenario: The middle value is always selected, and the iteration space is halved at every iteration, O(n*logn).

The iterative nature of the algorithm will impact the space complexity because the function call and variables are retained on the stack while the calculations are performed. However, the decision to use an in-place swap means no new array needs to be created, O(log n).
*/
