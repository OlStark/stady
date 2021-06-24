'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    todoRemove = document.querySelector('.todo-remove');

    const todoData = [
        {
            value: 'Сварить кофе',
            complited: false
        },
        {
            value: 'Помыть посуду',
            complited: true
        },
    ];

    const render = function() {
        todoList.textContent = '';
        todoCompleted.textContent = '';

        todoData.forEach(function(item){

            const li = document.createElement('li');
            li.classList.add('todo-item');

            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' + 
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
            '</div>';

            if(item.complited) {
                todoCompleted.append(li);
            }else{
                todoList.append(li);
            }

            const btntodoComplete = li.querySelector('.todo-complete'),
                todoRemove = li.querySelector('.todo-remove');
              
            todoRemove.addEventListener('click', function(){
                document.removeChild(li);
                render();
            });

            btntodoComplete.addEventListener('click', function(){
                item.complited = !item.complited;
                render();
            });
        });
    };

    todoControl.addEventListener('submit', function(event){

        event.preventDefault();

        const newTodo = {
            value: headerInput.value,
            complited: false
        };

        todoData.push(newTodo);

        render();
    });

   
    render();