const assert = require('chai').assert;
global.window = global;
//enlaza el archivo
require('../src/js/view.js');
//descripcion de la validacion
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
	it('probando si tira error',() =>{
		assert.isFunction(window.view.funcionQueNoExiste);
	});
});