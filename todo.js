document.querySelector('.submit').addEventListener('click', addToDo);
document.querySelector('.clear').addEventListener('click', clearAll);
document.querySelector('ul').addEventListener('click', deleteOrCheck);

function deleteOrCheck(e){ //개별 삭제 or 체크
    if (e.target.tagName === 'IMG') {
        deleteList(e);
      }
}

function addToDo(e){ //할 일 추가
    e.preventDefault();
    let toDoValue = document.querySelector('input').value;
    if(toDoValue !== ''){
        addTask(toDoValue);
        document.querySelector('input').value = ''; //입력창 초기화
    }
}
function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = 
    `<img src="./delete-icon.png" alt = "x"><label>${value}</label><input type="checkbox" class = "check">`;
    ul.appendChild(li);
}

function clearAll(){ //모두 삭제
    document.querySelector('ul').innerHTML = '';
}

function deleteList(e){ //개별 삭제
    let targetLi = e.target.parentNode;
    let liParent = targetLi.parentNode;
    liParent.removeChild(targetLi);
}