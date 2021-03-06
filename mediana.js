function calcularMediaAritmetica(lista){
 const sumaLista = lista.reduce(
  function (valorAcumualado = 0, nuevoElemento){
   return valorAcumualado + nuevoElemento;
  }
 );
 
 const promedioLista = sumaLista / lista.length;

 return promedioLista;

}


const lista1 = [
 100,
 200,
 800,
 500,
 40000000,
 300,
];

// lo que hace el .sort y esta funcion, es ordenar los numeros del array lista1
lista1.sort(function(a,b){
 return a - b
})

const mitadLista1 = parseInt(lista1.length / 2);

function esPAr(numerito){
 if (numerito % 2 === 0){
  return true;
 } else  {
   return false;
 }
}

let mediana;

if (esPAr(lista1.length)){
 const elemento1 = lista1[mitadLista1 - 1];
 const elemento2 = lista1[mitadLista1];

 const promedioElemento1y2 = calcularMediaAritmetica([
  elemento1,
  elemento2,
 ]);

 mediana = promedioElemento1y2;

} else {
 mediana = lista1[mitadLista1];
}