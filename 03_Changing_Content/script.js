const textParagraph = document.getElementById('text-paragraph');
const htmlContainer = document.getElementById('html-container');
const plainTextSpan = document.getElementById('plain-text-span');

// Using innerText
textParagraph.innerText = 'This text was changed by JavaScript!';

// Using innerHTML
htmlContainer.innerHTML = '<h3>New Header</h3><p>And a new paragraph inserted via <b>innerHTML</b>.</p>';

// Using textContent (best for plain text)
plainTextSpan.textContent = 'Updated plain text content';
console.log(plainTextSpan.textContent); // Gets the text content
