
// Codigo cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
 return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
 return lado * lado;
}
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");

console.groupEnd();


// Codigo Triangulo

console.group("Triangulos");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
 return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(base, altura){
 return (base * altura) / 2;
}

console.groupEnd();

//Triangulo isoseles

console.group("Triangulos-Isoseles");

function alturaTrianguloIsoseles(a, base){
 const altura = Math.sqrt((a*a)-((base*base)/4));
 console.log(altura);
}

console.groupEnd();

//Codigo del circulo

console.group("Circulos");

// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + "cm");

function diametroCirculo(radio){
 return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio){
 const diametro = diametroCirculo(radio);
 return diametro * PI;
}

function areaCirculo(radio){
 return (radio * radio) * PI;
} 

console.groupEnd();


// Aqui interactuamos con html

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const area = areaCuadrado(value);
 alert(area);
}