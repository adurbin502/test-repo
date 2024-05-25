// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Pseudocode:

  // Copy the original array
  let copyArr = [...arr];
  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty:
  while (copyArr.length > 0) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(","));
    // - Pop a value from the array
    let val = copyArr.pop();
    // - Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);
    // - Walk through the sorted array in reverse order

    let i = sorted.length - 1;
    while (i > 0) {
      // - Check if the value to the left is smaller than the new value
      if (sorted[i - 1] < val) {
        // - If so, you've reached the insertion point so exit the loop
        break;
        // - If not shift the value to the right by 1 and continue
      } else {
        sorted[i] = sorted[i - 1];
        i--;
      }
      // - Insert the unsorted value at the break point
    }
    sorted[i] = val;
  }
  // Return the sorted array
  return sorted;
  // let i = sorted.length - 1;
  //   for (; i > 0; i--) {
  //     if (sorted[i - 1] < val) {
  //       break;
  //     } else {
  //       sorted[i] = sorted[i - 1];
  //     }
  //   }
  //   sorted[i] = val;
  // }
  // return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Pseudocode:

  // Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(","));
    // - Grab the first value from the unsorted half
    let val = arr[divider];
    // - For each value starting from the divider,
    let i = divider;

    while (i > 0) {
      // - Check if the value to the left is smaller than the unsorted value
      if (arr[i - 1] < val) {
        // - If so, you've reached the insertion point so exit the loop
        break;
        // - If not shift the value to the right by 1 and continue
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }
    // - Insert the unsorted value at the break point
    arr[i] = val;
    // - Increment the dividing pointer and repeat
    divider++;
  }
  // Return the mutated array
  return arr;
}

// for (let i = 1; i < arr.length; i++) {

//   console.log(arr.join(','));

//   let currentValue = arr[i];
//   let j = i - 1;

//   while (j >= 0 && arr[j] > currentValue) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = currentValue;
// }

// console.log(arr.join(','));
// return arr;

module.exports = [insertionSort, insertionSortInPlace];
