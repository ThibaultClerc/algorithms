const fs = require('fs');

const fileName = process.argv[2];

let DATA = []

try {
  const data = fs.readFileSync(fileName, 'utf8');
  DATA = data.split` `.map(x => + x)
} catch (error) {
  console.error(error.message);
}

const bubbleSort = (array) =>{
  const arr = array.slice()
  let comparison = 0

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j+1]) {
          comparison +=1;
          let tmpArray = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = tmpArray
        }
      }
    }
    console.log(`Tri à bulle : ${comparison} comparaisons ${arr}`)
    return arr
  }

bubbleSort(DATA);

const insertionSort = (inputArr) => {
  const arr = inputArr.slice()
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        const temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        count += 1
      } else {
        break;
      }
    }
  }
  console.log(`Tri à insertion : ${count} comparaisons ${arr}`)
  return arr
}

insertionSort(DATA)

const selectionSort = (inputArr) => {
  let count = 0
  const arr = inputArr.slice()
  len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
        count += 1
      }
    }
    const temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  console.log(`Tri à sélection : ${count} comparaisons ${arr}`)
  return arr
}

selectionSort(DATA)

let count = 0
const quickSort = (inputArr) => {
  const arr = inputArr.slice()
  if (arr.length === 1) {
    return arr
  }
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
    count += 1
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr, count), pivot, ...quickSort(rightArr, count)]
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr, count), pivot]
  } else {
    return [pivot, ...quickSort(rightArr, count)]
  }

}

quickSort(DATA)
console.log(`Tri rapide : ${count} comparaisons ${quickSort(DATA)}`)