document.getElementById('addToDoBtn').addEventListener('click', addList);

function addList(){
  let contents=document.querySelector('.addToDoInfo');
  if(!contents.value) {
    alert('내용을 입력해주세요.');
    contents.focus();
    return false;
  }

  let tr = document.createElement('tr');
  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'checkBtn');

  let td01 = document.createElement('td');
  td01.appendChild(input);
  tr.appendChild(td01);

  let td02 = document.createElement('td');
  td02.innerHTML = contents.value;
  tr.appendChild(td02);

  document.getElementById('tableBody').appendChild(tr);
  contents.value='';
  contents.focus();
  localStorage['table'] = document.querySelector('.toDoTable').innerHTML;
}

if(localStorage['table']){
  document.querySelector('.toDoTable').innerHTML = localStorage['table'];
}