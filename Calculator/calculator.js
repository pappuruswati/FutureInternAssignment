// Append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Perform calculation
function calculate() {
    try {
        const result = eval(document.getElementById('display').value); // Use eval for simplicity
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
