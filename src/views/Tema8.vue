<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Reclutamiento del personal
    .row.justify-content-center.align-items-center
      .col-xxl-3.col-xl-3.col-lg-3.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema8/figura1.svg')
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12(data-aos="fade-down-right")
        p Es la función de procesos de gestión de recursos humanos que tiene por finalidad localizar y convocar el personal más calificado para el desarrollo de las actividades de los cargos a suplir y de las vacantes disponibles por cargo. Antes de proceder a esa búsqueda, se debe tener una idea clara de las actividades a desarrollar en el cargo; para ello, la persona encargada en el departamento de recursos humanos tendrá la tarea de realizar un análisis de puesto. Este es un proceso que determina las tareas, destrezas, habilidades y responsabilidades que se requieren para cumplir exitosamente con un cargo, que es un conjunto de actividades relacionadas funcionalmente.
    h3.mb-5 La información para este análisis surge de:
    .row.justify-content-between
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Requerimiento de vacante a suplir
          li 
            .lista-ol--cuadro__vineta
              span 2
            | La descripción de actividades que comprende el cargo y su título, los deberes, maquinarias, materiales usados, de quien ejercerá la supervisión, condiciones del trabajo y posibles riesgos laborales.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | El perfil esperado del interesado y quien vaya a desempeñar el cargo, en el cual se define las características del personal que desempeñará el cargo, lo cual comprende: tipo de formación y educación necesaria, experiencia en trabajos similares, habilidades y destrezas que debe tener, facilidad de comunicación y la habilidad para trabajar con otros, entre otros aspectos
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Hacer la convocatoria
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Hacer entrevista preliminar de interés, la cual no necesariamente es presencial
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Compilar las hojas de vida y verificar potencialidad de perfil
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Definir candidatos para el proceso de selección.
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-botones.mb-0
          h5 Figura 15
        span.ms-4 Procesos de reclutamiento de personal
        img.mt-4(src='@/assets/curso/tema8/figura2.svg')
    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/e_ah_grWSzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Realizar una convocatoria interna entre los trabajadores que estén interesados.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Convocar desde anuncios comerciales, solicitar información a empresas similares. 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Publicar requerimiento en universidades o entidades técnicas agropecuarias.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Solicitar referidos de personas conocidas en la localidad o región.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right") 
        img(src='@/assets/curso/tema8/imagen1.jpg')
    .row.justify-content-center.align-items-center.mt-5
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema8/figura3.svg')
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-down-right")
        h4.fondotitulo.text-white.text-center.text-bold.mb-0.py-2 Tipos de reclutamiento
        p.text-bold.my-3 Cuando tu empresa necesita personal es indispensable 
          span.colorletra.text-bold analizar a detalle 
          span qué tipo de perfil es el más adecuado para ocupar este puesto. Según la vacante será el tipo de reclutamiento:
        p.fondo11.text-bold a. Reclutamiento interno. 
        p.fondo15.text-bold b. Reclutamiento externo. 
        p.fondo11.text-bold c. Reclutamiento mixto. 
        p.fondo15.text-bold d. Reclutamiento 2.0 o reclutamiento social.
    p Esta actividad, para efectos de optimización se puede subcontratar, es decir la empresa y su administrador, por no ser su especialidad, pueden contratar los servicios de otras empresas caza talentos, donde las necesidades y requerimiento son transmitidas y esta empresa procederá a ubicar convocar el personal que la empresa demanda. El reclutamiento de personal en las empresas agropecuarias representa un gran vacío, en cuanto al cumplimiento de la localización, la idoneidad y cantidad de mano de obra a suplir, convirtiéndose en un cuello de botella para los resultados de las diferentes actividades, por lo cual las empresas recurren a la capacitación y entrenamiento del personal.
</template>

<script>
export default {
  name: 'Tema8',
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
