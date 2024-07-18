document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('alphabetForm');
    const input = document.getElementById('stringInput');
    const resultContainer = document.getElementById('result');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const stringInput = input.value.trim(); // Trim input to remove leading and trailing whitespace
        if (stringInput === '') {
            resultContainer.textContent = 'Please enter a string to sort.';
            resultContainer.style.color = 'red';
        } else {
            const sortedString = sortStringAlphabetically(stringInput);
            resultContainer.textContent = `Sorted String: ${sortedString}`;
            resultContainer.style.color = 'black'; // Reset color in case it was changed to red
        }
    });

    function sortStringAlphabetically(str) {
        let charArray = str.split('');
        charArray.sort();
        return charArray.join('');
    }
});
