const myImage = document.getElementById('my-image');
const myLink = document.getElementById('my-link');
const myInput = document.getElementById('my-input-with-value');
const dataElement = document.getElementById('data-element');

// Get attributes
console.log('Image src:', myImage.getAttribute('src')); // Or myImage.src
console.log('Link href:', myLink.href); // Direct property access often preferred
console.log('Input value:', myInput.value); // Direct property access

// Set attributes
myImage.setAttribute('src', 'https://via.placeholder.com/200'); // Change image size
myImage.setAttribute('alt', 'Larger Placeholder');

myLink.href = 'https://www.google.com'; // Change link URL
myLink.textContent = 'Go to Google';

myInput.value = 'New value from JS'; // Change input value

// Remove attribute
myLink.removeAttribute('target'); // Removes target="_blank" if it existed

// Working with data attributes (data-*)
console.log('Custom data-id:', dataElement.dataset.customId); // Access as .dataset.camelCase
console.log('Custom data-info:', dataElement.dataset.info);
dataElement.dataset.status = 'processed'; // Add a new data attribute
console.log('New data-status:', dataElement.dataset.status);