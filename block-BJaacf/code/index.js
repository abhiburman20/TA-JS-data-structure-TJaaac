// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let i =0; i<numbers.length; i++){
    sum = sum + i;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
for (let i =0; i<numbers.length; i++){
    average = 0;
    average = sum/numbers.length;
}
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
// if else
let max = 0;
for (let i =0; i<numbers.length; i++){
    if ( numbers[i] > i){
        max = numbers[i];
    }
}
console.log(max);

// if of
for (let max of numbers){
    if ( numbers[i] > i){
    }
}
console.log(max);

// 5. Find the lowest number in the array and print it to the console using console.log()
// if else
let min = 0;
for (let i =0; i<numbers.length; i++){
    if ( numbers[i] < i){
        min = numbers[i];
    }
}
console.log(min);

// if of
for (let min of numbers){
    if ( min < i){
    }
}
console.log(min);

// 6. Find the even numbers in the array and print them to the console using console.log()
// if else
let even = 0;
for (let i =0; i<numbers.length; i++){
    if ( numbers[i] % 2 == 0){
        even = numbers[i];
        console.log(even);
    }
}

// if of
for (let even of numbers){
    if ( even % 2 == 0){
        console.log(even);
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
// if else
let odd = 0;
for (let i =0; i<numbers.length; i++){
    if ( numbers[i] % 2 !== 0){
        odd = numbers[i];
        console.log(odd);
    }   
}

// if of
for (let odd of numbers){
    if ( odd % 2 !== 0){
        console.log(odd);
    }   
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
// if else
let divisibleby5 = [];
for (let i =0; i<numbers.length; i++){
    if ( numbers[i] % 5 == 0){
        divisibleby5 = numbers[i];
        console.log(divisibleby5);
    }
}

// if of
for (let elements of numbers){
    if ( elements % 5 == 0){
        console.log(elements);
    }
}



// 9. Log all the element of the array one by one
for (let elements of numbers){
    console.log(elements);
}

// 10. Find all the number in the array that is divisible by 3
let divisibleby3 = 0;
for (let elements of numbers){
    if (elements % 3 == 0){
        console.log(elements);
    }
}