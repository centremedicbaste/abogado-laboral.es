---
layout: layout/base.njk
permalink: /contacto/
metaTitle: "Contacto | Abogado Laboral — 1ª consulta gratuita en toda España"
metaDescription: "Contacta con Abogado Laboral: teléfono, WhatsApp, email y formulario. Te respondemos en menos de 60 minutos. Cobertura nacional con videoconsulta. Sede en Sevilla."
metaRobots: "index, follow"
title: "Contacto"
---

<section class="bg-color ptr-64 pbr-32">
  <div class="container">
    <nav aria-label="Migas de pan" class="text-14-r mb-24" style="color:var(--c-gray);">
      <a href="/" class="footer-link">Inicio</a> › <span>Contacto</span>
    </nav>
    <p class="text-14-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">Contacto · Cobertura nacional</p>
    <h1 class="fluid-3-l mb-16">Tu abogado laboralista de confianza</h1>
    <p class="fluid-7-r mb-32" style="color:var(--c-gray);max-width:780px;">
      Déjanos tus datos rellenando el formulario que verás a continuación y uno de nuestros abogados se pondrá en contacto contigo para informarte y analizar tu caso en la mayor brevedad posible. Primera consulta <strong>gratuita y confidencial</strong>, presencial en Sevilla o por videollamada en cualquier provincia de España.
    </p>

    <div class="row mb-48" style="gap:24px 0;">
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:20px;height:100%;">
          <p class="text-12-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">Teléfono</p>
          <a class="fluid-8-b" style="color:var(--c-primary);" href="tel:{{ global.telefono_e164 }}" data-cta="contacto_tel">{{ global.telefono }}</a>
          <p class="text-14-r mt-8" style="color:var(--c-gray);">Pulsa para llamar</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:20px;height:100%;">
          <p class="text-12-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">WhatsApp</p>
          <a class="fluid-8-b" style="color:var(--c-primary);" href="https://wa.me/{{ global.whatsapp }}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20consulta" target="_blank" rel="noopener" data-cta="contacto_whatsapp">Enviar mensaje</a>
          <p class="text-14-r mt-8" style="color:var(--c-gray);">Respuesta en menos de 60 min</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:20px;height:100%;">
          <p class="text-12-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">Email</p>
          <a class="fluid-9-b" style="color:var(--c-primary);word-break:break-all;" href="mailto:{{ global.email }}" data-cta="contacto_email">{{ global.email }}</a>
          <p class="text-14-r mt-8" style="color:var(--c-gray);">Te respondemos por escrito</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div style="background:#fff;border:1px solid #eee;border-radius:8px;padding:20px;height:100%;">
          <p class="text-12-b mb-8" style="color:var(--c-primary);text-transform:uppercase;letter-spacing:.05em;">Sede</p>
          <p class="fluid-9-b" style="color:var(--c-primary);">{{ global.direccion }}, {{ global.codigopostal }} {{ global.ciudad }}</p>
          <p class="text-14-r mt-8" style="color:var(--c-gray);">{{ global.horario }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

{% include "templates/contacta_4.njk" %}
{% include "templates/contacta_5.njk" %}
