# Spider-Man: Brand New Day — sitio de fans

Sitio no oficial hecho por un fan sobre **Spider-Man: Brand New Day** (estreno: 31 de julio de 2026). Cuenta regresiva, reparto, expedientes de villanos, tráiler oficial y un minijuego, todo con interruptor de "vigilia nocturna / amanecer".

Es HTML + CSS + JS puro. **Sin frameworks, sin build, sin `npm install`.** Se sube tal cual a GitHub y funciona.

## Estructura

```
├── index.html          → la página (no tocar el orden de las carpetas)
├── css/
│   └── style.css
├── js/
│   └── script.js
├── favicon.svg
├── .nojekyll            → le dice a GitHub que sirva los archivos tal cual
└── README.md            → este archivo
```

## Publicarlo en GitHub Pages (una sola vez)

1. Entrá a [github.com/new](https://github.com/new) y creá un repositorio (puede ser público o privado, pero para Pages gratis tiene que ser público). Nombre sugerido: `spiderman-brand-new-day`.
2. Subí **todos** estos archivos y carpetas manteniendo la misma estructura (arrastrándolos en "Add file → Upload files", o con `git push` si ya usás Git). Importante: `index.html` tiene que quedar en la **raíz** del repositorio, no dentro de una subcarpeta.
3. Andá a **Settings → Pages** (menú de la izquierda).
4. En "Build and deployment → Source" elegí **Deploy from a branch**.
5. En "Branch" elegí `main` (o `master`, la que tenga tu repo) y la carpeta `/ (root)`. Guardá.
6. Esperá uno o dos minutos. GitHub te va a mostrar la URL pública, algo como:
   `https://tu-usuario.github.io/spiderman-brand-new-day/`

Y listo — no hay que tocar ningún archivo ni configurar nada más. Cada vez que subas un cambio a la rama, el sitio se actualiza solo.

## Notas técnicas (por si en algún momento querés tocar algo)

- Todas las rutas a `css/style.css`, `js/script.js` y `favicon.svg` son **relativas**, a propósito: así el sitio funciona igual si GitHub Pages lo publica en la raíz de un dominio o en una subcarpeta tipo `usuario.github.io/nombre-repo/`.
- Las tipografías (Anton, Inter, Space Mono) se cargan desde Google Fonts por CDN, y el tráiler se incrusta desde YouTube — ambas cosas requieren que quien visite el sitio tenga conexión a internet, como cualquier página web normal.
- El interruptor de tema, el sonido y el mejor puntaje del minijuego se guardan en el `localStorage` del navegador de cada visitante (no en un servidor), así que son distintos para cada persona y cada dispositivo.
- Los datos de la película (reparto, fecha de estreno, villanos confirmados) están actualizados según el material promocional oficial disponible al momento de crear el sitio.

## Créditos

Sitio hecho por un fan, sin fines de lucro y sin afiliación con Marvel Studios, Sony Pictures o Disney. Spider-Man y los personajes relacionados son marcas registradas de Marvel Characters, Inc.
