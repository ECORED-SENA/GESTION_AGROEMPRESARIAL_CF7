<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white i
      h1 Introducción
    p.mb-5 En este componente formativo se tratan los temas relacionados respecto a la importancia del Recurso de Talento Humano dentro de las empresas, empecemos con un contexto general a continuación:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KdBpeKjDums" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
