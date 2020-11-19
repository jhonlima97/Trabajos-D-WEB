function guardarDato(){
    // Capturando Variables
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;
    
    const datos = {
        'movil': movil,
        'email': email,
    }
    // Almacenando los datos
    localStorage.setItem(nombre, JSON.stringify(datos));
    // Borrando los datos
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    // Actualizando la lista
    actualizarDatos();
}

function recuperarDato(){
     // Capturando el nombre
     const nombre = document.getElementById("nombre").value;
     // Parseando los datos
     let datos = localStorage.getItem(nombre);
     datos = JSON.parse(datos);
     // Incluyendo los datos en el HTML
     document.getElementById("movil").value = datos.movil;
     document.getElementById("email").value = datos.email;
 }

function eliminarDato(){
    const nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    const registro = "";
    // Verificando si existen datos
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
        // Enriqueciendo "elementos" con cada par de valores almacenados
        for (const i = 0; i <= localStorage.length - 1; i++) {
            const key = localStorage.key(i);
            // Parseando los datos 
            //let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);
            // Enriqueciendo los datos con HTML
            registro += '<li>' + '<span class="nom">' + key + '</span>'
            + '<span class="nom">' + datos.movil + '</span>'
            + '<span class="nom">' + datos.email + '<li><br>';
            //<a href="tel:+34${datos.movil}"><p> <span class="movil" ></span> ${datos.movil}</p></a>;
            //<a href="mailto:${datos.email}"><p> <span class="email" ></span> ${datos.email}</p></a>
            // Enriqueciendo los datos con HTML
            //   registro += `<li>
            //     <div class="col-xs-9">
            //       <p><b>${key}</b></p>
            //       <a href="tel:+34${datos.movil}"><p> <span class="movil" ></span> ${datos.movil}</p></a>
            //       <a href="mailto:${datos.email}"><p> <span class="email" ></span> ${datos.email}</p></a>
            //     </div>
            // </div>`;
        }
    }
    // Actualizando "#contactos" con los "elementos" previamente enriquecidos
    document.getElementById('contactos').innerHTML = elementos;
}
//actualizarDatos();

            