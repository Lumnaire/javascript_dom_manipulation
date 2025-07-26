const todoList = document.getElementById('todo-list');
const commentsSection = document.getElementById('comments-section');

const todos = ['Learn DOM Manipulation', 'Build a small app', 'Practice JavaScript'];
const comments = [
    { author: 'Alice', text: 'Great explanation!', date: '2025-07-20' },
    { author: 'Bob', text: 'Very helpful examples.', date: '2025-07-21' },
    { author: 'Charlie', text: 'I understand now!', date: '2025-07-22' }
];

// Rendering To-Do List
todos.forEach(todoText => {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
});

// Rendering User Comments (more complex structure)
comments.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.style.border = '1px solid #ccc';
    commentDiv.style.padding = '10px';
    commentDiv.style.margin = '10px 0';
    commentDiv.style.borderRadius = '5px';

    const authorPara = document.createElement('p');
    authorPara.style.fontWeight = 'bold';
    authorPara.textContent = comment.author;

    const textPara = document.createElement('p');
    textPara.textContent = comment.text;

    const dateSpan = document.createElement('span');
    dateSpan.style.fontSize = '0.8em';
    dateSpan.style.color = '#666';
    dateSpan.textContent = `Posted on: ${comment.date}`;

    commentDiv.appendChild(authorPara);
    commentDiv.appendChild(textPara);
    commentDiv.appendChild(dateSpan);

    commentsSection.appendChild(commentDiv);
});