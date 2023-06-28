## Uso

1. Clona el repositorio en tu máquina local.
2. Ejecuta el comando `npm install` para instalar las dependencias.
3. Ejecuta el programa con el comando `node index.js`.
4. Sigue las instrucciones en la consola para interactuar con la lista de tareas.

## Preguntas

1. ¿Qué sucedió al usar async y await?

   - Al usar `async` y `await`, las funciones asincrónicas pueden ser escritas de manera más clara y concisa. Permite esperar la resolución de una promesa antes de continuar con el código siguiente, lo que facilita el manejo de operaciones asíncronas.

2. ¿Qué sucedió al usar el método then()?

   - El método `then()` se utiliza para encadenar promesas y manejar su resolución. Permite especificar una función de callback que se ejecutará cuando la promesa se resuelva correctamente. Al utilizar `then()`, el código se vuelve más verboso y puede ser menos legible en comparación con el uso de `async` y `await`.

3. ¿Qué diferencias encontraste entre async, await y el método then()?
   - `async` y `await` son palabras clave que permiten escribir código asincrónico de forma más sincrónica, haciendo que parezca que el código se ejecuta de manera secuencial. Esto mejora la legibilidad y facilita el manejo de errores con el uso de bloques `try-catch`. Por otro lado, el método `then()` se utiliza para encadenar promesas y manejar su resolución de forma más explícita, lo que puede resultar en un código más largo y menos legible en comparación con `async` y `await`.

---

Este proyecto está disponible en el repositorio [node-todo-list](https://github.com/tu-usuario/node-todo-list).

¡Gracias por revisar el proyecto!
