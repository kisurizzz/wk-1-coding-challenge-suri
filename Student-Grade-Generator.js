// Array to store student marks
let studentMarks = [];

// Prompt the user to input student marks until they enter a non-numeric value
while (true) {
    let input = prompt("Enter a student's mark (or enter a non-numeric value to finish):");
    // Check if the input is not a number (NaN) or if the input is null (user clicked cancel)
    if (isNaN(input) || input === null) {
        break; // Exit the loop if the input is not a number or if the user clicked cancel
    } else {
        // Convert the input to a number and add it to the studentMarks array
        studentMarks.push(parseFloat(input));
    }
}

// Output the student marks array
console.log("Student marks entered:", studentMarks);