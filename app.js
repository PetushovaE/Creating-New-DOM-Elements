const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
if (listDiv.style.display == 'none'){
listDiv.style.display = 'block';
toggleList.textContent = 'Hide list';
} else {
toggleList.textContent = 'Show list';
listDiv.style.display = 'none';
}
});

descriptionButton.addEventListener('click', () => {
descriptionP.innerHTML = descriptionInput.value + ':';
});

addItemButton.addEventListener('click', () => {
let li = document.createElement('li');
li.textContent = addItemInput.value;
})