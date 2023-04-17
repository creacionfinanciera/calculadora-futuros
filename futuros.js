//para imprimir toda la base de datos
//console.log(requisitos);

//para filtrar la base de datos solamente por indices
var requisitosFiltradosMercado = requisitos.filter(
    function(activo) {
        return activo.market == "Indices"
    }
);
//console.log(requisitosFiltradosMercado);

//para filtrar la base de datos por microfuturos
var requisitosFiltradosContrato = requisitos.filter(
    function(activo) {
        return activo.contract == "Microfuturos"
    }
);
//console.log(requisitosFiltradosContrato);

//para filtrar la base de datos por la medida del tick
var requisitosFiltradosTick = requisitos.filter(
    function(activo) {
        return activo.medidaTick === 0.25
    }
);
//console.log(requisitosFiltradosTick);

//para generar otro arreglo solo con los nombres de los activos
var nombreActivos = requisitos.map(
    function(nombre) {
        return nombre.activo 
    }
);
//console.log(nombreActivos);

//para generar otro arreglo solo con el simbolo de los activos
var simboloActivos = requisitos.map(
    function(simbolo) {
        return simbolo.ticket
    }
);
//console.log(simboloActivos);

//no genera un arreglo, solamente trae una lista de la propiedad nombre
requisitos.forEach(
    function(nombre) {
        console.log(nombre.activo);
    }
);

//no genera un arreglo, solamente trae una lista de la propiedad margen, que en este caso tiene un arreglo por dentro
requisitos.forEach(
    function(margenes) {
        console.log(margenes.margin);
    }
);

//valida dentrol del arreglo si se cumple o no que existan activos baratos de operar
var activosBaratos = requisitos.some(
    function(barato) {
        return barato.valorTick < 1.25;
    }
);
console.log(activosBaratos)

//quiero crear un arreglo solo con los tipos de contrato, pero sin repetirlos

var tiposContrato = requisitos.map(
    function(contratos) {
        return contratos.contract
    }
);
console.log(tiposContrato);

