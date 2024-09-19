/* print odd numbers from 1 to 20 */
function printOdds() {
    for(let i = 1; i <= 20; i++) {
        if(i % 2 === 1) {
            console.log(i);
        }
    }
}

/* print all multiples of 3 from 100 to 0 */
function decreasingMultiples() {
    for(let i = 100; i >= 0; i--) {
        if(i % 3 === 0) {
            console.log(i);
        }
    }
}

/* print specified sequence decreasing by 1.5 starting at 4 */
function printSequence() {
    for(let i = 4; i > -4; i -= 1.5) {
        console.log(i);
    }
}

/* print sum of all numbers 1-100 */
function sigma() {
    let sum = 0;
    for(i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

/* multiply all values from 1-12 and print sum */
function factorial() {
    let product = 1;
    for(let i = 1; i <= 12; i++) {
        product *= i;
    }
    console.log(product);
}

/*run all the methods because why not */
console.log("Print Odds result: ")
printOdds();
console.log("Decreasing Multiples result: ")
decreasingMultiples();
console.log("Print Sequence result: ")
printSequence();
console.log("Sigma result: ")
sigma();
console.log("Factorial result: ")
factorial();