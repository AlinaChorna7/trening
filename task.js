

    document.addEventListener('DOMContentLoaded',  () => {
        const input = document.getElementById('todo-input');
        const button = document.getElementById('input-button');
        const list = document.getElementById('todo-list');

        button.addEventListener('click', () => {
            const taskText = input.value.trim();
            if(taskText !== ''){
                const listItem = document.createElement('li');
                listItem.classList.add('todo-item');
                listItem.innerHTML = `<span class="task-text">${taskText}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>`;
                list.appendChild(listItem);
                input.value= '';
            }
        });

        list.addEventListener('click', (event) => {
            const target = event.target;
            if(target.classList.contains('delete-btn')){
                target.parentElement.remove();
            } else if( target.classList.contains('edit-btn')){
                const listItem = target.parentElement;
                const taskText = listItem.querySelector('.task-text').textContent;
                const newTaskText = prompt('Edit task', taskText);
                if (newTaskText !== null){
                    listItem.querySelector('.task-text').textContent = newTaskText.trim();
                }
            } else if(target.classList.contains('task-text')){
                target.parentElement.classList.toggle('comleted');
            }
        });
    });

