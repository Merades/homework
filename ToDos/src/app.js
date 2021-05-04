
const todos = [
    { name: 'task1', key: 1, status: 'overdue' },
    { name: 'task2', key: 2, status: 'overdue' },
    { name: 'task3', key: 3, status: 'done' },
    { name: 'task4', key: 4, status: 'active' },
    { name: 'task5', key: 5, status: 'active' },
    { name: 'task6', key: 6, status: 'active' },
    { name: 'task7', key: 7, status: 'active' }
  ];
  
  const parent = document.querySelector('body > div > div:nth-child(4) > ul');
  


  const renderList = function (){
    parent.innerHTML = ''; 
    todos.forEach(element =>{
      let newLi = document.createElement("li");
      let newDiv = document.createElement("div");
      let newInput = document.createElement("input");
      let newSpan = document.createElement("span");
      let newButton = document.createElement("button");
      //newLi.innerText = `${element.name}`;
      newSpan.innerText = `${element.name}`;
      newButton.classList.add('destroy');
      newInput.setAttribute('type', 'checkbox');
      newInput.classList.add('toggle');
      newDiv.append(newInput, newSpan, newButton);
      newDiv.classList.add('todo');
      newLi.appendChild(newDiv);
      parent.appendChild(newLi);
  
      newLi.onclick = function () {
        newLi.classList.add('completed');
      }
  
      newLi.ondblclick = function () {
        newLi.classList.remove('completed');
      }
  
      newLi.onmouseover = function(){
        newLi.style.border = '1px solid gray';
      }
      newLi.onmouseout = function(){
        newLi.style.border = '';
      }
  
      // parent.innerHTML += `<li ${element.key}>
      //                           ${element.name}
      //                      </li>`;
      //                      console.log(element);
    });
  }
  
  
  // todos.forEach(element =>{
  //   let newLi = document.createElement("li");
  //   let newDiv = document.createElement("div");
  //   let newInput = document.createElement("input");
  //   let newSpan = document.createElement("span");
  //   let newButton = document.createElement("button");
  //   //newLi.innerText = `${element.name}`;
  //   newSpan.innerText = `${element.name}`;
  //   newButton.classList.add('destroy');
  //   newInput.setAttribute('type', 'checkbox');
  //   newInput.classList.add('toggle');
  //   newDiv.append(newInput, newSpan, newButton);
  //   newDiv.classList.add('todo');
  //   newLi.appendChild(newDiv);
  //   parent.appendChild(newLi);

  //   newLi.onclick = function () {
  //     newLi.classList.add('completed');
  //   }

  //   newLi.ondblclick = function () {
  //     newLi.classList.remove('completed');
  //   }

  //   newLi.onmouseover = function(){
  //     newLi.style.border = '1px solid gray';
  //   }
  //   newLi.onmouseout = function(){
  //     newLi.style.border = '';
  //   }

  //   // parent.innerHTML += `<li ${element.key}>
  //   //                           ${element.name}
  //   //                      </li>`;
  //   //                      console.log(element);
  // });

let jjsBbarr = document.querySelector('#js-bar');

  //создаю див
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  // создаю span
  let span1 = document.createElement('span');
  // создаю ul
  let ul1 = document.createElement('ul');
  // создаю li
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  // создаю a
  let a1 = document.createElement('a');
  let a2 = document.createElement('a');
  let a3 = document.createElement('a');
  // создаю button
  let button1 = document.createElement('button');
  // даю ему класс
  div1.classList.add('col-1-4');
  div2.classList.add('col-1-2');
  div3.classList.add('col-1-4');
  ul1.classList.add('filter');
  a1.classList.add('button');
  a2.classList.add('button');
  a3.classList.add('button');
  span1.classList.add('total');
  button1.classList.add('button', 'button--clear');

  // создаю атрибут
  ul1.setAttribute('id', 'js-filters');
  a1.setAttribute('href', '#/all');
  a2.setAttribute('href', '#/active');
  a3.setAttribute('href', '#/completed');
  span1.setAttribute('id', 'js-total');
  button1.setAttribute('id', 'js-clear-completed');
  
  // текст
  a1.innerText = 'All';
  a2.innerText = 'Active';
  a3.innerText = 'Completed';
  button1.innerText = 'Clear Completed';

  // создаем связь
  div1.append(span1);
  div2.append(ul1);
  div3.append(button1);
  ul1.append(li1, li2, li3);
  li1.append(a1);
  li2.append(a2);
  li3.append(a3);
// пушим в html (пытаюсь своими словами надеюсь правильно понимаю)
jjsBbarr.append(div1, div2, div3);

a1.onclick = function (){
  alert('ALL');
}
a2.onclick = function(){
  alert('ACTIVE');
}
a3.onclick = function(){
  alert('COMPLETED');
} 
button1.onclick = function(){
  alert('Clear Completed');
}

renderList();


  let superFirst = document.createElement("li");
  superFirst.innerText = 'superFirst';
  parent.prepend(superFirst);

  let superLast = document.createElement("li");
  superLast.innerText = 'superLast';
  parent.append(superLast);

  let superMiddl = document.createElement("li");
  superMiddl.innerText = 'superMiddl';
  parent.insertBefore(superMiddl, parent.children[4]);


  
  //  for (let i = 0; i < todos.length; i++){
  //      let todo = todos[i];
  //      parent.innerHTML += `<li ${todo.key}>
  //                              ${todo.name}
  //                          </li>`;
  //                          console.log(todo);
  //  };
   
  
  
  const rowBar = document.querySelector('#js-total');
  rowBar.innerText = `${todos.length} items left`;
  
  const rowBarColor = document.querySelector('span');
  rowBarColor.style.backgroundColor = 'blue';
  
  const titleH = document.querySelector('h1');
  titleH.innerText = 'Hello world';
  titleH.style.color = 'red';


  const form = document.getElementById('insert__form');
  form.onsubmit = function(event){
    // убираем дефолтное событие 
    event.preventDefault();
    //
    let inputPush = event.currentTarget.firstElementChild;
    // добавляем новое значение
    todos.push(
      { name: inputPush.value, key: 8, status: 'active'}
    );
    inputPush.value = '';
    renderList();
    console.log('todos', todos);
  }
  
  
  