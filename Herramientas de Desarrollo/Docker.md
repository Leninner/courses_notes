**ÍNDICE**

- [Problemas del desarrollo de software profesional](#problemas-del-desarrollo-de-software-profesional)
- [Virtualización](#virtualización)
  - [Contenedores de Docker](#contenedores-de-docker)

# Problemas del desarrollo de software profesional

¿Qué es Docker?

Permite **construir, distribuir y ejecutar** cualquier aplicación en cualquier lado. Usa contenedores.

1. Construcción

   - Escribir código es solo una pequeña parte. Los problemas complejos necesitan equipos.
   - Entorno de desarrollo
   - Dependencias
   - Entorno de Ejecución
   - Equivalencia con entorno productivo
   - Servicios Externos

2. Distribución

   - Llevar la aplicación donde se va a desplegar (Transformarse en un artefacto). Llevarlos a un lugar en donde puedan ser ejecutados.
   - Divergencia de repositorios
   - Divergencia de artefactos
   - Versionado

3. Ejecución

   - La máquina donde se escribe, nunca va a ser la misma donde se va a ejecutar
   - Compatibilidad con el entorno productivo
   - Dependencias
   - Disponibilidad de servicios externos
   - Recursos de Hardware

# Virtualización

Versión virtual de algún recurso tecnológico, como hardware, sistema operativo, dispositivo de almacenamiento o recurso de Red.

Nos permite atacar los 3 problemas del desarrollo de software profesional.

> Máquinas Virtuales y sus problemas:

Una máquina virtual es una versión de un OS que se puede correr dentro de otro OS.

Problemas:

1. Peso => En el orden de los GBs. Repiten archivos en común. Inicio lento.
2. Costo de Administración => Necesidad de mantenimiento al igual cualquier otra computadora.
3. Múltiples Formatos => VDI, VMDK, VHD, raw, etc...

NOTE: A diferencia de una máquina virtual, que es una abstracción del hardware y emula toda una computadora (o servidor), un contenedor es una abstracción del software y éste puede empaquetar el código, el runtime necesario y las dependencias de una aplicación

## Contenedores de Docker

- Flexibles
- Livianos
- Portables
- Bajo acoplamiento
- Escalables
- Seguros
