document.getElementById('reverseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = document.getElementById('number').value;
    const reversedNumber = reverseNumber(numberInput);
    document.getElementById('result').textContent = `Reversed Number: ${reversedNumber}`;
});

function reverseNumber(number) {
    // Convert the number to a string, split into characters, reverse the array, and join back to a string
    const reversedString = number.split('').reverse().join('');
    // Convert back to number if the input was a valid number
    return isNaN(reversedString) ? reversedString : Number(reversedString);
}