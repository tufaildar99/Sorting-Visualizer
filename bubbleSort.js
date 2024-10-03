async function bubbleSort(array, delay) {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      if (array[j] > array[j + 1]) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        swapBars(bars[j], bars[j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }

      bars[j].style.backgroundColor = "#3498db";
      bars[j + 1].style.backgroundColor = "#3498db";
    }
    bars[array.length - i - 1].style.backgroundColor = "green";
  }
}

function swapBars(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
