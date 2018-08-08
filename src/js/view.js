window.view = {}
window.view.addList = () =>{
  let divAddList = document.getElementById('addList');
  divAddList.innerHTML =
  `<div class="col-3 bg-white p-3 contAddList">
  <form class="form-inline">
  <input type="text" class="form-control mb-2 col-12" placeholder="Ingrese nombre de la Lista">
  </form>
  <button class="btn btn-info">Añadir</button>
  <button class="btn btnCloseList"><i class="fas fa-times"></i></button>
  </div>
  `;
}