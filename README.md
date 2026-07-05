# Componente-Menu

**Autor:** Salinas Cenobio Leonel Isaac.
**Proyecto:** Librería de componentes visuales.


**Problematica que resuelve:** Permite agregar un menu desplegable con estilo minimalista a tu página sin ser pesado o complicado de usar.

# Instalación

Para añadir este componente en tu proyecto HTML, realiza lo siguiente:

1. Coloca el archivo `componente.css` en tu carpeta `css/` y referenciarlo dentro de la etiqueta `<head>` de tu HTML:
```html
<link rel="stylesheet" href="css/componente.css">
```


2. Coloca el archivo `componente.js` en tu carpeta `js/` y referenciarlo dentro de la etiqueta `<body>` de tu HTML:
```html
<script src="js/componente.js"></script>
```
# Uso
Para añadir este componente a tu proyecto HTML, realiza lo siguiente:
1. Crea un contenedor ```<div></div>``` con un id único para llamarlo
```
<div class="contenedor">
    <div id="menu-cuenta"></div>
</div>
```
2. Para modificar las opciones predeterminadas, modifica el apartado final de componente.js
```
// En este apartado vienen las opciones, cuando emplees este componente modificalo para tus necesidades.
const opcionesDeUsuario = [
    "Mi perfil",
    "Ajustes",
    "Suscripción",
    "Privacidad y términos",
    "Ayuda",
    "Cerrar sesión"
];
```

