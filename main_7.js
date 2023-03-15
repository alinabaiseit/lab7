const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.textContent = 'Lab7 Assignment';
h1.style.color = 'blue';
body.appendChild(h1);

const hr1 = document.createElement('hr');
body.appendChild(hr1);

const h2 = document.createElement('h2');
h2.textContent = 'Task';
h2.style.color = 'red';
body.appendChild(h2);

const p1 = document.createElement('p');
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
body.appendChild(p1);

const ul = document.createElement('ul');
body.appendChild(ul);

const li1 = document.createElement('li');
li1.textContent = 'find elements in the DOM (5 points)';
li1.style.color = 'green';
li1.classList.add('even');
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'create/add/remove elements (5 points)';
li2.style.color = 'purple';
li2.classList.add('odd');
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'change content of the elements (5 points)';
li3.style.color = 'green';
li3.classList.add('even');
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.textContent = 'change styles of the elements (5 points)';
li4.style.color = 'purple';
li4.classList.add('odd');
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.textContent = 'change attributes of the elements (5 points)';
li5.style.color = 'green';
li5.classList.add('even');
ul.appendChild(li5);

const li6 = document.createElement('li');
li6.textContent = 'change classes of the elements (5 points)';
li6.style.color = 'purple';
li6.classList.add('odd');
ul.appendChild(li6);

const p2 = document.createElement('p');
p2.textContent = ' ';
body.appendChild(p2);

const hr2 = document.createElement('hr');
body.appendChild(hr2);

const h3 = document.createElement('h2');
h3.textContent = 'Submission';
h3.style.color = 'red';
body.appendChild(h3);

const p3 = document.createElement('p');
p3.textContent = 'To submit your work, follow these instructions:';
body.appendChild(p3);

const ul2 = document.createElement('ul');
body.appendChild(ul2)

const li7 = document.createElement('li');
li7.textContent = 'Create a new repository on Github, named lab7 (1 point)';
li7.style.color = 'green';
li7.classList.add('even');
ul2.appendChild(li7);

// Create and add the second list item element
const li8 = document.createElement('li');
li8.textContent = 'Clone this repository to your local machine and work inside it.';
li8.style.color = 'purple';
li8.classList.add('odd');
ul2.appendChild(li8);

// Create and add the third list item element
const li9 = document.createElement('li');
li9.textContent = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point)';
li9.style.color = 'green';
li9.classList.add('even');
ul2.appendChild(li9);

// Create and add the fourth list item element
const li10 = document.createElement('li');
li10.textContent = 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point)';
li10.style.color = 'purple';
li10.classList.add('odd');
ul2.appendChild(li10);

// Create and add the fifth list item element
const li11 = document.createElement('li');
li11.textContent = 'Link this main.js file to your index.html file (Note: place your script at the end of the body section)';
li11.style.color = 'green';
li11.classList.add('even');
ul2.appendChild(li11);

// Create and add the sixth list item element
const li12 = document.createElement('li');
li12.textContent = 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points)';
li12.style.color = 'purple';
li12.classList.add('odd');
ul2.appendChild(li12);

const li13 = document.createElement('li');
li13.textContent = 'After you finish your work, submit it to the Github (2 points)';
li13.style.color = 'green';
li13.classList.add('even');
ul2.appendChild(li13);