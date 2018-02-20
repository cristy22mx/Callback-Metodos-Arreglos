/*Función forEach*/

var numeros = [12,3,7];

function miForEach(array, callback){
	var newFor = [];
for (var i = 0; i<numeros.length; i++){
	newFor.push(numeros[i]);
}

console.log(newFor);
}

miForEach(numeros, function(i){
	console.log(i)
});


/*Función map*/

var numeros = [12,3,7,];

var cuadrados = [];

for (var i = numeros.length - 1; i>=0; i--){
	var numero = numeros[i];
	cuadrados.push(Math.pow(numero,2));
}

console.log(cuadrados);

/*Función filter*/

var numeros = [12,3,7,8,9,11];

var numeros_pares = [];

for (var i = numeros.length; i>=0; i--){
	var numero = numeros[i];
	if(numero % 2 == 0){
		numeros_pares.push(numero);
	}
}

console.log(numeros_pares);

/*Función reduce*/

var letras = ["H", "O", "L", "A"];

console.log(letras.join(""));


/*otra forma*/
var numeros = [12,3,7,8,9,11];

var suma = 0;
for(var i = 0; i<numeros.length;i++){
	suma +=numeros[i];
}
console.log(suma);
