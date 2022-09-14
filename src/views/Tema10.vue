<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Bienestar laboral
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p El departamento de Recursos Humanos o de gestión del talento humano en las empresas, se centra en la idea de que el éxito de la compañía depende en gran parte del talento humano de todas sus dependencias y las habilidades de sus empleados, quienes crean estrategias de negocio, iniciativas de trabajo, generan estrategias de mejora, por lo cual es fundamental para el éxito empresarial generar sentido de escucha y pertenencia, compromiso, colaboración y confianza, así como respeto y buenas relaciones laborales.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema10/imagen1.jpg')
    .row.justify-content-center.my-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema10/imagen2.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        p Los empleados en el tiempo, buscan su desarrollo laboral y económico, por lo cual las empresas deben establecer políticas como de carrera administrativa, rotación de actividades, fomentar el trabajo en equipo, organización del trabajo, calidad de vida laboral, sistemas de compensación flexible y complementaria, etc.; dirigidas a los trabajadores que son considerados como el recurso más importante de la empresa, fortaleciendo de esta manera el vínculo laboral y contribuyendo en la consecución de los objetivos y expectativas de cada uno, ofreciendo de esta manera salarios justos y motivadores, estabilidad, seguridad social, calidad de vida, satisfacción personal, respeto, mejores oportunidades, capacitación, autonomía y participación, y otros incentivos que no necesariamente son monetarios.
    p.my-5 En resumen, el bienestar laboral comprende en darle a los empleados beneficios adicionales, aparte de un buen salario, que permitan que trabajen contentos y motivados. Estos beneficios pueden ser monetarios y no monetarios, pero ambos contribuyen a alcanzar una mejor calidad de vida y un excelente ambiente laboral.
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema10/figura1.svg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        h4.fondotitulo.text-white.text-center.text-bold.mb-0.py-2.mb-5 Bienestar laboral
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Beneficios monetarios.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Programa de reconocimientos.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Seguros médicos.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Tiempo de vacaciones y recreación.

          li 
            .lista-ol--cuadro__vineta
              span 5
            | Flexibilidad de horarios. 
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Capacitación y actualización.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Fondos de pensiones y jubilación.
    p.mb-4 La gestión del talento humano es una de las funciones sustantiva, para la dinámica empresarial, es una función de logística para toda la empresa pues se encarga de suministrar el talento humano para el desarrollo de las actividades de la empresa, lo que exige un ejercicio de planeación de las iniciativas estratégicas que se deriven del diagnóstico empresarial, vela por la organización y estructura empresarial, de tal manera que establece mecanismos para su operación como es la estructuración de los cargos como agrupaciones de actividades similares, generando los manuales pertinentes a los proceso donde participe cada trabajador. La Gestión del talento humano está íntimamente ligada al proceso administrativo, pues a partir de las necesidades sociales de la empresa se dispondrá de recursos, se tendrá que hacer gestiones de dirección bajo el estilo que requiera la empresa: autocrático cuando se requieren decisiones rápidas, liberal, cuando el grado de madurez laboral permite que se delegue, para que la gerencia se concentre en otras actividades de propias de su cargo, o el democrático que basado en el consenso se toman las decisiones.
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p Una buena gestión de talento humano se ocupa de funciones vitales para la empresa como es el desarrollo de clima laboral, el reclutamiento y selección de personal, vela por la seguridad e higiene de sus trabajadores y las condiciones donde presta el servicio, es generador de nuevas capacidades productivas a partir del liderazgo de planes de capacitación y entrenamiento. Al igual la gestión de recursos humanos exige la evaluación del desempeño de los trabajadores vista como una oportunidad de mejorar los procesos, identificar necesidades del personal para que puedan desarrollar bien su trabajo. Y no podía faltar el que se encarga de administrar el sistema de compensaciones y beneficios, el cual debe estar acorde a las condiciones promedio del sector.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")     
        img(src='@/assets/curso/tema10/imagen3.jpg')
</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
