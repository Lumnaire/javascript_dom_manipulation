const myButton = document.getElementById("my-button");
const messageDisplay = document.getElementById("message-display");
const myInput = document.getElementById("my-input");

// Click event listener
myButton.addEventListener("click", () => {
    messageDisplay.textContent = "Button was clicked!";
    messageDisplay.style.color = "green";
});

// Mouseover and mouseout event listeners
myButton.addEventListener("mouseover", () => {
    myButton.style.backgroundColor = 'lightblue';
    myButton.style.border = '2px solid blue';
    myButton.style.cursor = 'pointer';
});

myButton.addEventListener("mouseout", () => {
    myButton.style.backgroundColor = ''; // Reset background
    myButton.style.border = '';
});

// Input change event listener
myInput.addEventListener('input',(event) => {
    messageDisplay.textContent = `You typed: ${event.target.value}`;
});

// Keydown event (e.g., specific key press)
myInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
        alert(`You entered: ${event.target.value}`);
    }
});