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
