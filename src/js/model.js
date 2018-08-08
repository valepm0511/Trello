window.model = {};

window.model.validaLargoNuevaLista = (valorListaNueva) =>{
	console.log(valorListaNueva);
	console.log("valorListaNueva largo "+valorListaNueva.length);
	if(valorListaNueva.length > 0){
		return true;
	}else{
		alert("debe tener contenido");
		return false;
	}

}


window.model.focusInput = (inputLista) =>{
	inputLista.focus();
}