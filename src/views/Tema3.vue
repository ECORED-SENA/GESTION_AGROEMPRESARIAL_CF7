<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 3
      h1 Estilos de dirección
    .row.justify-content-between.mb-4
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        p La administración de una empresa agropecuaria está enfocada directamente en la toma de decisiones en los diferentes niveles de la organización, esto para el cumplimiento de las metas y objetivos. En este orden de ideas, el emprendedor o quien administra la unidad productiva debe tener autonomía, liderazgo en la toma de decisiones y manejo de los recursos económicos, físicos y humanos. Además, se debe tener autoridad, responsabilidad, coordinación y resolución de problemas, los cuales se presentan en las diferentes unidades de la empresa agropecuaria.  Existen tres estilos de dirección muy comunes que facilitan la toma de decisión como se indica en la siguiente tabla, y como fueron tratados en el proceso administrativo para dinamizar las empresas:
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.pe-5(data-aos="fade-down-left")
        img(src="@/assets/curso/tema3/figura1.svg")
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 3
    p(data-aos="fade-down-right").ms-4 Estilos de Dirección a partir de la toma de decisión
    .tabla-a.color-acento-botones.my-5(data-aos="fade-down-left")
      table.text-center.bordestabla
        thead
          tr
            th.bordeencabezado Estilo
            th.bordeencabezado Toma de Decisiones
            th.bordeencabezado Compromiso del Empleado
            th.bordeencabezado Compromiso del Gerente
        tbody
          tr
            td.bordestabla Autocrático
            td.bordestabla Centralizada
            td.bordestabla Bajo
            td.bordestabla Muy alto
          tr
            td.bordestabla Liberal
            td.bordestabla Delegada Descentraliza
            td.bordestabla Alto
            td.bordestabla Alto
          tr
            td.bordestabla Democrático
            td.bordestabla Por Consenso
            td.bordestabla Alto
            td.bordestabla Alto
    p.mb-5(data-aos="fade-down-right") De allí que sea fundamental para el departamento de recursos humanos o el administrador líder del proceso, seleccionar un buen administrador que realice su función de manera efectiva. Por medio de la diligencia correcta de un administrador se hace dinámico el equipo de trabajo, que opere y funcione de acuerdo a los recursos existentes.
    .row.justify-content-center.align-items-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-5(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/figura2.svg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        p Se puede inferir que con una dirección exitosa se logra un uso eficiente de los recursos y con la identificación pertinente de los talentos humanos se ejecutan y se consolida la toma de decisiones. Mientras que cuando la dirección es inadecuada, los recursos se desperdician, las responsabilidades se diluyen, y los conflictos productivos, de cumplimiento de actividades no encuentran desarrollo.
        p La administración de una explotación agropecuaria a escala menor puede estar a cargo del emprendedor; mientras que para producciones agropecuarias intensivas y tecnificadas se hace necesario la presencia de una cadena de mando que incluya un gerente, jefes de departamentos administrativos, comerciales y de producción, quienes ejercerán capacidades de liderazgo e influencia para que los trabajadores se encarguen de los trabajos según su asignación.
    p.my-5(data-aos="fade-down-left") En las condiciones actuales de la economía, es fundamental que los productores agropecuarios adquieran un cambio de cultura empresarial y procedan a darle importancia a los procesos administrativos, técnicos, sociales, ambientales y financieros; con los parámetros de manejo y liderazgo empresarial, que faciliten la interacción o comunicaciones entre los trabajadores de la empresa, y que logren las actividades planeadas y los resultados esperados, en ese sentido surge el liderazgo y la dirección en conformidad a la situación de comportamiento de los trabajadores:
    figure(data-aos="fade-down-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K-YPgKlK2BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.my-5(data-aos="fade-down-left") De igual manera y dada las características las empresas del sector agropecuario, se considera conveniente tener como opción de dirección un estilo basado en dos dimensiones, las relaciones interpersonales y el dominio en las tareas, el cual se explica en el siguiente video:

    figure(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/HzqbHWDKtrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
