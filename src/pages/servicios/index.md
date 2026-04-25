---
layout: layout/base.njk
permalink: /servicios/
metaTitle: "Servicios de Derecho Laboral en España | Abogado Laboral"
metaDescription: "Áreas de actuación: despidos, incapacidad permanente, accidentes laborales, jubilaciones, inspecciones de trabajo y centros especiales de empleo. Cobertura nacional. Primera consulta gratuita."
metaKeywords: "servicios abogado laboral, despidos españa, incapacidad permanente españa, accidentes laborales, centros especiales de empleo"
metaRobots: "index, follow"
title: "Servicios"
---

<section class="bg-color ptr-64 pbr-64">
  <div class="container">
    <nav aria-label="Migas de pan" class="text-14-r mb-24" style="color:var(--c-gray);">
      <a href="/" class="footer-link">Inicio</a> › <span>Servicios</span>
    </nav>

    <p class="text-14-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">Áreas de actuación · Cobertura nacional</p>
    <h1 class="fluid-3-l mb-16">Servicios de derecho laboral en toda España</h1>
    <p class="fluid-7-r mb-32" style="color:var(--c-gray);max-width:780px;">
      Asesoramiento integral para trabajadores y empresas en derecho laboral, seguridad social y procedimientos de incapacidad. Atención presencial en Sevilla y videoconsulta en cualquier provincia del territorio nacional.
    </p>

    <div class="row" style="gap:24px 0;">
      {% for s in global.servicios_list %}
      <article class="col-xs-12 col-sm-6 col-md-4 mb-24">
        <a href="/servicios/{{ s.slug }}/" class="servicio-card" style="display:block;height:100%;padding:24px;background:#fff;border:1px solid #eee;border-radius:8px;text-decoration:none;color:inherit;">
          <h2 class="fluid-9-b mb-8">{{ s.title }}</h2>
          <p class="text-14-r mb-12" style="color:var(--c-primary);font-weight:600;">{{ s.tagline }}</p>
          <p class="fluid-9-r mb-16" style="color:var(--c-gray);">{{ s.intro }}</p>
          <span style="color:var(--c-primary);font-weight:600;">Saber más →</span>
        </a>
      </article>
      {% endfor %}
    </div>

    <div class="text-center mt-48">
      <a class="btn btn-primary btn--big" href="/contacto/" data-cta="servicios_index_consulta">¿No ves tu caso? Cuéntanoslo gratis</a>
    </div>
  </div>
</section>
