<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 9
      h1 Selección del personal
    p.mb-5(data-aos="fade-down-left") La selección de personal es el proceso que sigue ante el proceso de reclutamiento de candidatos a un cargo, del cual se espera suplir la necesidad de la(s) vacantes, y poder adelantar la contratación de un empleado en la empresa. La finalidad de este proceso es elegir al candidato más adecuado para la empresa en pro del desarrollo de las actividades del puesto de trabajo, a continuación, se relacionan los pasos de la selección de personal:
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema9/figura1.svg')

          .tarjeta.fondo16.p-3(x="50%" y="3%" numero="1")
            .h5.mb-2 Entrevista preliminar
            p Las personas postuladas y preseleccionadas en el reclutamiento pasarán a la siguiente fase del proceso de selección. Se realiza una entrevista preliminar que busca la descripción de la empresa y del candidato en aspectos generales, y donde se describen los demás pasos del proceso, algunas empresas continúan con las pruebas o las dejan al final.

          .tarjeta.fondo16.p-3(x="84%" y="17%" numero="2")
            .h5.mb-2 Pruebas
            p Los tipos de pruebas que se aplican a los candidatos dentro del procesos de selección se pueden clasificar en:

            ul.lista-ul
              li.mb-0 
                i.fas.fa-check
                | Test psicotécnicos.
              li.mb-0
                i.fas.fa-check
                | Pruebas profesionales.
              li.mb-0 
                i.fas.fa-check
                | Pruebas físicas y de demostración de dominio de labor. 

            p La elección del tipo de prueba depende del cargo y puesto.

          .tarjeta.fondo16.p-3(x="96%" y="50%" numero="3")
            .h5.mb-2 Informe de Postulantes
            p Dado que los postulantes al cargo pueden ser entrevistados por varias personas, y para efectos de facilitar la toma de decisiones, se recopilan los datos de cada uno de los postulantes y realiza el informe con las cualidades y aspectos negativos de cada uno de ellos. Esto facilitará el siguiente paso que será elegir al futuro empleado.
          .tarjeta.fondo16.p-3(x="83%" y="83%" numero="4")
            .h5.mb-2 Elección de postulante
            p A partir del informe consolidado de los postulantes entrevistados y sus resultados de pruebas, se procede a elegir al candidato que se ajusta más al perfil que se busca.

          .tarjeta.fondo16.p-3(x="52%" y="97%" numero="5")
            .h5.mb-2 Contratación
            p Consiste en comunicar al postulante elegido, la buena noticia, y que proceda a la firma del contrato con la persona de recursos humanos. En el documento de contrato se deberán establecer todas las condiciones propias para el desempeño de actividades, se debe indicar qué cargo ocupará en la empresa, funciones a realizar, remuneración, el tiempo que trabajará en la compañía, etc. 
            p Posteriormente se remite al nuevo empleado a la valoración médica, ya que se busca identificar con qué condiciones de salud para el trabajo tiene el postulante.
          .tarjeta.fondo16.p-3(x="17%" y="83%" numero="6")
            .h5.mb-2 Incorporación al puesto
            p Es cuando el trabajador inicia labores formalmente en la empresa, estableciendo un período de prueba el cual no puede ser mayor a seis meses, de contar con contrato a término indefinido.
            
          .tarjeta.fondo16.p-3(x="4%" y="50%" numero="7")
            .h5.mb-2 Inducción y capacitación
            p Se recomienda que la empresa desarrolle un proceso inductivo, presente al nuevo trabajador en las diferentes áreas de trabajo y compañeros, lo que facilitará que el nuevo integrante de nuestro equipo se adapte lo más rápido a las tareas que hay que realizar y a la organización en general. Es realizar un proceso de formación empresarial, con el fin que el nuevo empleado se sienta activo.
          .tarjeta.fondo16.p-3(x="17%" y="16%" numero="8")
            .h5.mb-2 Evaluación de inducción y proceso
            p El proceso de selección de personal debe contemplar realizar un seguimiento de los trabajadores a mediano plazo. Este proceso permite evaluar los aspectos que pudieran mejorarse. El instrumento que regularmente se utiliza para esto son las encuestas de satisfacción. De este proceso se busca identificar aspectos a mejorar en la selección y el reclutamiento.
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 10
      br
      span Diferencias entre Reclutamiento y selección de personal
    .tabla-a.color-acento-botones.my-4(data-aos="fade-down-right")
      table.bordestabla
        thead.text-center
          tr
            th.bordeencabezado Aspecto
            th.bordeencabezado Reclutamiento
            th.bordeencabezado Selección de personal
        tbody
          tr
            td.bordestabla.text-center 
              span.text-bold Significado 
            td.bordestabla.text-center Actividad que consiste en promover vacantes y buscar postulantes
            td.bordestabla.text-center Proceso administrativo que busca elegir a los empleados más capacitados y adecuados para la empresa.
          tr
            td.bordestabla.text-center 
              span.text-bold Objetivos
            td.bordestabla.text-center Convocar un gran número de candidatos para un cargo.
            td.bordestabla.text-center Elegir al candidato adecuado a las funciones establecidas.
          tr
            td.bordestabla.text-center 
              span.text-bold Proceso
            td.bordestabla.text-center El reclutamiento estimula, motiva a los empleados potenciales a postularse para el nuevo trabajo. 
            td.bordestabla.text-center La selección de personal implica la negativa a otros candidatos que no fueron adecuados.
          tr
            td.bordestabla.text-center 
              span.text-bold Utilidad
            td.bordestabla.text-center Para que el proceso de contratación sea eficaz, las necesidades de la empresa se ajustan a las necesidades de los candidatos.
            td.bordestabla.text-center La selección del personal adecuado ayuda a la gerencia a realizar el trabajo de manera efectiva.
          tr
            td.bordestabla.text-center 
              span.text-bold Relaciona a
            td.bordestabla.text-center El reclutamiento convoca a los trabajadores de la empresa, favoreciendo el ejercicio de promoción y desarrollo 
            td.bordestabla.text-center La decisión de contratación es potestativa del empresario.
</template>
<script>
export default {
  name: 'Tema9',
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
