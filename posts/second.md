## ¿Qué es HTTP?

El protocolo de transferencia de hipertexto (HTTP) constituye los cimientos de la red mundial, y se utiliza para cargar páginas web mediante enlaces de hipertexto. HTTP es un protocolo de capa de aplicación diseñado para transferir información entre los dispositivos conectados de la red, y se ejecuta sobre otras capas del conjunto de protocolos de la red. Un flujo típico sobre HTTP implica una máquina cliente que realiza una solicitud a un servidor, que a continuación envía un mensaje de respuesta.


¿Qué es una solicitud HTTP?

Una solicitud HTTP es la forma en que las plataformas de comunicación de Internet, como los navegadores web, piden la información que necesitan para cargar un sitio web.

Cada solicitud HTTP realizada por Internet lleva consigo una serie de datos codificados que contienen diferentes tipos de información. Una solicitud HTTP típica contiene:

- Tipo de versión de HTTP
- Una URL
- Un método HTTP
- Encabezados de solicitud HTTP
- Cuerpo HTTP opcional.

## ¿Qué es un método HTTP?

Un método HTTP, a veces denominado verbo HTTP, indica la acción que la solicitud HTTP espera del servidor consultado. Por ejemplo, dos de los métodos HTTP más comunes son "GET" y "POST"; una solicitud "GET" espera que se le devuelva información (normalmente en forma de página web), mientras que una solicitud "POST" suele indicar que el cliente está enviando información al servidor web (como información de un formulario, por ejemplo, un nombre de usuario y una contraseña enviados).

## ¿Qué son los encabezados de solicitud HTTP?

Los encabezados HTTP contienen información de texto almacenada en pares clave-valor, y se incluyen en cada solicitud HTTP (y en la respuesta, sobre lo que hablaremos más adelante). Estos encabezados comunican información básica, como por ejemplo qué navegador utiliza el cliente y qué datos solicita.

Ejemplo de encabezados de solicitud HTTP de la pestaña de red de Google Chrome:

![Descripción de la imagen](https://picsum.photos/800/600)

## ¿Qué es un cuerpo de solicitud HTTP?

El cuerpo de una solicitud es la parte que contiene el "cuerpo" de la información que está transfiriendo la solicitud. El cuerpo de una solicitud HTTP contiene toda la información que se envía al servidor web, como un nombre de usuario y una contraseña, o cualquier otro dato introducido en un formulario.

## ¿Qué es una respuesta HTTP?

Una respuesta HTTP es lo que los clientes web (normalmente los navegadores) reciben de un servidor de Internet en respuesta a una solicitud HTTP. Estas respuestas comunican información valiosa basada en lo que se pidió en la solicitud HTTP.

Una respuesta HTTP típica contiene:

 1. Un código de estado HTTP
 2. Encabezados de respuesta HTTP
 3. Cuerpo de HTTP opcional

Vamos a desglosarlas:

## ¿Qué es un código de estado HTTP?

Los códigos de estado HTTP son códigos de 3 dígitos que se utilizan con mayor frecuencia para indicar si una solicitud HTTP se ha completado con éxito. Los códigos de estado se dividen en los siguientes 5 bloques:

- 1xx Informativo
- 2xx Éxito
- 3xx Redirección
- Errores de cliente 4xx
- 5xx Error del servidor
- Las "xx" hace referencia a diferentes números entre 00 y 99.

Los códigos de estado que empiezan por el número "2" indican que la solicitud se ha realizado correctamente. Por ejemplo, después de que un cliente solicite una página web, las respuestas más habituales tienen un código de estado "200 OK", que indica que la solicitud se ha completado correctamente.

Si la respuesta empieza con un "4" o un "5", significa que se ha producido un error y que la página web no se mostrará. Un código de estado que empieza con un "4" indica un error del lado del cliente (es muy habitual encontrarse un código de estado "404 NOT FOUND’ cuando cometemos un error tipográfico al escribir una URL). Un código de estado que empieza con un "5" indica que algo ha fallado en el lado del servidor. Los códigos de estado también pueden empezar con un "1" o un "3", que indican, respectivamente, una respuesta informativa y una redirección.
