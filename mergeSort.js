async function mergeSortWrapper(array, delay) {
  const bars = document.querySelectorAll(".bar");
  await mergeSort(array, 0, array.length - 1, bars, delay);
}

async function mergeSort(array, left, right, bars, delay) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);

  await mergeSort(array, left, mid, bars, delay);
  await mergeSort(array, mid + 1, right, bars, delay);
  await merge(array, left, mid, right, bars, delay);
}

async function merge(array, left, mid, right, bars, delay) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArray = array.slice(left, mid + 1);
  const rightArray = array.slice(mid + 1, right + 1);

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    await new Promise((resolve) => setTimeout(resolve, delay));

    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      bars[k].style.height = `${leftArray[i] * 3}px`;
      i++;
    } else {
      array[k] = rightArray[j];
      bars[k].style.height = `${rightArray[j] * 3}px`;
      j++;
    }
    k++;
  }

  while (i < n1) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    array[k] = leftArray[i];
    bars[k].style.height = `${leftArray[i] * 3}px`;
    i++;
    k++;
  }

  while (j < n2) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    array[k] = rightArray[j];
    bars[k].style.height = `${rightArray[j] * 3}px`;
    j++;
    k++;
  }
}
