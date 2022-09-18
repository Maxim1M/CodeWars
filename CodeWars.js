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

// 23

function noSpace(x){
  str = x.replace(/\s+/g, '');
  return str;
}

 // 24

 function repeatStr (n, s) {
  return s.repeat(n);
}

// 25

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 26

function squareSum(num){
  let n = 0;
  for (let i = 0; i < num.length; i++) {
    n += num[i] **2
  }
  return n
}

// 27

function countSheeps(arrayOfSheep) {
  let arr = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      arr += 1
    }
  }
  return arr
}

// 28

function century(year) {
  return Math.ceil(year/100);
}

// 29

function greet(name){
  var a = "Hello, " + name +  " how are you doing today?";
  return a;
}

// 30

function litres(time) {
  var lit = 0.5 * time;
  return Math.floor(lit);
}

// 31

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// 32

const stringToNumber = function(str){
  let num = Number(str);
  return num;
}

// 33

function maps(x){
  return x.map((num) => num * 2);
}

// 34

function greet (x) {
   return ("hello world!");
}

// 35

function past(h, m, s){
  let hm = h * 3600000;
  let mm = m * 60000;
  let sm = s * 1000;

  return hm + mm + sm
}

// 36

function booleanToString (b){
  if (b) {
    return "true";
  } else{
    return "false";
  }
}

//
 */