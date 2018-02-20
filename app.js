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


function miMap(arreglo, callback){
	var cuadrados = [];
	for (var i = numeros.length - 1; i>=0; i--){
		var numero = numeros[i];
		cuadrados.push(Math.pow(numero,2));
	}

	console.log(cuadrados);
}

miMap(numeros, function(i){
	console.log(i)
});


/*Función filter*/

function miFilter(arreglo, filter){

	var numeros_pares = [];

	for (var i = numeros.length; i>=0; i--){
		var numero = numeros[i];
		if(numero % 2 == 0){
			numeros_pares.push(numero);
		}
	}

	console.log(numeros_pares);
}

miFilter(numeros, function(i){
	console.log(i)
});


/*Función reduce*/

function miSort(arreglo, callback){
	var suma = 0;
for(var i = 0; i<numeros.length;i++){
	suma +=numeros[i];
}

console.log(suma);
	}

miSort(numeros, function(i){
	console.log(i)
});




