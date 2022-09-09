<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Gestión del talento humano
    .row.ampliar.fondo14
      .col-12.px-5
        .row
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mt-0.mt-lg-5(data-aos="fade-up-left")
            p.p-4.fondo1.correrder Las prácticas de gestión del talento humano en empresas del sector agropecuarias en Colombia, han cambiado en cuanto a sus principios y la función de los dirigentes de organización, de aquella que se caracterizaba por tener un jefe autoritario; Ahora, se habla de una gestión basada en el liderazgo. El Sistema de gestión humana define los principios más generales para el desarrollo y movilización de las personas teniendo en cuenta sus características y el contexto que la organización necesita para alcanzar su misión.
            p El manejo directo de las personas es, y siempre ha sido, parte integral de la responsabilidad de los gerentes, los administradores y los supervisores. Una empresa u organización debe definir las responsabilidades del directivo, para cumplir con las funciones de Desarrollo humano de la siguiente forma:
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
            img(src='@/assets/curso/tema6/imagen1.jpg')
        .row.justify-content-center.mt-5
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
            img(src='@/assets/curso/tema6/imagen2.jpg')
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Promover la superación profesional de acuerdo con el puesto.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Influir en el mejoramiento del desempeño.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Propiciar la cooperación y lograr excelentes relaciones interpersonales.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Control preciso de los costes de mano de obra, lo que permitirá su uso eficiente.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Desarrollar las competencias de cada persona.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Promover excelentes condiciones de salud para el personal.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Evaluar a cada trabajador de acuerdo a su desempeño.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Ser tenido en cuenta con las necesidades del personal para el futuro.
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Ubicar a las personas idóneas en el puesto adecuado.

</template>

<script>
export default {
  name: 'Tema6',
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
