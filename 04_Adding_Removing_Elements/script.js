const container = document.getElementById('container');
const ul = container.querySelector('ul');
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');

let itemCount = 2; // For dynamic naming

addButton.addEventListener('click', () => {
    // 1. Create a new list item
    const newItem = document.createElement('li');

    // 2. Set the text content of the new item
    itemCount++;
    newItem.textContent = `Item ${itemCount}`;

    // 3. Append the new item to the list
    ul.appendChild(newItem);

    console.log('New item added!');
});

removeButton.addEventListener('click', () => {
    // Check if there are items to remove
    if(ul.children.length > 0) {
        // Option 1: Remove a specific item (if you have a reference)
        // ul.removeChild(itemToRemove); // Removes 'Item 1' if still there

        // Option 2: Remove the last child
        const lastChild = ul.lastElementChild; // Get the last child
        ul.removeChild(lastChild); 
        console.log('Last item removed!');
    } else {
        console.log('No items to remove!');
    }
});