// Calling a class and custom style
const mainTitle = document.querySelector('.main-title');

mainTitle.style.color = 'yellow';

mainTitle.style.backgroundColor = 'blue';

// Add a Class
const myParagraph = document.getElementById('my-paragraph');
const toggleButton = document.getElementById('toggle-style');

myParagraph.classList.add('highlight-text');

// Remove a class
// myParagraph.classList.remove('highlight-text');

toggleButton.addEventListener('click', () => {
    myParagraph.classList.toggle('hightlight-text');
});

// Check if a class exists
if (myParagraph.classList.contains('highlight-text')) {
    console.log('Paragraph has highlight-text class.');
} else {
    console.log('Paragraph doesnt have highlight-text class.');
}