window.model = {};
// funcion para validar que a la lista se le ponga un nombre
window.model.validateLengthNewList = (valueListNew) =>{
	if (valueListNew.length > 0){
		return true;
	}else{
		// alert("debe tener contenido");
		return false;
	}
}

// funcion para validar que textarea no qyede vacio
window.model.validateLengthTextArea = (valueTextArea) =>{
	if(valueTextArea.length > 0){
		return true;
	}
	else
	{
		// alert("debe tener contenido");
		return false;
	}
}

// focus input
window.model.focusInput = (inputLista) =>{
	inputLista.focus();
}
// focus textarea
window.model.focusInput = (TextArea) =>{
	TextArea.focus();
}