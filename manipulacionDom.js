// HEADER
// conecta con los campos de título
const tituloHeader = document.querySelector('header h1');
const parrafoHeader = document.querySelector('header p');
const contenedorTitulo = document.querySelector('header article');
// muestra objeto con las dos etiquetas
console.log({tituloHeader, parrafoHeader, contenedorTitulo});
// modifica desde javascript el código HTML y el texto que parezca HTML lo interpreta como HTML
tituloHeader.innerHTML = 'Calculadora de Futuros';
// éste también modifica el código HTML, pero el texto que parezca HTML lo va a interpretar cómo texto, éste método es más seguro
parrafoHeader.innerText = 'Has tu plan de inversión en el mercado de futuros en tres pasos';
// éste sirve para mostrar en consola el nombre del atributo de la etiqueta, en este caso la clase
console.log(contenedorTitulo.getAttribute('class'));
// éste sirve para modificar el valor del atributo, modifica el código HTML 
contenedorTitulo.setAttribute('class', 'header--title-container');
// éste sirve para agregar mas texto a una clase
contenedorTitulo.classList.add('3');
// éste sirve para remover texto de una clase
contenedorTitulo.classList.remove('3');
// éste devuelve true/false si nuestra etiqueta tiene la clase que estamos indicando
console.log(contenedorTitulo.classList.contains('3'));

// SECCION 1: Selecciona el activo
// conecta con los campos de la tabla de parametros y el boton de consultar
const campoContrato = document.querySelector('.fila-contrato #contratoid');
const campoMercado = document.querySelector('.fila-mercado #mercadoid');
const campoActivo = document.querySelector('.fila-activo #activoid');
const botonConsultar = document.querySelector('.main-select-asset button');

// muetra el html que se está renderizando
console.log(campoContrato);
// muestra objetos con los campos de la tabla de parámetros
console.log({campoContrato, campoMercado, campoActivo});
console.log({botonConsultar});
// muestra el valor que tienen los campos de la tabla parámetros
console.log(campoContrato.value);
console.log(campoMercado.value);
console.log(campoActivo.value);

// conecta con los campos de la tabla de especificaciones
//const campoTicketGeneral = document.querySelector('');
//const campoTicketMT5 = document.querySelector('');
//const campoMargenMaintenance = document.querySelector('');
//const campoMargenDayTrading = document.querySelector('');
//const campoMedidaTick = document.querySelector('');
//const campoValorTick = document.querySelector('');

// SECCION 2: Modela tu operativa
// conecta con los campos de la tabla parametros y el botón Modelar
const campoEstilo = document.querySelector('#estiloid');
const campoOperaciones = document.querySelector('#operacionesId');
const campoPuntos = document.querySelector('#puntosId');

// conecta con el botón Modelar
const botonModelar = document.querySelector('#btnModelar');

// conecta con los campos de la tabla modelación
const campoTicksContrato = document.querySelector('#ticksContratoId');
const campoPerdidaContrato = document.querySelector('#perdidaContratoId');
const campoPerdidaMes = document.querySelector('#perdidaMesId');

// muestra objetos con los campos de la tabla parámetros
console.log({campoEstilo, campoOperaciones, campoPuntos});
console.log({botonModelar});
console.log({campoTicksContrato, campoPerdidaContrato, campoPerdidaMes});

// escuchamos el evento para el botón de modelar
// le damos un nombre al evento que se va a escuchar, y le colocamos la función que se ejecutará una vez se escuche ese evento
botonModelar.addEventListener('click', btnOnClick);

// creamos una función para escuchar el boton cuando el usuario hace click
function btnOnClick() {
    // sumamos el valor de los dos campos de interés
    const sumaCampos = campoOperaciones.value + campoPuntos.value;
    // llevamos el resultado de la suma al campo de interés
    campoTicksContrato.innerText = sumaCampos; 
}

