// Helpers
// funcion para saber si es par
function esPAr(numero){
 return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
 const sumaLista = lista.reduce(
  function (valorAcumualado = 0, nuevoElemento){
   return valorAcumualado + nuevoElemento;
  }
 );
 
 const promedioLista = sumaLista / lista.length;

 return promedioLista;

}

//Calculadora de Mediana
// funcion para encontrar mediana (la persona del listado que esta en la mitad)
function medianaSalarios(lista){
 const mitad = parseInt(lista.length / 2);

 if (esPAr(lista.length)){
  const personaMitad1 = lista [mitad - 1];
  const personaMitad2 = lista [mitad];

  const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
  return mediana;
 } else {
  const personaMitad = lista [mitad];
  return personaMitad;
 }
}

//Mediana General
const salariosCol = colombia.map(
 function(persona){
return persona.salary;
 }
);

//.sort() ordenar el listado 
const salariosColOrdenado = salariosCol.sort(
 function (a, b){
  return a - b; 
 }
);



const medianaGeneralCol = medianaSalarios(salariosColOrdenado);

//Mediana del top 10%
const spliceStart = (salariosColOrdenado.length * 90) / 100;
const spliceCount = salariosColOrdenado.length - spliceStart;

//.splice() para tomar una fraccion del array
const salariosColTop10 = salariosColOrdenado.splice(spliceStart,
 spliceCount,
 );

 const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
 medianaGeneralCol,
 medianaTop10Col,
});