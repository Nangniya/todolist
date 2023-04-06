document.querySelector('.submit').addEventListener('click', addToDo);
document.querySelector('.clear').addEventListener('click', clearAll);
document.addEventListener('DOMContentLoaded', () => { //로드될 때 로컬스토리지에서 가져오기
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => addTask(task));
    }
    document.querySelectorAll('.trash').forEach(item => {
        item.addEventListener('click', deleteList);
    });
    document.querySelectorAll('.check').forEach(item => {
        item.addEventListener('click', checkToggle);
    });
});

function addToDo(e){ //할 일 추가
    e.preventDefault();
    let toDoValue = document.querySelector('input').value;
    if(toDoValue !== ''){
        addTask(toDoValue);
        document.querySelector('input').value = ''; //입력창 초기화
        saveToLocalStorage(); //로컬스토리지 저장
    }
    document.querySelectorAll('.trash').forEach(item => { //삭제 이벤트 부여
        item.addEventListener('click', deleteList);
    });
    document.querySelectorAll('.check').forEach(item => { //체크박스 이벤트 부여
        item.addEventListener('click', checkToggle);
    });
}
function saveToLocalStorage() { //로컬스토리지 저장
    const tasks = document.querySelectorAll('li span');
    const tasksArr = [];
    tasks.forEach(task => tasksArr.push(task.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
}
function addTask(value){ //리스트 추가
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.setAttribute('data-count','0');
    li.innerHTML = 
    `<p class="check">🥚</p><label for="td"><span>${value}</span></label><button class="trash"><i class="fa-solid fa-trash"></i></button>`;
    ul.appendChild(li);
}

function clearAll(){ //모두 삭제
    const result = confirm('모두 삭제하시겠습니까?')
    if(result){
        document.querySelector('ul').innerHTML = '';
        localStorage.removeItem('tasks'); //로컬스토리지에서 모두 삭제
    }
}

function deleteList(e) { //개별 삭제
        let targetLi = e.currentTarget.parentNode;
        let liParent = targetLi.parentNode;
        const result = confirm(`${targetLi.textContent}를 삭제하시겠습니까?`)
        if(result){
            const spanText = targetLi.querySelector('span').textContent;
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            const updatedTasks = tasks.filter(task => task !== spanText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            liParent.removeChild(targetLi);
        }
}

function checkToggle(e) { //체크 toggle
    const todo = e.target.nextSibling;
    const li = e.target.parentNode;
    let count = parseInt(li.getAttribute('data-count')); //포스트잇
    todo.classList.toggle('cancelLine');
    count += 1;
    li.setAttribute('data-count', count);
    if (count % 2 == 1) {
      e.target.textContent = '🐣'; //완료상태
    } else {
      e.target.textContent = '🥚'; //미완료상태
    }
  }