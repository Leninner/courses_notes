**ÍNDICE**

# Deno

Deno es un **runtime** simple, moderno y seguro para JavaScript, TypeScript y WebAssembly que usa `V8` y está integrado en Rust.

**Para empezar con la instalación** entrar a la [página de Deno](https://deno.land/).

## Características de Deno

- Proporciona funcionalidad de plataforma web y adopta estándares de plataforma web.
- Seguro por defecto. Sin acceso a archivos, redes o entornos, a menos que se habilite explícitamente.
- Soporta TypeScript fuera de la caja.
- Se envía solo un único archivo ejecutable.
- Tiene herramientas de desarrollo integradas como un inspector de dependencias (deno info) y un formateador de código (deno fmt).
- Tiene un conjunto de módulos estándar revisados ​​(auditados) que están garantizados para funcionar con Deno: deno.land/std.

- Tiene varias empresas interesadas en usar y explorar Deno.
- Tiene su propio linter

> Node Js es un entorno de ejecución solo para JavaScript.

## Comandos de Deno

- Para ejecutar un archivo

```bash
deno run --options nombreArchivo.(ts|js)
deno run --watch --options nombreArchivo.(ts|js)
deno help
deno info
```
