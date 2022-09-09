<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manual de funciones y responsabilidades
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    .row.justify-content-center.mt-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p.fondo1.p-4 Es un documento de carácter instrumental administrativo, de consulta y conocimiento a los empleados, que expone las principales normas, funciones, y responsabilidades, las posibilidades de ascensos, sanciones aplicables dentro de la empresa; tiene como objetivo actualizar e informar al recurso humano sobre las actividades a realizar, para la producción o tareas a desarrollar en la empresa.
        p Es una herramienta del equipo de talento humano que le permite establecer con claridad las funciones y competencias laborales de los empleos que conforman la planta de personal de la empresa; así como los requerimientos de conocimiento, experiencia y demás competencias exigidas para el desempeño de sus funciones laborales.
        p También hace parte importante para la ejecución de los procesos de planeación, requisitos de ingreso, permanencia y desarrollo del talento humano al servicio de la organización agropecuaria.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema5/figura1.svg")
    p.text-bold.mt-4 Características o particularidad de un manual de funciones y procedimientos.
    p El enfoque de este documento recae mayormente en la administración de recursos humanos y en la contribución del mejoramiento y desarrollo de la empresa. Contiene las políticas y tareas a desarrollar, así como la descripción de los cargos de trabajo relacionados con el proceso.
    p.text-bold.mb-5 Componentes de un manual de funciones:
    .row.justify-content-center.mb-4
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo2")
          .row.justify-content-center.align-items-center(titulo="Procesos o Procedimiento")
            .col-md-10.mb-md-0.mb-0.ps-4
              p Es la descripción por escrito, narrativa y secuencial, de cada una de las operaciones que se realizan en un procedimiento, explicando en qué consisten, cuándo, cómo, dónde, con qué, y cuánto tiempo se hacen, señalando los cargos responsables de llevarlas a cabo, etc.    
        
          .row.justify-content-center.align-items-center(titulo="Diagramas de flujo")
            .col-md-10.mb-4.mb-md-0.ps-4
              p Es la representación gráfica de la sucesión de las actividades de un procedimiento y/o el recorrido productivo, de un producto o recurso, en donde se muestran los cargos que intervienen en cada operación descrita.

          .row.justify-content-center.align-items-center(titulo="Citación del cargo y las dependencias")
            .col-md-10.mb-4.mb-md-0.ps-4
              p A las que se puede pertenecer el manual.

      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema5/imagen1.jpg")
    .row.justify-content-center.mb-4
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        img(src="@/assets/curso/tema5/imagen2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo2")
          .row.justify-content-center.align-items-center(titulo="Organigrama funcional")
            .col-md-10.mb-md-0.mb-0.ps-4
              p De la empresa, que describa los cargos que involucra el manual, y que evidencie el conducto regular de comunicaciones y de reporte de actividades, lo que se llama regularmente jefe inmediato.
       
          .row.justify-content-center.align-items-center(titulo="Las descripciones de tareas")
            .col-md-10.mb-4.mb-md-0.ps-4
              p De manera breve y conjugada a otros cargos, para detallar el funcionamiento general de la empresa y como es el paso a paso interactivo con otros cargos.

          .row.justify-content-center.align-items-center(titulo="Conocimientos básicos o esenciales")
            .col-md-10.mb-4.mb-md-0.ps-4
              p Requisitos de formación académica y experiencia de quien desarrollará las actividades, ya que este aspecto fundamenta la idoneidad del trabajador.
    p.mb-5 La importancia de los manuales de funciones y procedimientos nace en que fija las bases para realizar el control y evaluación de desempeño, por otro lado, facilita el autoaprendizaje del empleado acerca del funcionamiento de la empresa, los procesos donde participa y sus responsabilidades. Para una empresa del sector agropecuario es muy importante tener definido el manual específico de funciones de cada uno de sus empleados y saber cuál perfil ocupacional escoger de acuerdo a sus competencias laborales, pero sin desconocer los lineamientos del Ministerio del Trabajo, de la normatividad para el sector, etc.
    .titulo-sexto.color-acento-botones.mb-0
      h5 Figura 14
    span.ms-4 Ejemplo de un manual de funciones
    img.mt-5(src="@/assets/curso/tema5/tabla1.svg")
    p.mt-5 Para ampliar conceptos sobre esta temática de manuales de funciones y procedimientos, se recomienda consultar el anexo.
</template>

<script>
export default {
  name: 'Tema5',
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
