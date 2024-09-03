// uses the average location of all customers (X and Y coordinate) to find an optimal truck location
function obtainTruckLoc(custLocs){
    let custXSum = 0;
    let custYSum = 0;

    // calculate the sum of the x and y coordinates
    for(let i = 0; i < custLocs.length; i++) {
        custXSum += custLocs[i][0];
        custYSum += custLocs[i][1];
    }

    // take the average of the x and y coordinates
    let custXAvg = custXSum / custLocs.length;
    let custYAvg = custYSum / custLocs.length;

    // return new array with calculated coordinates
    return [custXAvg, custYAvg];
}

// generates an array of customer locations
function generateCustomerLocs(){
    // randomly sets the size of the customer array from 10 to 29
    let customerArray = new Array(Math.floor(Math.random() * 20 + 10));

    for(let i = 0; i < customerArray.length; i++){
        //randomly generate
        let x = Math.floor(Math.random() * 20 + 10);
        let y = Math.floor(Math.random() * 20 + 10);

        // make each element in the array and array of size 2 for the coordinates
        customerArray[i] = new Array(2);
        customerArray[i][0] = x;
        customerArray[i][1] = y;
    }
    return customerArray;
}


let customers = generateCustomerLocs();
console.log(`With customer locations: `);
for(let i = 0; i < customers.length; i++){
    console.log(customers[i]);
}
let truckLoc = obtainTruckLoc(customers);
console.log(`An optimal truck location would be: [ ${truckLoc[0].toFixed(2)}, ${truckLoc[1].toFixed(2)} ]`);

