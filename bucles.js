/* console.log("He cargado el fichero bucles.js");

function añadirGatoFooter() {
    let gatito = document.createElement("img");
    gatito.style.width = "50px";
    gatito.src = "./img/logo.webp";

    let footer = document.querySelector(".footer");
    footer.appendChild(gatito);
} */

/* // Crear una función que dado un color por parémtro, nos cambia el color del body a dicho color
function cambiarColorBody(color) {

    console.log("Quiero cambiar el fondo a: " + color);
    console.log("Color del fondo antes de cambiar el color del body: " + document.body.style.backgroundColor);

    // 1. Obtener el body con querySelector
    let body = document.querySelector("body");

    // document.querySelector("body").style.backgroundColor = color; <-- equivalente

    // 2. Asingar a la propiedad style.backgroundColor el valor del parámetro 'color'
    body.style.backgroundColor = color;

    // color = body.style.backgroundColor;
    // body.style = "backgroundColor: 'blue'"
}

//cambiarColorBody("blue"); // cambiar el color a azul
cambiarColorBody("#223322"); // cambiar el color a rojo */

/* // Cambia el texto del Hero Image al valor que le pasamos por parámetro en 'lema'
function cambiarLema(lema) {

    // heroText voy a tener un nodo HTML (objeto); ya puedo manipularlo
    // let heroText = document.getElementsByClassName("hero");

    // heroText[0].children[0].textContent = lema;

    document.querySelector(".hero p").textContent = lema;

}

//cambiarLema("Cat lives Matter!");
cambiarLema("Cats are Puurrfect"); */

// https://lenguajejs.com/javascript/dom/crear-elementos-dom/

// Voy a añadir un <p> al final del body
// let despedida = document.createElement("p");
// despedida.textContent = "¡Gracias por visitar nuestra Web!";
// despedida.style.color = "brown";

// let header = document.querySelector("header");
// header.appendChild(despedida);

// Voy a crear numGatos imagénes; y las voy añadir como hijos del footer


/**
 * 
 * La función va a añadir 'numeroDeGatos' al footer
 * 
 * @param {string} numeroDeGatos Número de gatos a añadir
 */

/* function añadirGatos(numeroDeGatos) {
    for (let i = 0; i < numeroDeGatos; i++) {
        console.log("He entrado en el bucle!");
        añadirGatoFooter();
    }
} */

/* // Cómo haríamos un for para ejecutar este código tantas veces como numGatos
console.log("numGatos: ", numGatos);
añadirGatos(10) // añade 2 gatos al footer
//añadirGatos(3) // añade 3 gatos al footer
 */
/**
 * Añade un borde de 'grosorBorde' píxeles y de color 'colorBorde' al DOM
 * 
 * @param {object} elemento Elemento del DOM 
 * @param {number} grosorBorde Número de píxeles 
 * @param {string} colorBorde El color en hexadecimal, o literalmente un color soportado por CSS 
 */

/*  function cambiarBordeElemento(elemento, grosorBorde, colorBorde){
   //existe la propiedad style para cambiar el color del borde (entre otras cosa) y el grosor
     // style.borderColor, style.borderWidth 
    // tengo que setear style.borderStyle a "solid" siempre
    elemento.style.border = `${grosorBorde}px ${colorBorde} solid`;

   /*  elemento.style.borderColor = colorBorde;
    elemento.style.borderWidth = grosorBorde + "px";
    elemento.style.borderStyle = "solid";
} */

/* let logo = document.querySelector(".header--logo");
cambiarBordeElemento(logo, 5, "red"); // voy a poner un borde rojo de 5px en el logo

let footer = document.querySelector(".footer");
cambiarBordeElemento(footer, 10, "green");

let body = document.querySelector("body");
cambiarBordeElemento(body, 15, "purple"); */

//la función recibe por parametro el nombre de una voluntária.
//Oculta la tarjeta de dicha voluntaria.

//1. Recupera del DOM la tarjeta de la chica en cuestion
//Si el parametro nombre es patricia tengo que recuperar del DOM el nodo "patricia" y despues establecer su propiedad style.display a "none"

function ocultarMiembro(nombre) {
    if (nombre == "patricia") {
        document.querySelector(".card__patricia").style.display = "none";
    }
    else if (nombre == "veronica") {
        document.querySelector(".card__veronica").style.display = "none";
    }
    else if (nombre == "edurne") {
        document.querySelector(".card__edurne").style.display = "none";
    }
}
//ocultarMiembro("patricia")
ocultarMiembro("veronica")
//ocultarMiembro("edurne")

// Ejercicios Bucle y condicionales

// Ejercicio1: Si el número de gatos es 0; cambiar el texto por “No hay gatos por adoptar, felicidades!”


// Ejercicio2: Fíjate que ahora en el código hay 3 variables boleanas. Muestra cada uno de los botones de “Contactar”, solo en función de si cada una de las chicas está disponible. Es decir, en esta configuración, el botón de "Verónica" debería desaparecer. Pista: piensa que propiedad de .style tienes que modificar para ocultar, mediante CSS, el botón de la chica correspoiente.

let patriciaDisponible = true;
let veronicaDisponible = false;
let edurneDisponible = true;
