async function insertionSort(array, delay) {
  const bars = document.querySelectorAll(".bar");

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    bars[i].style.backgroundColor = "red";

    while (j >= 0 && array[j] > key) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      array[j + 1] = array[j];
      swapBars(bars[j + 1], bars[j]);
      bars[j].style.backgroundColor = "green";
      j--;
    }

    array[j + 1] = key;
    bars[j + 1].style.backgroundColor = "green";
  }
}
