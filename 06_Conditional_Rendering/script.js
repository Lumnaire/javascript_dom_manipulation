const toggleMessageButton = document.getElementById('toggle-message');
const secretMessage = document.getElementById('secret-message');
const showErrorButton = document.getElementById('show-error');
const errorContainer = document.getElementById('error-container');

// Method 1: Toggling a CSS class
toggleMessageButton.addEventListener('click', () => {
    secretMessage.classList.toggle('hidden');
});

// Method 2: Dynamic element creation/removal based on a condition
let isErrorVisible = false;

showErrorButton.addEventListener('click', () => {
     if (!isErrorVisible) {
        // Create an error message element
        const errorMessage = document.createElement('p');
        errorMessage.id = 'dynamic-error';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'An error occurred!';
        errorContainer.appendChild(errorMessage);
        isErrorVisible = true;
        showErrorButton.textContent = 'Hide Error';
    } else {
        // Remove the error message element
        const dynamicError = document.getElementById('dynamic-error');
        if (dynamicError) {
            dynamicError.remove(); // Or errorContainer.removeChild(dynamicError);
        }
        isErrorVisible = false;
        showErrorButton.textContent = 'Show Error (Dynamically)';
    }
});