# Event-Driven Architecture

Servicio A: publica, envía
Servicio B: consume, escucha

Evento

Event Stream

### Req-Res vs Event streaming

El publisher necesita saber quién consumirá los eventos; sin embargo, en event streaming no lo necesitamos.

El evento es el contrato, ergo, la info del mensaje es fija y no muta

Solo necesitamos los dos servicios, pero en event streaming necesitamos una pieza extra (una cola, un bus o un log) donde publicar los mensajes.

En req-res podemos esperar a la respuesta, es decir, perdir algo y esperar a que sea devuelto. En streaming, el evento el 100% asíncrono, pero no sabemos cuándo se procesa

### Cumple los principios SOLID 

1. Desacoplado
2. Encapsular y separar responsabilidades

### Importante 

1. Los consumidores no saben de dónde viene el mensaje, lo que implica que hay que versionar los contratos.
2. Pensar QUÉ EVENTOS tiene nuestro dominio (entidades y eventos relacionadas a dichas entidades).
3. Pensar en la estrategia, a nivel táctico podemos solucionar el problema con casi cualquier herramienta (kafka, refis, etc.)

## Event storming

1. Actor: quien inicia un proceso. Ej: usuario
2. Comando: acción que inicia la persona. Ej: invitar usuario
3. Domain event: evento ejecutado. Ej: usuario invitado

## Event sourcing

Estrategia que nos permite reconstruir el estado de un objeto hasta llegar al estado actual, corresponde a un historico. 
En vez de guardar el estado actual, guardamos las acciones, los eventos, las transacciones realizadas.

El evento necesita la información necesaria para reconstruir el contexto.

