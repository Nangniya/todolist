document.querySelector('.submit').addEventListener('click', addToDo);
document.querySelector('.clear').addEventListener('click', clearAll);

function addToDo(e){ //할 일 추가
    e.preventDefault();
    let toDoValue = document.querySelector('input').value;
    if(toDoValue !== ''){
        addTask(toDoValue);
        document.querySelector('input').value = ''; //입력창 초기화
    }
    document.querySelectorAll('.trash').forEach(item => { //삭제 이벤트 부여
        item.addEventListener('click', deleteList);
    });
    document.querySelectorAll('.check').forEach(item => { //체크박스 이벤트 부여
        item.addEventListener('click', checkToggle);
    });
}
function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.setAttribute('data-count','0');
    li.innerHTML = 
    `<input type="checkbox" id="td" class = "check"><label for="td"><span>${value}</span></label><button class="trash"><i class="fa-solid fa-trash"></i></button>`;
    ul.appendChild(li);
}

function clearAll(){ //모두 삭제
    document.querySelector('ul').innerHTML = '';
}

function deleteList(e) { //개별 삭제
        let targetLi = e.currentTarget.parentNode;
        let liParent = targetLi.parentNode;
        liParent.removeChild(targetLi);
}

function checkToggle(e) { //체크 toggle
    const todo = e.target.nextSibling;
    todo.classList.toggle('cancelLine');
}