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
    let img = document.createElement('img');
    img.src = './delete-icon.png';
    img.alt = 'x';
    img.addEventListener('click', deleteList);
    li.appendChild(img);
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);
}

function clearAll(){ //모두 삭제
    document.querySelector('ul').innerHTML = '';
}

function deleteList(e){
    let targetLi = e.target.parentNode;
    let liParent = targetLi.parentNode;
    liParent.removeChild(targetLi);
}