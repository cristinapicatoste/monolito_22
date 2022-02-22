# Kubernetes

## Conceptos básicos

### 1. Pods

Son las instancias de cada contenedor. 
A cada contenedor que se ejecuta se le llama pods; es el elemento más pequeño dentro de kubernetes. 
Los pods se gestionan a través de 3 herramientas principales: deployments, deamon sets y stateful sets.

### 2. Deployments

fichero de configuración en el que indicamos el nº de contenedores e imágenes que queremos en los contenedores.
Ej: 'lánzame X contenedores de docker con la imagen Y'. 

Los deployments no tienen estado en general; es decir, si alguno está muerto, lo reemplazará por otro. 
Si nuestra aplicación tiene estado, entonces necesitamos volúmenes. 

### 3. Volúmenes

Memoria (storage) compartido entre nodos. Ej. 'Carpeta' con la capacidad X (150Gb). 

A kubernetes le indicamos qué deployments tienen que usar qué volúmenes para gestinar el estado.

De este modo, la aplicación puede morir y revivir en cualquier momento y seguiremos teniendo datos.

### 4. Stateful sets

Se utilizan en el caso de tener estado y no poder gestionarlo mediante volúmenes.
Es más restringido, extricto y rígido, ya que no podrán mover los pods de un sitio a otro.

Interesa cuando no queremos tener ningún momento de no accesibilidad al monolito y en contra será menos escalable (crece en horizontal).  

Se configura igual que los pods pero es menos agresivos.

### 5. Deamon Set

Tipo especial de deployment en el que solo se puede añadir un nodo por contenedor; se añade un servicio a cada nodo; 
a diferencia del deployment que en este se pueden añadir varios nodos a un contenedor o kubernetes lo gestionará libremente.

Caso de uso: monitorizar cómo está el nodo y el uso realizado. Nos interesa acceder al nivel de la máquina, 
importante para gente de arquitectura para saber el uso de capacidad que se ha realizado.

### 6. Services

Capa que se pone encima de los deployments y los pods para poder comunicarse entre deployments.
Para cada tipo de deployment tenemos un servicio distinto.

### 7. Ingreses

Los nodos de kubernetes está cerrado al mundo exterior. Solo los miembros del cluster pueden comunicarse internamente.
Ingress es el punto de acceso al cluster desde el mundo exterior.

En este elemento indicamos el api url y los puertos.
El servicio tiene el puerto para saber dónde dirigir las peticiones desde al exterior hacia los pods correspondientes.

### 8. ConfigMaps y Secrets

Nos ayudan a definir variables de entorno secretas y no secretas. 
Nos facilita crearlo una vez y no replicarlo cada vez.

### 9. Network interface

...

## Orden

1. Ingress
2. Service
3. Deployment
4. Nodo
5. Volum