// Año actual en el pie.
const anio = document.getElementById('anio');
if (anio) anio.textContent = String(new Date().getFullYear());
