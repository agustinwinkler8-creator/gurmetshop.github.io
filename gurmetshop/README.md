# GurmetShop — Sitio Web

Escaparate digital para GurmetShop. Es un sitio simple (HTML, CSS y JS puro,
sin frameworks) pensado para cargar rápido y quedar bien ubicado en Google.
No tiene carrito de compra ni precios: la idea es que quien entre se
enamore de los productos y después escriba por WhatsApp para comprar.

## Estructura del proyecto

```
gurmetshop/
├── index.html          → la página completa
├── css/styles.css       → todos los estilos
├── js/main.js            → menú móvil + animaciones al scrollear
├── images/                → logo y fotos de producto, ya optimizadas
├── robots.txt             → indica a Google que puede indexar el sitio
├── sitemap.xml            → mapa del sitio para buscadores
└── README.md               → este archivo
```

## Antes de publicar: 3 cosas para revisar

1. **El número de contacto.** Usé el `11 3423-9865` que me pasaste y asumí
   que es un número de WhatsApp (formato `549 11 3423-9865`). Los botones de
   "Escribinos" y "Hablar por WhatsApp" abren ese chat directamente. Si el
   número no tiene WhatsApp, avisame y lo cambio para que el botón solo
   llame por teléfono.

2. **Las URLs de ejemplo.** En `index.html`, `robots.txt` y `sitemap.xml`
   puse `https://tuusuario.github.io/gurmetshop/` como marcador de lugar.
   Una vez que sepas la URL real de tu sitio en GitHub Pages (paso 4 de
   abajo), buscá y reemplazá ese texto en los 3 archivos.

3. **Las fotos de producto.** Son recortes de los catálogos que me
   pasaste, elegidos para no mostrar ningún precio. Si en algún momento
   tenés fotos más profesionales (sin texto superpuesto) de cada línea,
   se pueden reemplazar fácil — están todas en la carpeta `images/`.

## Cómo verlo antes de publicar

Simplemente abrí el archivo `index.html` haciendo doble clic. Se va a ver
exactamente igual que una vez publicado (los links de WhatsApp también
funcionan).

## Cómo publicarlo en GitHub Pages (gratis)

1. Entrá a [github.com](https://github.com) y creá un repositorio nuevo
   (por ejemplo `gurmetshop`). Puede ser público.
2. Subí todos los archivos de esta carpeta al repositorio. La forma más
   fácil sin usar la terminal:
   - Abrí tu repositorio en GitHub → botón **"Add file" → "Upload files"**.
   - Arrastrá todos los archivos y carpetas de este proyecto (`index.html`,
     `css/`, `js/`, `images/`, `robots.txt`, `sitemap.xml`).
   - Confirmá el commit ("Commit changes").
3. Andá a la pestaña **Settings** del repositorio → sección **Pages**
   (en el menú de la izquierda).
4. En "Build and deployment" → "Source", elegí **Deploy from a branch**,
   rama `main` y carpeta `/root`. Guardá.
5. GitHub te va a dar una URL como
   `https://tuusuario.github.io/gurmetshop/`. Puede tardar 1-2 minutos en
   activarse la primera vez.
6. Volvé al punto "Antes de publicar" de arriba y reemplazá la URL de
   ejemplo por esta URL real en `index.html`, `robots.txt` y
   `sitemap.xml`. Subí esos cambios y listo.

## Para que Google te encuentre más rápido

Una vez publicado, date de alta gratis en
[Google Search Console](https://search.google.com/search-console),
agregá tu URL y enviá el `sitemap.xml`. Esto no es obligatorio (Google
igual va a encontrar el sitio solo con el tiempo), pero acelera bastante
el proceso.

## Cómo editar textos o el número de contacto más adelante

Todo el contenido de texto está directamente en `index.html` (buscá la
sección que quieras cambiar, el archivo tiene comentarios y nombres claros
como `id="productos"` o `id="contacto"`). El número de WhatsApp aparece en
varios lugares del archivo como parte de un link `https://wa.me/...` —
buscá `5491134239865` y reemplazá por el nuevo número en el mismo formato
(`549` + código de área + número, sin espacios ni guiones).
