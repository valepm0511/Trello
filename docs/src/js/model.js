window.model = {};
//funcion para validar que a la lista se le ponga un nombre
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

//focus input
window.model.focusInput = (inputLista) =>{
	inputLista.focus();
}
//focus textarea
window.model.focusInput = (TextArea) =>{
	TextArea.focus();
}