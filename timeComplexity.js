let n = 10;
let arr = [12, 21, 33, 4, 51, 6, 37, 8, 19, 10];

for (i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

  console.log(arr);
}

console.log(arr);

// Time: O(n^2), Space: O(1)

/*
Worst case scenario: Given a list sorted in reverse order, how many comparisons are made? The inner and outer loop will have to run n times so it can be determined that worst case = O(n^2).

Average comparison: Regardless of the order of the list, every item must be checked against average case = O(n^2).

Best comparison: Given a sorted list, how many comparisons must be made? Again, regardless of the items in the list, every item must be checked, so best case = O(n^2).

Finally, what is the space complexity of this approach? Because an in-place swap is being performed, no temporary array is required. There are three temporary variables i, j and min_index; however, these are not dependent on the list size. So, the image doubles the list, and the space complexity does not increase accordingly. Therefore, space complexity = O(1).
*/
