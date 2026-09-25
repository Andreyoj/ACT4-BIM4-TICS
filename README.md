# Mercado | Catálogo de productos

Mini app web desarrollada con HTML, CSS y JavaScript. Consulta productos desde la API pública [DummyJSON](https://dummyjson.com/docs/products), los muestra dinámicamente y permite filtrarlos por nombre, descripción o categoría.

## Requisitos

- Node.js y npm instalados.
- Git instalado.
- Un navegador moderno con conexión a internet.

## Instalación

```bash
npm install
npx husky init
```

El comando `npx husky init` crea la carpeta `.husky` y configura el script `prepare` de `package.json`. En este proyecto, el hook `.husky/pre-commit` ejecuta `npm run lint` antes de cada commit.

## Ejecución

Como es una app estática, abre `index.html` con Live Server en VS Code o utiliza cualquier servidor local. También puedes ejecutar:

```bash
npx serve .
```

Después visita la URL que indique el servidor.

## Comandos de calidad

```bash
npm run lint
```

El lint comprueba `script.js` y la configuración JavaScript. Husky ejecuta este mismo comando automáticamente durante `git commit`; si hay errores de ESLint, el commit se detiene.

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

## Capturas que debes entregar

1. **Funcionamiento inicial:** abre la app con varios productos visibles. Captura la página completa mostrando el título, las tarjetas cargadas y el contador de resultados.
2. **Interacción:** escribe una palabra como `phone` o `laptop` en el buscador y captura el resultado filtrado junto con el contador actualizado.
3. **Hook de Husky funcionando:** en la terminal ejecuta `git commit -m "test: verify husky"` con el proyecto correcto y captura la salida donde aparezca `npm run lint` y el commit exitoso.
4. **Husky bloqueando errores:** agrega temporalmente una línea con un error de ESLint en `script.js`, por ejemplo `const unusedValue = 1;`, intenta hacer commit y captura la terminal donde ESLint reporte el error y el commit sea rechazado. Después elimina esa línea y verifica de nuevo con `npm run lint`.

No es necesario capturar la instalación de dependencias; las evidencias importantes son la app funcionando, el filtro y la validación del hook.
