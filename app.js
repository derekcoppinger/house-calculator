var houseCost = 200000;
var downPayment = 20000;
var monthlyHousePayment;
var yearsToPayOff = 3;

function calculateMonthlyHousePayment() {
    var yearlyPayment;
    yearlyPayment = houseCost / yearsToPayOff;
    monthlyHousePayment = yearlyPayment / 12;
}


// TODO: Finish this function
// function yearsToPayOff() {

// }

calculateMonthlyHousePayment();

console.log('House Cost: $' + houseCost.toLocaleString('en-US', { minimumFractionDigits: 2 }));
console.log('Salary: $' + currentYearlySalary.toLocaleString('en-US', { minimumFractionDigits: 2 }));
console.log('Monthly Payment: $' + monthlyHousePayment.toLocaleString('en-US', { minimumFractionDigits: 2 }));

