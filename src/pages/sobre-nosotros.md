---
layout: layout/base.njk
permalink: /sobre-nosotros/
metaTitle: "Sobre nosotros | Abogado Laboral — Despacho con cobertura nacional"
metaDescription: "Quiénes somos: despacho de abogados laboralistas con sede en Sevilla y cobertura nacional. Especialistas en derecho laboral, incapacidades y centros especiales de empleo desde 2009."
metaRobots: "index, follow"
title: "Sobre nosotros"
eyebrow: "El despacho · Cobertura nacional"
page_title: "Asesoría jurídica integral en derecho laboral"
page_subtitle: "<strong>Abogado Laboral</strong> se compone de un equipo de expertos en derecho del trabajo, seguridad social, incapacidad permanente y centros especiales de empleo. Defendemos de forma integral, elaborando una solución para lo que antes era un problema."
---

{% include "templates/lex-hero-page.njk" %}

<section class="lex-section">
  <div class="container-global mx-auto">
    <div class="lex-about__grid">
      <div class="lex-prose">

## Quiénes somos

**Abogado Laboral** es un despacho de abogados especialistas en **derecho laboral, seguridad social, incapacidad permanente y centros especiales de empleo** que ejerce desde 2009. Nuestra sede física está en Sevilla pero **atendemos a clientes en toda España** mediante videoconsulta, firma electrónica y desplazamientos cuando el caso lo requiere.

Surgimos de la sinergia de profesionales especializados en la gestión y asesoramiento jurídico para trabajadores, empresas y asociaciones. Solo con el conocimiento específico de la materia se puede conseguir la perfección profesional, y por eso desde el bufete mantenemos rigurosas normas de calidad, teniendo como único objetivo el éxito del procedimiento.

## Áreas de práctica

- **Derecho del trabajo individual**: contratación, despidos, modificaciones sustanciales, salarios y reclamaciones de cantidad.
- **Derecho del trabajo colectivo**: convenios, conflictos colectivos, sindicatos, derecho de huelga.
- **Seguridad Social**: incapacidad permanente, jubilación, viudedad, orfandad y prestaciones.
- **Prevención de riesgos laborales**: recargo de prestaciones, accidentes y enfermedades profesionales, indemnización por daños.
- **Inspección de Trabajo**: asistencia, recurso de actas, sanciones y defensa de empresas.
- **Centros Especiales de Empleo**: calificación, gestión, subvenciones y asesoramiento integral.
- **Herencias y sucesiones laborales**: capitales pendientes de seguros colectivos, mejoras voluntarias de convenio, planes de pensiones empresariales.

## Cómo trabajamos: nuestros tres pilares

**Especialización.** Solo derecho laboral y seguridad social. Nada más. Esto nos permite tener un dominio profundo de la materia, de la jurisprudencia más reciente del Tribunal Supremo y del TJUE, y de las particularidades procesales de cada juzgado.

**Transparencia.** Antes de empezar cualquier procedimiento, te entregamos una **hoja de encargo por escrito** con honorarios cerrados. Cero sorpresas. Y en reclamaciones de incapacidad y muchos despidos trabajamos a **cuota litis**: si no ganamos, no pagas.

**Claridad.** Cada cliente accede a una **extranet jurídica** donde puede ver, en tiempo real, el estado de su expediente, los próximos plazos, los escritos presentados y las resoluciones recibidas. Todo bajo control.

## Por qué trabajar con Abogado Laboral

- **Desde 2009** ejerciendo exclusivamente derecho laboral y de la Seguridad Social.
- **Cobertura nacional**: presencial en Sevilla, videoconsulta en cualquier provincia.
- **Equipo multidisciplinar**: abogados, graduados sociales, peritos médicos colaboradores.
- **Primera consulta gratuita** y confidencial.
- **Tecnología moderna**: extranet de cliente, LexNET, firma electrónica, vista virtual.
- **Vosotros habláis por nosotros.** Nuestra mejor publicidad son las recomendaciones de quienes ya han confiado en nosotros.

      </div>

      <aside class="lex-about__aside">
        <div class="lex-about__cta">
          <p class="lex-eyebrow lex-eyebrow--light"><span class="lex-eyebrow__bar" aria-hidden="true"></span>Habla con nosotros</p>
          <h2 class="lex-about__cta-title">Estudio gratuito de tu caso en 24 h.</h2>
          <p class="lex-about__cta-text">Primera consulta gratuita por videollamada o presencial. Te respondemos en menos de 60 minutos en horario laboral.</p>
          <a href="/contacto/" class="lex-btn lex-btn--accent lex-btn--full" data-cta="about_consulta">
            Reservar consulta
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12 H19 M14 7 L19 12 L14 17" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></svg>
          </a>
          <a href="tel:{{ global.telefono_e164 }}" class="lex-about__tel" data-cta="about_tel">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4 H9 L11 9 L8 11 C9 14 10 15 13 16 L15 13 L20 15 V19 C20 20 19 21 18 21 C10 21 3 14 3 6 C3 5 4 4 5 4 Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/></svg>
            {{ global.telefono }}
          </a>
        </div>
      </aside>
    </div>
  </div>
</section>

{% include "templates/lex-equipo.njk" %}
{% include "templates/lex-cta-final.njk" %}

{% include "templates/lex-styles.njk" %}

<style>
.lex-about__grid{display:grid;grid-template-columns:1fr;gap:48px;}
@media(min-width:992px){.lex-about__grid{grid-template-columns:minmax(0,1fr) 320px;gap:80px;}}

.lex-prose{font-family:var(--font-sans);font-size:17px;line-height:1.78;color:#1f2a44;max-width:760px;}
.lex-prose > p:first-of-type{font-size:19px;color:var(--c-primary);}
.lex-prose p{margin:0 0 1.4em;}
.lex-prose strong{color:var(--c-primary);font-weight:600;}
.lex-prose h2{
  font-family:var(--font-display);font-weight:500;
  font-size:clamp(28px,3.4vw,40px);line-height:1.08;letter-spacing:-0.022em;
  color:var(--c-primary);margin:2.2em 0 .6em;padding-top:.4em;border-top:1px solid #e3e8f3;
}
.lex-prose h2:first-child{border-top:0;padding-top:0;margin-top:0;}
.lex-prose ul{padding-left:1.4em;margin:0 0 1.4em;}
.lex-prose li{margin-bottom:.5em;}
.lex-prose ul li::marker{color:var(--c-accent);}

.lex-about__aside{position:relative;}
.lex-about__cta{
  position:sticky;top:96px;
  background:var(--c-primary,#0b1e4f);color:#dde4f5;
  border-radius:14px;padding:28px 24px;
}
.lex-about__cta-title{
  font-family:var(--font-display);font-weight:500;
  font-size:22px;line-height:1.2;letter-spacing:-0.015em;
  color:#fff;margin:8px 0 8px;
}
.lex-about__cta-text{font-size:13.5px;line-height:1.55;color:#b8c3e0;margin:0 0 18px;}
.lex-about__tel{
  display:flex;align-items:center;justify-content:center;gap:10px;
  margin-top:10px;color:#dde4f5;text-decoration:none;
  font-family:var(--font-sans);font-size:14px;
  padding:12px 18px;border:1px solid #1f3573;border-radius:8px;
  transition:border-color .15s ease;
}
.lex-about__tel:hover{border-color:var(--c-accent);color:#fff;opacity:1;}
</style>
