# Lagash DevOps Meetup - Kubernetes Demo

*reloj.js* contiene un servicio super sencillo que expone la hora actual por http.
Para crearlo solo hace falta armar la imagen usando el Dockerfile.

*client.html* es una aplicación web que constantemente pollea al servicio y muestra las últimas respuestas en pantalla.

*reloj.yaml* y *reloj.service.yaml* contienen las definiciones para crear un deployment y su respectivo servicio en kubernetes usando la imagen del reloj creada con el dockerfile.

Si se quiere tambien completar el circuito de CI, *jenkins.yaml* puede utilizarse para correr una instancia de Jekins en el cluster.
Para no depeneder de ningun servicio extra, puede usarse un trigger en Jenkins que este monitoreando un directorio local, y utilizar *post-receive* en un repo bare de git el cual se encarga de copiar al entorno de jenkins el código al recibir un push.

*build.sh* puede llamarse desde Jenkins para armar la imagen (Necesita el binario de docker, y tener montado el socket del daemon del host en su container [Esto lo hace jenkins.yaml]
