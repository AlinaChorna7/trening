document.addEventListener('DOMContentLoaded', () =>{
    const nameInput = document.getElementById('contact-name');
    const phoneInput = document.getElementById('contact-phone');
    const addButton   = document.getElementById('add-contact');
    const contactList = document.getElementById('contact-list')

    addButton.addEventListener('click', ()=>{
        const nameItem = nameInput.value.trim();
        const phoneItem = phoneInput.value.trim();
        if (nameInput !== '' && phoneInput !== ''){
const contactList = document.createElement('li');
listItem.innerHTML = `<span class="contact-name">${nameItem}</span>
<span class="contact-phone">${phoneItem}</span>
<button class="delete-btn">Delete</button>`;
listItem.appendChild(contactList);
nameInput.value = '';
phoneInput.value = '';
        } else{
            alert ('Please enter both name and phone number.');
        };


    });

    contactList.addEventListener('click', (event) =>{
        
        if(event.target.classList.contains('delete-btn')){
            event.target.parentElement.remove()
        }
    })
})




