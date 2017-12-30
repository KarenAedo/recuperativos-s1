//PROBLEMA DIFÍCIL 1
/*Dado un arreglo de números, rotar sus elementos hacia la derecha n veces
  Ejemplo arr = [1,2,3,4,5,6,7]
  n = 3
  retorna[5,6,7,1,2,3,4]*/

    /*Para este ejercicio necesitamos una función a la cual llamaremos rotarArray y le entregaremos
    dos parámetros, array(los elementos a recorrer) y n(el que dicta cuantos números debe rotar). 
    Luego, necesitamos que n recorra o itere nuestro array y eso lo hacemos mediante un ciclo for*/

  	function rotarArray(array, n){
  		/*declaramos la variable i con su inicio en 1 (porque ya sabemos que los elementos de un
      array se comienzan a contar desde 0), la condición que debe cumplir(i debe recorrer
      menor o igual a n número de veces(n incluido) el arreglo) y el incremento(de uno en uno,
      hasta llegar al número n)*/
      for(var i = 1; i <= n; i++){
  			/*Ahora necesitamos insertar el resultado de nuestra iteración en el array, para esto
        usamos dos métodos de javascript, unshift() y pop(). pop() elimina el último elemento de un
        array, pero también lo devuelve. Para que la devolución de esos números también queden
        en el array, encierro mi array.pop() en un nuevo método, unshift() que agrega uno o más
        elementos al inicio del array y devueve la nueva longitud de este.*/
        array.unshift(array.pop());
  		}
  		/*Las funciones deben regresar los valores, para esto utilizamos return
      return también corta la ejecución de la función.*/
      return array;
  	}
  	rotarArray([1,2,3,4,5,6,7],3);
    /*Llamamos nuestra función y le entregamos los parámetros necesarios para su comprobación,
    podemos imprimir el resultado en consola con console.log, escribirlo en pantalla con
    document.write o por medio de alert.*/




//PROBLEMA DIFÍCIL 2
/*Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor
a mayor, en caso contrario false.
No se puede usar el método sort() de javascript*/

/*La variable array será igual a la función ordenDeArray, la cual recibirá el parámetro
a verificar */
var array = function ordenDeArray (arr){
  /* Primero, necesitamos la extención del array ingresado, para esto, utilizamos un ciclo for*/
  /*declaramos la variable i con su inicio en 1, la condición que debe cumplir(i debe recorrer
  el array para saber cuántos elementos tiene y el incremento(de uno en uno)*/
  for (var i = 1; i <= arr.length; i++){
    /*Comparamos los elementos del arreglo diciendo, si i es menor a i+1 la condición es 
    verdadera y nuestro array estaría ordenado, de lo contrario, retorna falso */
    if (arr[i]< arr[i+1]){
      return true;
    } else {
      return false;
    }
  }
}
array([1,2,3,4,5]);
/* Llamamos a nuestra función y verificamos mediante parámetros si la condición se cumple*/




//PROBLEMA FÁCIL 11
/* Diseñar un programa que lea las calificaciones de un alumno (10 notas en total).
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no.
Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4*/
	//Creo las variables nota de 1 a 10 (donde quedarán los valores ingresados por el usuario)
	//Le pido al usuario que ingrese cada nota, desde la primera a la décima mediante prompt.
	//Me aseguro de que los valores realmente son números aplicando parseInt.
	var nota1 = parseInt(prompt("Ingrese la primera calificación"));
	var nota2 = parseInt(prompt("Ingrese la segunda calificación"));
	var nota3 = parseInt(prompt("Ingrese la tercera calificación"));
	var nota4 = parseInt(prompt("Ingrese la cuarta calificación"));
	var nota5 = parseInt(prompt("Ingrese la quinta calificación"));
	var nota6 = parseInt(prompt("Ingrese la sexta calificación"));
	var nota7 = parseInt(prompt("Ingrese la séptima calificación"));
	var nota8 = parseInt(prompt("Ingrese la octava calificación"));
	var nota9 = parseInt(prompt("Ingrese la novena calificación"));
	var nota10 = parseInt(prompt("Ingrese la décima calificación"));

	//Sumo los valores de cada nota
	var sumaNotas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10;
	//Se saca el promedio total
	var promedioTotal = sumaNotas/10;
	//Se imprime el promedio total
	document.write("Tu promedio final es " + promedioTotal);
		//Si la calificación final es mayor o igual a 4, aprueba
		if(promedioTotal >= 4){
			alert("¡Felicitaciones! has aprobado");
		//Si la calificación final es menor que 4, reprueba
		} else {
			alert("Lo siento, reprobaste");
		}




//PROBLEMA FÁCIL 14
/*Dado un arreglo de 10 números, retornar un nuevo arreglo sólo con los números pares.
  Ejemplo: input arr = [1,2,3,4,5,6,7,8,9,10]
  		   output nuevoArr = [2,4,6,8,10]*/
  	//Array con los números 10 números a recorrer
  	var diezNumeros = [1,2,3,4,5,6,7,8,9,10];
  	//Array vacío que contendrá los números pares
  	var numerosPares = [];
  	//Se crea un ciclo for para recorrer cada número del array diezNumeros
  	for(var i = 0; i <= diezNumeros.length; i++){
  	//Cuando el ciclo for itera por por el array diezNumeros,verifica los elementos existentes
  	//Con el condicional if, verificamos y separamos los números pares del array
  		if(diezNumeros[i] % 2 == 0){ //si los índices de diezNumeros tienen un residuo de 2 igual a 0, son pares
  			/*Mediante el método .push(), vamos almacenando en el nuevo array vacío a quienes
        cumplen la condición. También puede ser con el método unShift, pero me los entregaba
        en orden descendente*/
  			numerosPares.push(diezNumeros[i]);
  		}
  	}
    console.log(numerosPares);




//PROBLEMA FÁCIL 15
/*Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12
  Ejemplo: input arr = [1,2,3,4]
		   output nuevoArr = [12,24,36,48]*/

	//Array con los 4 números, puede ser cualquier valor positivo.
	var miArray = [1,2,3,4];
	//Se crea un nuevo arreglo vacío donde irán guardados los nuevos números multiplicados
	var nuevoArray = [];
	//Se hace un ciclo for para recorrer el primer array(miArray)
	for(i = 0; i < miArray.length; i++){
	//Agregamos al nuevo array mediante el método push los números recorridos del primer array
  //El método .push() añade los elementos al array
		nuevoArray.push(miArray[i]*12); //multiplicamos por 12
	}
	//Mediante un alert indicamos el resultado del nuevo array
	alert(nuevoArray);	