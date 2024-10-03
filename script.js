const arrayContainer = document.getElementById("array-container");
const algorithmSelect = document.getElementById("algorithm");
const generateButton = document.getElementById("generate");
const sortButton = document.getElementById("sort");

let array = [];
let delay = 200;

function generateArray() {
  array = [];
  console.log("Initial", array);
  arrayContainer.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    let value = Math.floor(Math.random() * 100) + 5;
    array.push(value);
    const bar = document.createElement("div");
    bar.innerText = value;
    bar.style.height = `${value * 3}px`;
    bar.classList.add("bar");
    arrayContainer.appendChild(bar);
  }
  console.log("Final Array", array);
}

sortButton.addEventListener("click", () => {
  switch (algorithmSelect.value) {
    case "bubble":
      bubbleSort(array, delay);
      break;
    case "insertion":
      insertionSort(array, delay);
      break;
    case "selection":
      selectionSort(array, delay);
      break;
    case "merge":
      mergeSortWrapper(array, delay);
      break;
    case "quick":
      quickSortWrapper(array, delay);
      break;
  }
});

generateButton.addEventListener("click", generateArray);

generateArray();
