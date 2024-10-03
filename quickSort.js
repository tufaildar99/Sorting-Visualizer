async function quickSortWrapper(array, delay) {
  const bars = document.querySelectorAll(".bar");
  await quickSort(array, 0, array.length - 1, bars, delay);
}

async function quickSort(array, low, high, bars, delay) {
  if (low < high) {
    const pi = await partition(array, low, high, bars, delay);
    await quickSort(array, low, pi - 1, bars, delay);
    await quickSort(array, pi + 1, high, bars, delay);
  }
}

async function partition(array, low, high, bars, delay) {
  const pivot = array[high];
  bars[high].style.backgroundColor = "red";
  let i = low - 1;

  for (let j = low; j < high; j++) {
    bars[j].style.backgroundColor = "yellow";
    await new Promise((resolve) => setTimeout(resolve, delay));

    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      swapBars(bars[i], bars[j]);
    }
    bars[j].style.backgroundColor = "#3498db"; // Reset
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  swapBars(bars[i + 1], bars[high]);

  bars[high].style.backgroundColor = "#3498db"; // Reset pivot
  bars[i + 1].style.backgroundColor = "green"; // Mark sorted pivot
  return i + 1;
}
