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
1. Crea un contenedor ```<div></div>``` con un id único para llamarlo.
```html
<div class="contenedor">
    <div id="menu-cuenta"></div>
</div>
```
2. Para modificar las opciones predeterminadas, modifica el apartado final de componente.js
```js
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
# Capturas
1. Menú sin desplegar.
<p align="center">
<img width="377" height="200" alt="image" src="https://github.com/user-attachments/assets/c40644dc-564f-43e8-bbe4-d9118150db24" />
</p>

2. Menú desplegado al hacer click encima del mismo.
<p align="center">
<img width="372" height="488" alt="image" src="https://github.com/user-attachments/assets/2ac5535a-ff07-40ba-a421-28ea8eca57a1" />
</p>
# Demo


https://github.com/user-attachments/assets/69c4462e-29f2-4bfa-8d26-520bee5fe9a9


