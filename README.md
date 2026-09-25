# Mercado | Catálogo de productos

Mini aplicación web desarrollada para consultar y explorar productos desde una API pública. Utiliza HTML, CSS y JavaScript vanilla, con una interfaz responsive, búsqueda en tiempo real y validación automática mediante ESLint y Husky.

## Descripción

Mercado consume la API de productos de [DummyJSON](https://dummyjson.com/docs/products) usando `fetch`, transforma la respuesta en tarjetas visuales y permite filtrar el catálogo por nombre, descripción o categoría. También incluye estados de carga, error, búsqueda sin resultados y actualización manual.

## Tecnologías

- HTML5 y CSS3.
- JavaScript vanilla y Fetch API.
- DummyJSON como API pública.
- ESLint para revisión de código.
- Husky para ejecutar ESLint antes de cada commit.

## Requisitos

- Node.js y npm instalados.
- Git instalado.
- Un navegador moderno con conexión a internet.

## Instalación

```bash
npm install
npx husky init
```

El comando `npx husky init` crea la carpeta `.husky` y configura el script `prepare` de `package.json`. Después, verifica que `.husky/pre-commit` contenga exactamente `npm run lint`; algunas versiones de Husky generan inicialmente `npm test`, pero este proyecto no tiene ese script. El hook debe ejecutar `npm run lint` antes de cada commit.

## Ejecución

Como es una app estática, abre `index.html` con Live Server en VS Code o utiliza cualquier servidor local. También puedes ejecutar:

```bash
npx serve .
```

Después visita la URL que indique el servidor.

## ESLint y Husky

```bash
npm run lint
```

El lint comprueba el código JavaScript. Husky ejecuta este mismo comando automáticamente durante `git commit`; si hay errores de ESLint, el commit se detiene.

Después de ejecutar `npx husky init`, verifica que [.husky/pre-commit](.husky/pre-commit) contenga exactamente:

```text
npm run lint
```

Algunas versiones de Husky generan inicialmente `npm test`; este proyecto no tiene ese script, por lo que debe reemplazarse por `npm run lint`.

## API y funcionalidades

- `GET https://dummyjson.com/products?limit=30` obtiene los productos con `fetch`.
- Las tarjetas se generan desde JavaScript, sin datos escritos manualmente en el HTML.
- El buscador filtra en tiempo real por título, descripción y categoría.
- El botón `Actualizar` vuelve a consultar la API.
- La interfaz muestra estados de carga, error y búsqueda sin resultados.

## Inicialización de Git

```bash
git init
git add .
git commit -m "feat: create products api app"
```

El commit se realizará únicamente si el hook de Husky y ESLint terminan correctamente.

## Evidencias

1. Captura de la aplicación con varios productos cargados y el contador de resultados visible.
2. Captura del buscador filtrando productos, por ejemplo `phone` o `laptop`.
3. Captura de la terminal mostrando `npm run lint` y un commit exitoso.
4. Captura de la terminal mostrando ESLint rechazando un commit por una variable sin utilizar.

Para probar el bloqueo, agrega temporalmente `const unusedValue = 1;` en `script.js`, ejecuta `git add script.js` y realiza un commit. Después elimina esa línea y ejecuta `npm run lint` para dejar el proyecto limpio.

