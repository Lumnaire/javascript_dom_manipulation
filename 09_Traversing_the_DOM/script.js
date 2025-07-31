const currentItem = document.getElementById('current-item');
const parentDiv = document.getElementById('parent-div');

// Parent
console.log('Parent of current item:', currentItem.parentNode); // The <ul> element
console.log('Closest div ancestor of current item:', currentItem.closest('div')); // The #parent-div

// Children
console.log('Children of parentDiv:', parentDiv.children); // HTMLCollection of <p>, <ul>, <p>
console.log('First child element of parentDiv:', parentDiv.firstElementChild); // The first <p>
console.log('Last child element of parentDiv:', parentDiv.lastElementChild); // The last <p>

// Siblings
console.log('Next sibling of current item:', currentItem.nextElementSibling); // <li>Item C</li>
console.log('Previous sibling of current item:', currentItem.previousElementSibling); // <li>Item A</li>

// Querying within an element
const listItemsInList = parentDiv.querySelector('#my-list').querySelectorAll('li');
console.log('List items within my-list:', listItemsInList);