window.view = {}
//funcion que muestra recuadro de crear lista
window.view.addList = () => {
  let divAddList = document.getElementById('addList');
  divAddList.innerHTML =
  `<div class="col-12 bg-white p-3 contAddList">
  <form class="form-inline">
  <input type="text" class="form-control mb-2 col-12" id="nameList" placeholder="Ingrese nombre de la Lista">
  </form>
  <button class="btn btn-info" onclick="window.view.addNewList()">Añadir</button>
  <button class="btn btnCloseList" onclick="window.view.closeList()"><i class="fas fa-times"></i></button>
  </div>
  `;
  window.model.focusInput(document.getElementById("nameList"));
}

//funcion para cerrar recuadro para crear lasl istas
window.view.closeList = () => {
  let divAddList = document.getElementById('addList');
  divAddList.innerHTML =
  `<button type="button" class="btn col-3 btnAddList" onclick="window.view.addList()"><span class="float-left"><i class="fas fa-plus"></i> Añadir una lista</span></button>`;
}

//funcion para crear las listas 
window.view.addNewList = () => {
  let nameList = document.getElementById('nameList').value;
  //funcion para validar que a la lista se le ponga un nombre
  if(window.model.validaLargoNuevaLista(nameList)){
    document.getElementById('nameList').value = '';
    document.getElementById('newList').classList.remove('displayNone');
    document.getElementById('newList').classList.add('displayBlock');
    let divNewList = document.getElementById('newList');
    divNewList.innerHTML = 
    `<div class="col-12 pt-3 pb-3 contNewList">
    <p class="d-inline text-white">${nameList}</p>
    <button class="btn float-right btnNewListIcon"><i class="fas fa-ellipsis-h text-white"></i></button>
    <div id="newListTextArea">
    <button class="btn mt-3 col-12 btnNewList px-0 displayBlock" onclick="window.view.newList()" id="btnaddTextArea"><i class="fas fa-plus"></i> Añadir nueva Tarea</button>
    </div>
    </div>
    `;
  }
}

//funcion para agragar nueva lista de tareas
window.view.newList = () => {
  let newListTextArea = document.getElementById('newListTextArea');
  // document.getElementById('btnaddTextArea').classList.remove('displayBlock');
  // document.getElementById('btnaddTextArea').classList.add('displayNone');

  newListTextArea.innerHTML = 
  `<div class="form-group displayBlock" id="constTextArea">
  <textarea class="form-control" rows="5" id="textAreaList"></textarea>
  <button class="btn" onclick="window.view.viewTextArea()">añadir lista</button>
  </div>  
  `;
  window.model.focusInput(document.getElementById("textAreaList"));
}

window.view.viewTextArea = () => {
  let textAreaList = document.getElementById('textAreaList').value;
  document.getElementById('textAreaList').value = "";
  // document.getElementById('constTextArea').classList.remove('displayBlock');
  // document.getElementById('constTextArea').classList.add('displayNone');
  let newListTextArea = document.getElementById('newListTextArea');
  newListTextArea.innerHTML = 
  `<div class="col-12 textAreaStyle"> 
  <p>${textAreaList}</p>
  </div>
  <div id="newListTextArea">
  <button class="btn mt-3 col-12 btnNewList px-0" onclick="window.view.newList()" id="btnaddTextArea"><i class="fas fa-plus"></i> Añadir nueva Tarea</button>
  </div>
  `;
}