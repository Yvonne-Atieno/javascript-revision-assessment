// 1. Write a function that takes in a string and returns it when reversed
let food = "eating";
let c = stringg(food)
console.log(c)

function stringg(food){
    for(let i=0;i<food.length; i++)
    return (food.split(``).reverse(``).join(``))

}
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
let num = [2,8,0,23,5,45,76]
// Target = 23
function divideArray(num){
    if (i%2==0){
        return num
    }
let middle = Math.floor(num.length/2);
let left =num.slice(middle,0);
let right = num.slice(middle);
console.log(left,right);
}
// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

//4.  Given a range of numbers from 0 to 100, 
// console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz”
//  if divisible by both 3 and 5.

let x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,
76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
for (let i =0;i<x.length;i++){
    if(i%15===0){
        console.log("Fizzbuzz")
    }
    else if(i%5===0){
console.log("Buzz")
        }
        else if(i%3===0){
            console.log("Fizz")
        }
        else(
            console.log(i)
        )
    }



// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
let a = array(numArray)
console.log(a);
function array(numArray){
    let b = [];
    for(let i =0; i<numArray.length; i++){
        b+=[numArray[i]*4]
    }
    return b
}

//  6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
let arr1 = ["10","24","45","56","67"];
console.log(array1(arr1))
function array1(arr1){
    for (let i=0; i<arr1.length; i++){
        arr1.Math.floor.todigit
    }
    return arr1
}
