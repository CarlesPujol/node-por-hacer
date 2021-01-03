const descripcion ={
		demand:true,
		alias:'d',
		desc:'Descripcion de la tarea a hacer'
}

const completado={
		alias:'c',
		default:true,
		desc:'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
	.command('crear','Crear un elemento por hacer',{
		descripcion
	})
	.command('actualizar','Actualiza el estado de la tarea',{
		descripcion,
		completado
	})
	.command('borrar','Borra la tarea',{
		descripcion
	})	
	.help()
	.argv;
	
module.exports = {
	argv
}