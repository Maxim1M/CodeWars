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

// 9

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0)// your code here
}

// 10

function getAge(inputString){
   return Number(inputString[0]);
}

// 11

unction twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = dadYearsOld - sonYearsOld * 2;
  return twice < 0 ? twice * (-1) : twice;
}

// 12

function getPlanetName(id){
  switch(id){
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
    default:
      return "getPlanetName()";
  }
}

// 13

function removeExclamationMarks(s) {
  return s.replace(/!/g, '')
}

// 14

function paperwork (n , m) {
    if (n < 0 || m < 0)
        return 0;
    return n * m;
}

// 15

function rentalCarCost(d) {
  let a = d * 40;
  if (d >= 7) {
    return a - 50;
    } else if (d >= 3) {
      return a - 20;
    }
  return a;
}

// 16

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) sum += arr[i]
  }
  return sum
}

// 17

function makeNegative(num) {
  if(num <= 0){
    return num;
  }else{
    return -Math.abs(num);
  }
}

// 18

function opposite(number) {
  return -number;

// 19

function solution(str){
  return str.split("").reverse().join("");
}

// 20

function boolToWord( bool ){
  if (bool == true) {
    return "Yes";
  }
  else {
    return "No"
  }
}

// 21

function numberToString(num) {
  num = String(num);
  return num;
}

// 22

function removeChar(str){
  var result = str.slice(1, -1);
  return result;
}

//
 */