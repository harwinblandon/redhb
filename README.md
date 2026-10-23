# Red HB — redhb.com

Sitio estático (HTML + CSS + JS, sin dependencias ni compilación), publicado con GitHub Pages.

```
index.html            página principal
assets/css/styles.css estilos (colores y fuentes en :root)
assets/js/main.js     red animada de fondo
assets/img/           logos para la web (WebP a 1x–4x), favicon, imagen para redes
CNAME                 dominio de GitHub Pages (redhb.com)
```

Las carpetas `logos/` (SVG, PDF y PNG maestros) y `originales/` se quedan solo en local (ver `.gitignore`).

## Botones

En `index.html`, dentro de `<nav class="links">`, cada `<a class="link">` es un botón:
Topografía → https://gnss.redhb.com, Entrenamiento → https://entreno.redhb.com/.
Cerveza aún no tiene app: es un `<div class="link is-soon">` atenuado; cuando exista,
cámbialo por `<a class="link" href="https://...">`.

## Vista local

Abre `index.html` en el navegador, o `npx serve .` para un servidor local.

## Publicar cambios

Cada `git push` a `main` actualiza https://redhb.com en uno o dos minutos.
