function menuDrop(idContenedor, tituloBoton, opciones) {

    const contenedor = document.getElementById(idContenedor);

    const divPrincipal = document.createElement('div');
    divPrincipal.className = 'mi-dropdown';

    const boton = document.createElement('button');
    boton.textContent = tituloBoton + ' ▼';

    const lista = document.createElement('ul');
    lista.className = 'menu-desplegable';

    opciones.forEach(opcionTexto => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${opcionTexto}</a>`; 
        lista.appendChild(li);
    });

    boton.addEventListener('click', function() {
        if (lista.style.display === 'block') {
            lista.style.display = 'none';
        } else {
            lista.style.display = 'block';
        }
    });

    divPrincipal.appendChild(boton);
    divPrincipal.appendChild(lista);
    contenedor.appendChild(divPrincipal);
}


// En este apartado vienen las opciones, cuando emplees este componente modificalo para tus necesidades.
const opcionesDeUsuario = [
    "Mi perfil",
    "Ajustes",
    "Suscripción",
    "Privacidad y términos",
    "Ayuda",
    "Cerrar sesión"
];

menuDrop('menu-1', 'Opciones', opcionesDeUsuario);