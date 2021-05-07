
const todos = [
    { name: 'task1', key: 1, status: 'overdue' },
    { name: 'task2', key: 2, status: 'overdue' },
    { name: 'task3', key: 3, status: 'done' },
    { name: 'task4', key: 4, status: 'active' },
    { name: 'task5', key: 5, status: 'active' },
    { name: 'task6', key: 6, status: 'active' },
    { name: 'task7', key: 7, status: 'active' }
  ];

  window.todos = todos;

  let filter = false;
  
  let parent = document.querySelector('body > div > div:nth-child(4) > ul');
  
  const renderList = function (){
    parent.innerHTML = '';
    
    let todoList = [];

    if(filter && filter !== 'all') {
      todoList = todos.filter((element) => {
        return element.status === filter;
      });
    } else {
      todoList = [...todos];
    }
    
    console.log(todoList);

    for(let i = 0; i < todoList.length; i++){
      let todo = todoList[i];
      let newLi = document.createElement("li");
      let newDiv = document.createElement("div");
      let newInput = document.createElement("input");
      let newSpan = document.createElement("span");
      let newButton = document.createElement("button");
      //newLi.innerText = `${element.name}`;
      newSpan.innerHTML = `<div>${todo.name}</div>`;
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
    };
  };
  
  renderList();
  renderBar();


  function renderBar(){
    const jjsBbarr = document.querySelector('#js-bar');
    jjsBbarr.innerHTML = '';

  //создаю див
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  // создаю span
  let span1 = document.createElement('span');
  // создаю ul
  let ul1 = document.createElement('ul');
  // создаю li
  // let li1 = document.createElement('li');
  // let li2 = document.createElement('li');
  // let li3 = document.createElement('li');
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
  // a1.classList.add('button', 'selected');
  // a2.classList.add('button');
  // a3.classList.add('button');
  span1.classList.add('total');
  button1.classList.add('button', 'button--clear');

  // создаю атрибут
  ul1.setAttribute('id', 'js-filters');
  // a1.setAttribute('href', '#/all');
  // a2.setAttribute('href', '#/active');
  // a3.setAttribute('href', '#/completed');
  span1.setAttribute('id', 'js-total');
  button1.setAttribute('id', 'js-clear-completed');

  ul1.innerHTML = '<li><a href="#/all" data-status="all" class="button selected"><span>All</span></a></li>' +
  '  <li><a href="#/active" data-status="active" class="button"><span>Active</span></a></li>' +
  '  <li><a href="#/completed" data-status="done" class="button"><span>Completed</span></a></li>';
  
  // текст
  a1.innerText = 'All';
  a2.innerText = 'Active';
  a3.innerText = 'Completed';
  button1.innerText = 'Clear Completed';

  // создаем связь
  div1.append(span1);
  div2.append(ul1);
  div3.append(button1);
  // ul1.append(li1, li2, li3);
  // li1.append(a1);
  // li2.append(a2);
  // li3.append(a3);
// пушим в html (пытаюсь своими словами надеюсь правильно понимаю)
jjsBbarr.append(div1, div2, div3);

let links = document.querySelectorAll('#js-filters > li');

links.forEach(function(element){

  element.addEventListener('click', function(event){
    let links = document.querySelectorAll('a.selected');

    links.forEach(function(element){
      element.classList.remove('selected');
    });
    let {currentTarget} = event;

    currentTarget.children[0].classList.add('selected');
    filter = currentTarget.children[0].dataset.status;
    renderList();
  })
});

  const rowBar = document.querySelector('#js-total');
  rowBar.innerText = `${todos.length} items left`;
  
};
 
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
    renderBar();
    renderList();
  }
  
  
  