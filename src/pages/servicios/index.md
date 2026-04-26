---
layout: layout/base.njk
permalink: /servicios/
metaTitle: "Servicios de Derecho Laboral en España | Abogado Laboral"
metaDescription: "Áreas de actuación: despidos, incapacidad permanente, accidentes laborales, jubilaciones, inspecciones de trabajo y centros especiales de empleo. Cobertura nacional. Primera consulta gratuita."
metaKeywords: "servicios abogado laboral, despidos españa, incapacidad permanente españa, accidentes laborales, centros especiales de empleo"
metaRobots: "index, follow"
title: "Servicios"
---

<section class="bg-color ptr-64 pbr-32">
  <div class="container">
    <nav aria-label="Migas de pan" class="text-14-r mb-24" style="color:var(--c-gray);">
      <a href="/" class="footer-link">Inicio</a> › <span>Servicios</span>
    </nav>

    <p class="text-14-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">Áreas de actuación · Cobertura nacional</p>
    <h1 class="fluid-3-l mb-16">Servicios de derecho laboral en toda España</h1>
    <p class="fluid-7-r mb-32" style="color:var(--c-gray);max-width:780px;">
      Asesoramiento jurídico integral para trabajadores y empresas en derecho laboral, seguridad social y procedimientos de incapacidad. Atención presencial en Sevilla y videoconsulta en cualquier provincia del territorio nacional. Primera consulta <strong>gratuita y confidencial</strong>.
    </p>
  </div>
</section>

<section class="bg-color pbr-64">
  <div class="container">
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
  </div>
</section>

<section class="bg-light ptr-64 pbr-64">
  <div class="container">
    <p class="text-14-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;text-align:center;">Por qué elegirnos</p>
    <h2 class="fluid-4-l mb-16" style="text-align:center;">Tres pilares que nos diferencian</h2>
    <p class="fluid-7-r mb-48" style="color:var(--c-gray);max-width:780px;margin-left:auto;margin-right:auto;text-align:center;">
      Combinamos especialización absoluta en derecho laboral, transparencia total en honorarios y cobertura nacional efectiva mediante tecnología (videoconsulta, LexNET, firma electrónica). Por eso somos el despacho que recomiendan nuestros clientes.
    </p>

    <div class="row" style="gap:24px 0;">
      <div class="col-xs-12 col-md-4 mb-24">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:24px;height:100%;">
          <h3 class="fluid-8-b mb-12">Especialización</h3>
          <p class="fluid-9-r" style="color:var(--c-gray);">Solo derecho laboral y seguridad social. Nada más. Esto nos permite tener un dominio profundo de la materia y de la jurisprudencia más reciente del Tribunal Supremo.</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 mb-24">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:24px;height:100%;">
          <h3 class="fluid-8-b mb-12">Transparencia</h3>
          <p class="fluid-9-r" style="color:var(--c-gray);">Hoja de encargo por escrito antes de empezar, con honorarios cerrados. En reclamaciones de incapacidad y muchos despidos trabajamos a <strong>cuota litis</strong>: si no ganamos, no pagas.</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 mb-24">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:24px;height:100%;">
          <h3 class="fluid-8-b mb-12">Claridad</h3>
          <p class="fluid-9-r" style="color:var(--c-gray);">Cada cliente accede a una <strong>extranet jurídica</strong> donde puede ver, en tiempo real, el estado de su expediente, los próximos plazos y los escritos presentados.</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-48">
      <a class="btn btn-primary btn--big" href="/contacto/" data-cta="servicios_index_consulta">¿No ves tu caso? Cuéntanoslo gratis</a>
    </div>
  </div>
</section>
