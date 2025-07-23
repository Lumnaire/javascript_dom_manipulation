# Mastering DOM Manipulation with JavaScript 🚀
This repository serves as a comprehensive guide and set of examples for understanding and practicing Document Object Model (DOM) manipulation using JavaScript. The DOM is a programming interface for web documents, allowing JavaScript to access and change the content, structure, and style of a webpage.

---

## Lessons Tackled
This guide covers fundamental to intermediate DOM manipulation techniques, broken down into key stages:

### 1. Selecting Elements
Learn how to pinpoint specific HTML elements on a page so you can interact with them.

- `document.getElementById()`

- `document.getElementsByClassName()`

- `document.getElementsByTagName()`

- `document.querySelector()`

- `document.querySelectorAll()`

### 2. Changing Style (CSS Manipulation)
Discover how to dynamically alter the visual presentation of elements using JavaScript.

- Direct inline styling with `element.style.propertyName`

- Recommended: Toggling CSS classes with `element.classList.add()`, `remove()`, and `toggle()` for better separation of concerns.

### 3. Changing Content (innerText, innerHTML)
Update the textual or HTML content within your elements.

- `element.innerText`: For visible text content.

- `element.innerHTML`: For inserting or replacing HTML structures (use with caution to prevent XSS).

- `element.textContent`: Ideal for plain text manipulation, generally preferred over innerText.

### 4. Adding/Removing Elements
Dynamically build or dismantle your webpage structure by creating, appending, and removing elements.

- `document.createElement()`: Create new HTML elements.

- `document.createTextNode()`: Create text nodes.

- `parentNode.appendChild()`: Add a child element to a parent.

- `parentNode.insertBefore()`: Insert a child element before a reference element.

- `parentNode.removeChild()`: Remove a child element from its parent.

- `element.remove()`: A simpler way to remove an element directly (modern browsers).

### 5. Handling Events
Make your webpages interactive by responding to user actions like clicks, hovers, key presses, and more.

- `element.addEventListener('eventType', handlerFunction)`: Attach event listeners.

- Common events include `click`, `mouseover`, `mouseout`, `input`, `keydown`, `submit`, and `load`.

### 6. Conditional Rendering
Implement logic to show or hide elements based on specific conditions or data.

- Manipulating `element.style.display` (e.g., `'none'`, `'block'`).

- Toggling CSS classes that define display properties.

- Dynamically adding or removing elements from the DOM entirely.

### 7. Looping InnerText/Element Rendering
Efficiently display lists or collections of data by iterating over arrays and generating corresponding DOM elements.

- Using `forEach` loops to create multiple elements based on data.

### 8. Working with Attributes
Access, modify, and remove HTML attributes on elements.

- `element.getAttribute()`

- `element.setAttribute()`

- `element.removeAttribute()`

- Direct property access for common attributes (e.g., `element.src`, `element.href`, `element.value`).

- Working with `data-*` attributes using `element.dataset`.

### 9. Traversing the DOM
Navigate through the DOM tree to find elements relative to a starting point (e.g., parents, children, siblings).

- `element.parentNode`

- `element.children`, `element.firstElementChild`, `element.lastElementChild`

- `element.nextElementSibling`, `element.previousElementSibling`

- `element.closest()`

- `element.querySelector()` and `element.querySelectorAll()` when searching within a specific element's descendants.

---

## How to Use This Repository
Each lesson likely has a corresponding HTML and JavaScript file (e.g., `index.html` and `script.js`) demonstrating the concepts.

### 1. Clone this repository:

```Bash
git clone https://github.com/Lumnaire/javascript_dom_manipulation.git
```

### 2.Navigate to the project directory:

```Bash
cd javascript_dom_manipulation
```

### 3. Open the `index.html` files in your web browser to see the examples in action, and inspect the linked JavaScript files (`script.js`) to understand the code.

Feel free to experiment with the code, modify the examples, and build your own DOM manipulation exercises!

---

#### Happy Coding! 💻