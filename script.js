// Select elements from the DOM
const mainTitle = document.getElementById('main-title');
const description = document.getElementById('description');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleElementBtn = document.getElementById('toggle-element-btn');
const dynamicText = document.getElementById('dynamic-text');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const container = document.getElementById('container');

// Event listener to change text content
changeTextBtn.addEventListener('click', () => {
    mainTitle.textContent = 'DOM Manipulation is Fun!';
    description.textContent = 'You just changed the text. Great job!';
    mainTitle.style.color = 'blue'; // Modify CSS style
    description.style.fontStyle = 'italic'; // Modify CSS style
});

// Event listener to toggle visibility of an element
toggleElementBtn.addEventListener('click', () => {
    if (dynamicText.style.display === 'none') {
        dynamicText.style.display = 'block';
    } else {
        dynamicText.style.display = 'none';
    }
});

// Event listener to add a new element
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added paragraph!';
    newElement.style.color = 'green'; // Modify CSS style
    container.appendChild(newElement);
});

// Event listener to remove the last added element
removeElementBtn.addEventListener('click', () => {
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});