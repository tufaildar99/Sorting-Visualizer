async function selectionSort(array, delay) {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    bars[minIndex].style.backgroundColor = "red";

    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.backgroundColor = "yellow";

      if (array[j] < array[minIndex]) {
        bars[minIndex].style.backgroundColor = "#3498db"; // Reset previous min
        minIndex = j;
        bars[minIndex].style.backgroundColor = "red";
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
      bars[j].style.backgroundColor = "#3498db"; // Reset after comparison
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      swapBars(bars[i], bars[minIndex]);
    }
    bars[i].style.backgroundColor = "green"; // Sorted
  }
}
