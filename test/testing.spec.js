const assert = require('chai').assert;
global.window = global;
//enlaza el archivo
require('../src/js/view.js');
require('../src/js/model.js');
//validando funciones
describe('funciones que debe exponer', () =>{
	//descripcion mas especifica de la validacion
	it('funcion de crear lista',() =>{
		assert.isFunction(window.view.addList);
	});
	it('funcion para cerrar lista',() =>{
		assert.isFunction(window.view.closeList);
	});
	it('funcion lista ya creada',() =>{
		assert.isFunction(window.view.addNewList);
	});
});

//valiando campos de textos vacios
describe('funciones que debe exponer', () =>{
	//descripcion mas especifica de la validacion
	it('verificar si input contiene texto',() =>{
		assert.equal(window.model.validateLengthNewList('cadena de texto'), true);
		assert.equal(window.model.validateLengthNewList(''), false);
	});
	it('verificar si textarea contiene texto',() =>{
		assert.equal(window.model.validateLengthTextArea('cadena de texto'), true);
		assert.equal(window.model.validateLengthTextArea(''), false);
	});
	
});