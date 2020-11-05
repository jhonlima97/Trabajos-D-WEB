function cadenas(){
    var textos = "Diseño web lima";
    var contador = textos.length;

    document.write(contador)
}

function buscar(){
    var nombresArray = ["juan", "pedro", "luis", "julia"];
	var usuario = prompt("Introduce un nombre: ");
	usuario = usuario.toUpperCase();
	posicion = nombresArray.indexOf(usuario);

		if(posicion == -1){
		alert("No se ha encontrado el nombre introducido");
		}
		else{
		alert(nombresArrays.indexOf(usuario));
		}
}