# Practica

## Instrucciones

1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

 * Variables
 * Strings
 * Funciones (argumentos, `return`)
 * Declaraciones `if`
 * Valores booleanos (`true`, `false`)

 * Variables
    Una variable es un contenedor de datos. Almacena el valor de algo. Se puede configurar y restablecer a cualquier tipo. No se necesita declarar su tipo al iniciar la variable.

        var nombreVariable = valorVariable;

* Strings
    Son bloques de texto, se definen entre comillas "dobles" o 'simples'. 

        var nombreGato = "Kalki";

* Funciones (argumentos, `return`)
    Una función es un conjunto de instrucciones para realizar una tarea concreta.
    
        function nombreFunción() {}

    Los argumentos son variables que necesita la funcion. Debe indicar cuantos y cual es el nombre de los argumentos.
    
        function logHola(nombre) {
            console.log("Hola, " + nombre)
        }

    `return` se usa para devolver el valor que calculó una función

        function dividirDosNumeros(a, b) {
            var producto = a / b;
            return producto;
        }

        dividirDosNumeros(6, 3); // 2
        console.log(producto); // undefined La unica forma de acceder a algo dentro de la función es devolverlo.

    Tambien se pueden establecer variables para igualar lo que devuelve una función.

        function restarDosNumeros(a, b) {
            var diferencia = a - b;
            return diferencia;
        }

        var diferenciaDeResta = restarDosNumeros(10, 9)
        console.log(diferenciaDeResta); // 1
        console.log(diferencia); // undefined

* Declaraciones `if`
    Es una forma de que nuestra función verifique si es True y ejecuta el código suministrado si es asi o avanzando si no lo es.

        function puedeManejar(edad) {
            if (edad > 18) {
                return true;
            }

            return false;
        }

        puedeManejar(21); // True

        Se toma el número (edad) y verifica si es True (21>18) por lo que devuelve True, la función se detiene. Si no es asi, omite el codigo y devuelve False

* Valores Booleanos
    Un booleano tiene 2 valores, True o False.
    Todo con un valor "real" es verdadera.
    Todo sin un "real" es falso.