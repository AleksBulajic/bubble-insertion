function bubbleSort(array) {
  // Define a variable to keep track of whether a swap happened
  // Initialize it to true so that we can enter the while loop
  let swapped = true;

  while (swapped) {
    // Set swapped to false initially; it will be set to true if a swap occurs
    swapped = false;

    // Loop through the array, but stop at the second-to-last element
    // This is because we are comparing each element with the one that follows it
    for (let i = 0; i < array.length - 1; i++) {
      // If the current element is greater than the next element, we need to swap them
      if (array[i] > array[i + 1]) {
        // A swap will happen, so set swapped to true
        swapped = true;
        // Temporarily store the current element
        let placeholder = array[i];
        // Replace the current element with the next element
        array[i] = array[i + 1];
        // Replace the next element with the temporarily stored element
        array[i + 1] = placeholder;
      }
    }
    // Return the sorted array
    return array;
  }
}

function insertionSort(array) {
  // Start a loop to go through the entire array
  for (let i = 0; i < array.length; i++) {
    // Remove the current element from the array and store it in a variable
    // Splice returns an array of deleted items, so we take the first element [0]
    let placeholder = array.splice(i, 1)[0];

    // Initialize a variable to find the correct position to insert the placeholder
    let z = 0;

    // Loop through the sorted portion of the array (up to index i)
    // Find the position where the value in the sub-array is less than the placeholder
    while (z < i && array[z] < placeholder) {
      z++;
    }

    // Insert the placeholder at the correct position in the array
    array.splice(z, 0, placeholder);
  }

  // Return the sorted array
  return array;
}
