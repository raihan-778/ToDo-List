console.log('hello')

//Caching the DOM elemnet.
const todoInput =   document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInfo  = document.querySelector('.todo-info');
//TODO

// 1.Capturing the HTML element.
// 2. After clicking the submit button
   //--->0.Capturing the user element.
   //--->1.Creating the todo div.
   //--->2.Creating the li element.
   //--->3.Creating the button.
   //--->4. Insert all the element into the div.
   //--->5.Insert the div element into the todo list div.
   //--->6.Clean the user input
   //3.Add event listener into check & trash button.
 //creat event listener
 //todoBtn event
 
 todoBtn.addEventListener('click', function(event){
      event.preventDefault();
      //Creating the user input
      
      const userInput = todoInput.value;
      console.log(userInput);
      if(userInput){
          //creating the todo div
          const todoDiv = document.createElement('div');
          todoDiv.className = 'todo';
          //creatin li element
          const li = document.createElement('li');
          li.className = 'todoItem';
          li.innerText = userInput
          //insert element into tododiv
          todoDiv.appendChild(li);
          //creating the button
          
          //-->check btn
          const checkBtn = document.createElement('button');
          checkBtn.className = 'check';
          checkBtn.innerHTML = '<i class="fas fa-check"></i>';
          todoDiv.appendChild(checkBtn);
          //-->trash btn
          const trashBtn = document.createElement('button');
          trashBtn.className = 'trash';
          trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
          todoDiv.appendChild(trashBtn);
          //-->edit btn
          const editBtn = document.createElement('button');
          editBtn.className = 'edit';
          editBtn.innerHTML = '<i class="far fa-edit"></i>';
          todoDiv.appendChild(editBtn);

          //appending div into todo list
          todoList.appendChild(todoDiv);
              //clearing the user input
              todoInput.value = '';//this will put after all task completed given up. 
              checkTodoList();
          }else alert('Input cannot be empty');
              //creatomg 
      })
  //add event listener in check & trash button
    todoList.addEventListener('click', function(e){
            const clickedEl = e.target;
              if(clickedEl.className == 'check'){ 
                  const todoDiv = clickedEl.parentElement;
                  todoDiv.classList.add('completed');
                  clickedEl.remove();
                
                } else if(clickedEl.className == 'trash'){
                    const todoDiv = clickedEl.parentElement;
                    todoDiv.classList.add('drop-effect');
                    //reomove list
                    todoDiv.addEventListener('transitionend', function(){
                      todoDiv.remove();
                      checkTodoList();
                    });
            }
            else if(clickedEl.className == 'edit'){
                  const todoDiv = clickedEl.parentElement;
                //  console.dir(todoDiv);
                const firstChild = todoDiv.children[0];
                //  console.log(firstChild);
                const input = document.createElement('input')
                input.type = 'text';
                input.value = firstChild.innerText;
                todoDiv.insertBefore(input, firstChild);
                firstChild.remove();
                clickedEl.innerHTML = '<i class="far fa-save"></i>';
                clickedEl.className = 'save';
               
            }
            else if(clickedEl.className == 'save'){
                const todoDiv = clickedEl.parentElement;
                const firstChild = todoDiv.children[0];
                const li = document.createElement('li');
                li.innerText = firstChild.value; 
                li.className = 'todo-item';
                todoDiv.insertBefore(li,firstChild);
                firstChild.remove();
                clickedEl.innerHTML = '<i class="far fa-edit"></i>';
                clickedEl.className = 'edit';

            }
})

   //user cant input empty tasks in the input field.
   //whent all tasks are completed a massage will be shown such as you have completed all the tasks.
   //edit the tasks.
   function checkTodoList(){
      if(todoList.children.length == 0){
        todoInfo.style.display = 'block';
      }else todoInfo.style.display = 'none';
     
   }
   checkTodoList();
   


 
 
 