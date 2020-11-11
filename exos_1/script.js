const fs = require('fs');

const fileName = process.argv[2];

let DATA = []

try {
  const data = fs.readFileSync(fileName, 'utf8');
  DATA = data.split` `.map(x => + x)
} catch (error) {
  console.error(error.message);
}

let firstCount = 0
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]
    if (leftEl < rightEl) {
      output.push(leftEl)
      leftIndex++
    } else {
      output.push(rightEl)
      rightIndex++
    }
    firstCount += 1
  }
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

const mergeSort = inputArr => {
  const arr = inputArr.slice()
  if (arr.length <= 1) {
    return arr
  }
  const middleIndex = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middleIndex)
  const rightArr = arr.slice(middleIndex);

  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
  )
}

mergeSort(DATA)

console.log(`Tri fusion : ${firstCount} comparaisons ${mergeSort(DATA)}`)

const combSort = (array) => {
  let count = 0
  const arr = array.slice()
  if (arr.Length < 2) return arr
  let gap = arr.length
  do {
    gap = gap > 1 ? Math.floor(gap / 1.3) : 1
    for (let i = 0; i + gap < arr.length; i++) {
      if (arr[i] > arr[i + gap]) {
        let temp = arr[i]
        arr[i] = arr[i + gap]
        arr[i + gap] = temp
      }
      count += 1
    }
  } while (gap > 1)
  console.log(`Tri en peigne : ${count} comparaisons ${arr}`)
  return arr
}

combSort(DATA)

const cocktailSort = (array) => {
  let count = 0
  let arr = array.slice()
  let swapped = true;
  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] > arr[i +1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true
      }
      count += 1
    }
    for (let i = arr.length - 2; i > 0; i--) {
      if (arr[i] > arr[i +1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true
      }
      count += 1
    }
  }
    console.log(`Tri cocktail : ${count} comparaisons ${arr}`)
    return arr
};

cocktailSort(DATA)