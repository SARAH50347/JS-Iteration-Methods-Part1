//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const numbersThatAreGreaterThanOrEqual = numbers.filter(function number(num){
    return num >= 25 
    
});
console.log(numbersThatAreGreaterThanOrEqual);


const numbersThatAreDivisible= numbers.filter(function number(num){
return num % 5 === 0 ;
});
console.log(numbersThatAreDivisible);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

squared = numbers.map(function (numbers) {
    return numbers**3;
  });
  console.log(squared);


  multiplied = numbers.map(function(numbers){
    return numbers*2;
  });
  console.log(multiplied);

  /*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//5)
const numbersFilter = numbers.filter(function(num){
    if(num >= 20  ){
        return num **2;
    }
});
console.log(numbersFilter);



//6)
const newNumbers= numbersThatAreDivisible.map(function(num){
    return num*3;
});



 console.log(newNumbers);

//const numberDivisible.map(numbersThatAreDivisible,num)
//return numbers*3;