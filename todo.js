document.querySelector('.submit').addEventListener('click', addToDo);
document.querySelector('.clear').addEventListener('click', clearAll);


function addToDo(e){ //할 일 추가
    e.preventDefault();
    let toDoValue = document.querySelector('input').value;
    if(toDoValue !== ''){
        addTask(toDoValue);
        toDoValue = ''; //입력창 초기화
    }
}
function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `${value}`
    ul.appendChild(li);
}

function clearAll(){ //모두 삭제
    document.querySelector('ul').innerHTML = '';
}