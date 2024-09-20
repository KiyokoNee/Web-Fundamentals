function alwaysHungry(arr) {
    let hungry = true;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            hungry = false;
            console.log("yummy");
        }
    }
    if(hungry) {
        console.log("I'm hungry");
    }
}

function highPass(arr, cutoff) {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function betterThanAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}

function reverse(arr) {
    let revArr = [];
    for(let i = arr.length-1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    arr = revArr;
    return arr;
}

function fibonacciArray(value) {
    let fibArr = [0,1];
    for(let i = fibArr.length; i < value; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}

/* test for alwaysHungry */
console.log("Test for alwaysHungry: ");
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

/* test for highPass */
console.log("Test for highPass: ");
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

/* test for betterThanAverage */
console.log("Test for betterThanAverage: ");
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

/* test for reverse */
console.log("Test for reverse: ");
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

/* test for fibonacciArray */
console.log("Test for fibonacciArray: ")
var result = fibonacciArray(10);
console.log(result);
