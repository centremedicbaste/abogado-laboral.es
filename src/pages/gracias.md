---
layout: layout/base.njk
permalink: /gracias/
metaTitle: "Gracias | Hemos recibido tu mensaje"
metaDescription: "Gracias por contactar con Abogado Laboral. Te llamamos en menos de 60 minutos en horario laboral."
metaRobots: "noindex, follow"
title: "Gracias"
---

<section class="bg-color ptr-64 pbr-64 text-center">
  <div class="container" style="max-width:680px;">
    <div class="mb-32" style="font-size:64px;">✅</div>
    <h1 class="fluid-3-l mb-16">¡Gracias! Hemos recibido tu mensaje</h1>
    <p class="fluid-7-r mb-32" style="color:var(--c-gray);">
      Te llamamos en menos de <strong>60 minutos</strong> en horario laboral. Si nos has escrito fuera de horario, te contactaremos a primera hora del próximo día hábil.
    </p>

    <div class="is-flex content-center" style="gap:16px;flex-wrap:wrap;">
      <a class="btn btn-primary btn--big" href="https://wa.me/{{ global.whatsapp }}?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20de%20la%20web" target="_blank" rel="noopener" data-cta="gracias_whatsapp">💬 WhatsApp</a>
      <a class="btn btn-secondary btn--big" href="tel:{{ global.telefono_e164 }}" data-cta="gracias_tel">📞 Llamar ahora</a>
    </div>

    <hr style="margin:48px 0;border:0;border-top:1px solid #eee;">

    <h2 class="fluid-7-b mb-16">Mientras esperas, lee algo útil</h2>
    <div class="row text-left" style="gap:16px 0;">
      <div class="col-xs-12 col-sm-4">
        <a href="/servicios/despidos/" class="footer-link" style="color:var(--c-primary);"><strong>Plazos para reclamar un despido</strong></a>
      </div>
      <div class="col-xs-12 col-sm-4">
        <a href="/servicios/incapacidad-permanente/" class="footer-link" style="color:var(--c-primary);"><strong>Cómo reclamar una incapacidad denegada</strong></a>
      </div>
      <div class="col-xs-12 col-sm-4">
        <a href="/servicios/accidentes-laborales/" class="footer-link" style="color:var(--c-primary);"><strong>El recargo de prestaciones</strong></a>
      </div>
    </div>
  </div>
</section>

<script>
  if(window.dataLayer){window.dataLayer.push({event:'lead_form_thanks',source:document.referrer||'direct'});}
</script>
