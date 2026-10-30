const projects=[
 {
  t:"X by Ximena POS",
  i:"🛍️",
  c:"python",
  d:"Sistema de punto de venta para boutique. Permite organizar ventas y administrar las operaciones del negocio.",
  g:["Python","POS","Inventario","Gestión de ventas"],
  images:[
   "assets/x-by-ximena-pos/01-punto-de-venta.png"
  ],
  l:"https://github.com/RuzerMoreno/X-by-Ximena-POS",
  lt:"Ver proyecto en GitHub"
 },
 {
  t:"TaskFlow",
  i:"✓",
  c:"web",
  d:"Aplicación de gestión de tareas enfocada en organizar actividades y ofrecer una experiencia sencilla desde el navegador.",
  g:["HTML5","CSS3","JavaScript","Responsive"],
  l:"https://ruzermoreno.github.io/taskflow/",
  lt:"Ver demostración"
 },
 {
  t:"RM-BURGER",
  i:"🍔",
  c:"web",
  d:"Catálogo digital para negocio de hamburguesas, con menú, pedidos por WhatsApp y panel administrativo.",
  g:["HTML5","CSS3","JavaScript","Responsive"],
  l:"https://ruzermoreno.github.io/rm-burguer/",
  lt:"Ver catálogo"
 },
 {
  t:"Portafolio de desarrollador",
  i:"⌘",
  c:"web",
  d:"Sitio personal para presentar mi perfil, habilidades, proyectos y medios de contacto.",
  g:["HTML5","CSS3","JavaScript","GitHub Pages"],
  l:"https://ruzermoreno.github.io/portfolio/",
  lt:"Ver portafolio"
 },
 {
  t:"Culpable POS",
  i:"💈",
  c:"python",
  d:"Punto de venta para apoyar la operación diaria de un negocio, con enfoque en ventas y administración.",
  g:["Python","Software de escritorio","Ventas","Base de datos"]
 },
 {
  t:"X by Ximena Web",
  i:"✨",
  c:"web",
  d:"Página web de boutique con inicio, catálogo digital, cuentas de usuario y panel de administración.",
  g:["HTML5","CSS3","JavaScript","Catálogo digital"],
  images:[
   "assets/x-by-ximena/01-inicio.png",
   "assets/x-by-ximena/02-catalogo.png",
   "assets/x-by-ximena/03-cuenta.png",
   "assets/x-by-ximena/04-administracion.png"
  ],
  l:"https://x-by-ximena-catalogo.onrender.com",
  lt:"Visitar página web"
 }
];

const grid=document.getElementById("grid");

grid.innerHTML=projects.map(p=>`
 <article class="card" data-c="${p.c}">
  <div class="ico" aria-hidden="true">${p.i}</div>
  <h3>${p.t}</h3>
  <p>${p.d}</p>

  ${p.images ? `
   <div class="project-gallery">
    ${p.images.map((src,index)=>`
     <img
      src="${src}"
      alt="${p.t} - captura ${index+1}"
      loading="lazy"
      onerror="this.alt='No se pudo cargar: '+this.src; this.style.border='2px solid red';"
     >
    `).join("")}
   </div>
  ` : ""}

  <div class="tags">
   ${p.g.map(x=>`<span>${x}</span>`).join("")}
  </div>

  ${p.l
   ? `<a class="lnk" href="${p.l}" target="_blank" rel="noopener">${p.lt} ↗</a>`
   : `<span class="wip">Proyecto en desarrollo</span>`
  }
 </article>
`).join("");
