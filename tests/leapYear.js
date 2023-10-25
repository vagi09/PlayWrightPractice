function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If it's divisible by 100, check if it's divisible by 400
        if (year % 100 === 0) {
            // If it's divisible by 400, it's a leap year
            if (year % 400 === 0) {
                return true;
            }
            // If it's divisible by 100 but not by 400, it's not a leap year
            return false;
        }
        // If it's divisible by 4 and not by 100, it's a leap year
        return true;
    }
    // If it's not divisible by 4, it's not a leap year
    return false;
}

// Example: Prompt the user for a year and check if it's a leap year
const inputYear = parseInt(prompt("Enter a year:"));
if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
} else {
    console.log(inputYear + " is not a leap year.");
}






