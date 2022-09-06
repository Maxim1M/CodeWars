/*

 // 1
function even_or_odd(n) {

  if(n % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

function

// 2

function reverseWords(str){
  return str.split(" ").reverse().join(" ") // reverse those words
}

// 3

var summation = function (num) {
  let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

// 4

function grow(x){
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

// 5

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c < 0) return (c + " is freezing temperature");
  else return (c + " is above freezing temperature");
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}

// 6

const arr = N => {
  const arr = [];

  for(let i = 0; i < N; i+=1) {
    arr.push(i);
  }

  return arr;
};

// 7

function invert(array) {
   return array.map((elm) => {
     return elm >= 0 ? -Math.abs(elm) : Math.abs(elm);
   });
}

// 8

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((elm) => !geese.includes(elm))// return an array containing all of the strings in the input array except those that match strings in geese
};

//
 */