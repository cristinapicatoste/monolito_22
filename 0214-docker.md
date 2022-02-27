## Docker compose

`docker run` - `docker-compose up -d` levantar docker o docker-compose

`docker ps` - muestra en consola los contenedores activos

`docker start` inicia el contenedor

`docker stop` - `docker-compose stopped` para el contenedor, sin borrar los datos

`docker rm` - `docker-compose down` destruye el contenedor, pero no la imagen; borra los datos del contenedor si no tenemos un volumn configurado

`docker rmi` elimina el contenedor, la imagen y los datos

## Dockerfile

### Construir y compilar la imagen

1. `FROM openjdk17` Instalar sistema operativo y frameworks (SO + Java = imagen openjdk17)
2. `WORKDIR /app` Carpeta en la que vamos a trabajar, home directory de la imagen
3. `RUN nombreFicheros` Indicar archivos necesarios para ejecular el proyecto
4. `RUN ./mvnw package -DskipTests` Compila (crea) la imagen (mvnw es el compilador de java). DskipTests evita que los tests se corran durante el build la imagen 
5. `EXPOSE 8080` Puerto con el que conecta con la imagen
6. `CMD ["java", "-jar", "/app/target/shrtr-0.0.1-SNAPSHOR.jar"]` Ejecuta el código cuando hacemos un run (ejecución) de la imagen, no durante su compilación (creación)

RUN y CMD ejecutan código, la diferencia es cuándo
