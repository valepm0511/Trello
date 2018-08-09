window.view = {};
// funcion que muestra recuadro de crear lista
window.view.addList = () => {
  let divAddList = document.getElementById('addList');
  divAddList.innerHTML =
  `<div class="col-12 bg-white p-3  mb-3 contAddList">
  <form class="form-inline">
  <input type="text" class="form-control mb-2 col-12" id="nameList" placeholder="Ingrese nombre de la Lista" required>
  </form>
  <button class="btn btn-info" onclick="window.view.addNewList()">Añadir</button>
  <button class="btn btnCloseList" onclick="window.view.closeList()"><i class="fas fa-times"></i></button>
  </div>`;
  window.model.focusInput(document.getElementById('nameList'));
};

// funcion para cerrar recuadro para crear las listas
window.view.closeList = () => {
  let divAddList = document.getElementById('addList');
  divAddList.innerHTML =
  `<button type="button" class="btn col-12 btnAddList" onclick="window.view.addList()"><span class="float-left">
  <i class="fas fa-plus"></i>Añadir una lista</span></button>`;
};

// funcion para crear las listas 
window.view.addNewList = () => {
  let nameList = document.getElementById('nameList').value;
  // funcion para validar que a la lista se le ponga un nombre
  if (window.model.validateLengthNewList(nameList)){
    document.getElementById('nameList').value = '';
    let divNewList = document.getElementById('newList');
    let cantDiv = document.getElementsByClassName("contNewList").length;
    console.log("cantidad de div",cantDiv);
    divNewList.innerHTML += 
    `<div class="col-3 pt-3 pb-3 mb-3 contNewList order-1 ml-3">
    <p class="d-inline text-white">${nameList}</p>
    <button class="btn float-right btnNewListIcon"><i class="fas fa-ellipsis-h text-white"></i></button>
    <div id="newListTextArea${cantDiv}">
    <button class="btn mt-3 col-12 btnNewList px-0 displayBlock" onclick="window.view.newList(${cantDiv})" id="btnaddTextArea"><i class="fas fa-plus"></i> Añadir nueva Tarea</button>
    </div>
    <div id="buttonTextArea${cantDiv}">
    </div>
    </div>`;
  }
};

// funcion para agragar nueva lista de tareas
window.view.newList = (codID) => {

  let newListTextArea = document.getElementById('buttonTextArea'+codID);
  document.getElementById('newListTextArea'+codID).innerHTML = '';
  newListTextArea.innerHTML = 
  `<div class="form-group displayBlock" id="constTextArea">
  <textarea class="form-control mt-2" rows="5" id="textAreaList${codID}" placeholder="Ingrese tareas" required></textarea>
  <button class="btn btn-warning col-12 text-white mt-2" onclick="window.view.viewTextArea(${codID})">Añadir Lista</button>
  </div>  
  `;
  window.model.focusInput(document.getElementById('textAreaList'+codID));
};

// funcion para escribir texto en textarea
window.view.viewTextArea = (codID) => {
  let textAreaList = document.getElementById('textAreaList'+codID).value;
  document.getElementById('textAreaList'+codID).value = '';
  if (window.model.validateLengthTextArea(textAreaList)){
    let newListTextArea = document.getElementById('newListTextArea'+codID);
    newListTextArea.innerHTML += 
    `<div class="col-12 textAreaStyle"> 
    <p>${textAreaList}</p>
    </div>
    `;
    /*newListTextArea.innerHTML += 
    `<div id="newListTextArea">
    <textarea class="form-control" rows="5" id="textAreaList" placeholder="Ingrese tareas" required></textarea>
    <button class="btn btn-warning col-12 text-white mt-2" onclick="window.view.viewTextArea()">Añadir Lista</button>
    </div>
    `;*/
  }
};
