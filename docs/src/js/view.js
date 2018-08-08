window.view = {}
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
}
window.view.closeList = () => {
  let divAddList = document.getElementById('addList');
  divAddList.innerHTML =
  `<button type="button" class="btn col-3 btnAddList" onclick="window.view.addList()"><span class="float-left"><i class="fas fa-plus"></i> Añadir una lista</span></button>`;
}

window.view.addNewList = () => {
  let nameList = document.getElementById('nameList').value;
  document.getElementById('nameList').value = '';
  document.getElementById('newList').classList.remove('displayNone');
  document.getElementById('newList').classList.add('displayBlock');
  let divNewList = document.getElementById('newList');
  divNewList.innerHTML += 
  `<div class="col-12 pt-3 pb-3 contNewList">
  <p class="d-inline text-white">`+nameList+`</p>
  <button class="btn float-right btnNewListIcon"><i class="fas fa-ellipsis-h text-white"></i></button>
  <button class="btn mt-3 col-12 btnNewList px-0"><i class="fas fa-plus"></i> Añadir nueva Tarea</button>
  </div>`;

}