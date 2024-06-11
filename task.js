document.addEventListener('DOMContentLoaded', () =>{
    const itemInput = document.getElementById('item-input');
    const addItemButton = document.getElementById('add-item');
    const itemList = document.getElementById('item-list');

    addButton.addEventListener('click', () =>{
        const itemText = itemInput.value.trim();
if (itemText !== ''){
const listItem = document.createElement('li');
listItem.innerHTML =     `<span class="item-text">${itemText}</span>
<button class="delete-btn">Delete</button>`
itemList.appendChild(listItem);
itemInput.value = '';
};
    });

    itemList.addEventListener('click', (event)=>{
        const target = event.target;
        if(target.classList.contains('delet-btn')){
            target.parentElement.remove();
        } else if ( target.classList.contains('item-text')){
            target.parentElement.classList.toggle('bought')
        }
    })
})




