//By ID

const mainTitle = document.getElementById('main-title');
console.log(mainTitle); // Outputs the <h1> element

// By Class Name (returns HTMLCollection)
const introParagraphs = document.getElementsByClassName('intro-paragraph');
console.log(introParagraphs); // Outputs HTMLCollection [p, p]
console.log(introParagraphs[0]); // Outputs the first <p> element

// By Tag Name (returns HTMLCollection)
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs); // Outputs HTMLCollection [p, p]

// Using querySelector (first match)
const firstParagraph = document.querySelector('.intro-paragraph');
console.log(firstParagraph); // Outputs the first <p> element

const highlightSpan = document.querySelector('div .highlight'); // Selects span inside div
console.log(highlightSpan);

// Using querySelectorAll (all matches)
const allButtons = document.querySelectorAll('button');
console.log(allButtons); // Outputs NodeList [button]