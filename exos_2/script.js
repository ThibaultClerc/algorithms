const fs = require('fs');

const fileName = process.argv[2];

let DATA = []

try {
  const data = fs.readFileSync(fileName, 'utf8');
  DATA = data.split` `.map(x => + x)
  console.log(data);
} catch (error) {
  console.error(error.message);
}

//    Exercice 1    ////////////////////////////////

const k = 3

const exercise_1 = (array, k) => {
  const arr = array.slice()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return true
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true
      }
    }
  }
  return false
}

console.log("Exercice 1 liste    OK: ", exercise_1(DATA, k))

//    Exercice 2     ////////////////////////////////

const exercise_2 = (array) => {
  const arr = array.slice()
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0 ;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        count ++ ;
      }
    }
    if(count === 0){
      res ++;
    }
  }
  return res;
}

console.log("Exercice 2 immeuble OK: ", exercise_2(DATA))

//    Exercice 3     ////////////////////////////////
""
const exercise_3 = (array, k) => {
  const arr = array.slice()
  const first = arr[0]
  if (arr.length < 1) {
    return false
  }
  if (first === k) {
    return true
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] === k) {
      return true
    }
    if ((first + arr[i]) === k) {
      return true
    }
  }
  arr.shift()
  return exercise_3(arr, k)
}

console.log("Exercice 3 liste    OK: ", exercise_3(DATA, k))

//    Exercice 4     ////////////////////////////////

const exercise_4 = (array, max = 0, count = 0) => {
  const arr = array.slice()
  if (arr.length < 1) {
    return count
  }
  if (arr[arr.length - 1] > max) {
    max = arr[arr.length - 1]
    count += 1
  }
  arr.pop()
  return exercise_4(arr, max, count)
}

console.log("Exercice 4 immeuble OK: ", exercise_4(DATA))

//    Exercice 5     ////////////////////////////////

const exercise_5 = (array, k) => {
  const arr = array.slice()
  let storageHash = {}
  let nums = []
  
  for (let i in arr){
    if (arr[i] === k) {
      return true
    }
    let addend = k - arr[i]
    if (addend in storageHash){
      nums.push([addend, arr[i]])
    }
    storageHash[arr[i]] = i
  }
  return nums.length !== 0 ? true : false;
}

console.log("Exercice 5 liste    OK: ", exercise_5(DATA, k))


//    Exercice 6     ////////////////////////////////

const exercise_6 = (array) => {
  const arr = array.slice()
  let count = 1
  let max = arr[arr.length - 1]
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i]
      count += 1
    }
  }
  return count
} 

console.log("Exercice 6 immeuble OK: ", exercise_6(DATA))