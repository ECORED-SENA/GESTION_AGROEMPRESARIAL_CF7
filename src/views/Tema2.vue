<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 2
      h1 Diagnóstico y necesidades de talento humano
    figure(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LHTYPCvgPE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.my-5(data-aos="fade-down-right") Para poder establecer las necesidades de la intensidad de recursos humanos o talento humano requerido en una empresa agropecuaria en Colombia, primero se debe identificar los tipos de actividad y como es el sistema de explotación con que se opera. Este análisis se realiza teniendo en cuenta su desarrollo técnico tecnológico y la cantidad de producción o tamaño del terreno de la producción, de lo cual se establecen los siguientes sistemas productivos:
    h4.text-center(data-aos="fade-down-left") Sistemas productivos
    SlyderB.mb-5.fondo8.px-5.pt-0(data-aos="fade-down-right").otrocolorangleright(:datos="datosSlyder")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Necesidades del talento humano
    p(data-aos="fade-down-right") Algo importante que destacar en este proceso, es que actualmente las empresas de iniciativa formal y sistema de explotación intensivo, ya se cuenta con departamento de recursos humanos, ya que es pieza clave para el lograr los objetivos trazados. 
    p.mb-5(data-aos="fade-down-right") El propósito de esta dependencia es mantener a todos sus trabajadores comprometidos y motivados con las políticas y los objetivos de la empresa para la consecución del éxito. El ambiente diario de trabajo influye en las personas e interfiere en la parte física, emocional y mental de los trabajadores. Algo fundamental en el sector agropecuario para mejorar su rentabilidad, es implementar protocolos de funciones y responsabilidades, aplicar políticas de buen trato y de seguridad a los empleados o trabajadores.
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        img(src="@/assets/curso/tema2/imagen5.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        p Las necesidades de talento humano se fijan a partir de la definición de actividades a realizar en la empresa, tal cual como se mencionó en el literal de organización, donde el número de trabajadores depende de los cálculos de desempeño promedio que tenga la empresa, el tipo de recurso, así como, el tipo de aplicación. La mayor intensidad de trabajadores estará en los procesos productivos, y será allí, donde la empresa debe establecer el número adecuado, según el tipo de producto y su estacionalidad, ya que, por la naturaleza de los productos, debe ser suficiente, pues las producciones no marcadamente relacionadas al tiempo, y no pueden esperar en muchos casos, a que se ejecuten actividades. Los empresarios a partir de experiencias previas, por área de trabajo, o por referencias de otros productores, puede establecer los niveles de requerimiento de trabajadores por tipo de actividad, estableciendo el sistema de pagos más apropiado.
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 2
    p(data-aos="fade-down-right").ms-4 Ejemplo de establecimiento de Niveles de necesidad del número de empleados en una empresa
    img.mt-5(data-aos="fade")(src="@/assets/curso/tema2/tabla1.svg")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          '<p style="font-weight: 700; margin-bottom: 0">Sistema de explotación extensiva</p>La explotación agropecuaria extensiva es un sistema de producción a corto plazo, el cual se realiza maximizando la capacidad para la producción de productos alimenticios sin tener en cuenta aspectos técnicos, medioambientales y preservación del medioambiente. Se realiza utilizando los recursos naturales presentes en el lugar, incorporando agroquímicos, sistemas de riego y drenaje que afectan directamente los ecosistemas.<br/><br/>Es un sistema con baja productividad debido a la ausencia y aplicación de tecnologías en los procesos productivos, por ende, administrativos; sobresalen las explotaciones tradicionales en todos los renglones de la economía informal del sector agropecuario, obedece a las producciones familiares y de baja escala regularmente.',
        imagen: require('@/assets/curso/tema2/imagen1.jpg'),
      },
      {
        titulo: '',
        texto:
          '<p style="font-weight: 700; margin-bottom: 0">Sistema de explotación intensiva</p>La explotación agropecuaria intensiva se dedica a producir tipos de productos, que en el sistema extensivo, pero a diferencia, se utilizan menos recursos y optimizando la productividad. En ese tipo de explotación agropecuaria, se consideran aspectos técnicos para la producción, aspectos financieros, medioambientales y sociales, de tendencia de mercado, etc., que hacen más rentable su explotación.',
        imagen: require('@/assets/curso/tema2/imagen2.jpg'),
      },
      {
        titulo: '',
        texto:
          'Igualmente, se pueden observar los requerimientos del talento humano, desde el enfoque de iniciativa económica, que se resume en dos grupos:<br/><br/><p style="font-weight: 700; margin-bottom: 0">Iniciativa agropecuaria formal.</p><p>Para las entidades gubernamentales son todas las empresas que, sin importar su tamaño, ya sea persona natural o jurídica, se encuentran registradas y legalizadas ante los organismos de control y comercio. Estas empresas deben reportar todos sus movimientos económicos y financieros a través de la contabilidad, se llevan registros de compras de materias primas, insumos, suministros, costos de producción, registro de clientes y proveedores, y cuentan con permiso o licencia para poder funcionar.</p>',
        imagen: require('@/assets/curso/tema2/imagen3.jpg'),
      },
      {
        titulo: '',
        texto:
          '<p style="font-weight: 700; margin-bottom: 0;">Iniciativa agropecuaria informal</p>Este tipo de actividad agropecuaria, es la de mayor impacto social dentro de este sector primario, se refiere a que las actividades agropecuarias de grupos poblacionales pequeños, regularmente de economía familiar, caracterizándose por ser desarrolladas en condiciones precarias, con bajos recursos y bajos niveles de tecnología, con ingresos reducidos. Lo anterior, con el agravante que las bajas ganancias o utilidades obtenidas son destinadas en su orden a cubrir obligaciones bancarias, compra de alimentos necesarios para la subsistencia, dejando un pequeño remanente para reinvertir.<br/><br/><p>En cada región del territorio Colombiano, existen épocas de cosecha, de acuerdo a los ciclos productivos, algunos medianamente tecnificados y otros desarrollados en forma tradicional y cultural, continuando con la vocación regional en actividades agrícolas como monocultivo de papa, maíz, huertas caseras o dentro de la producción pecuaria a producir: leche, ganado en pie, huevos y lácteos (algunos realizan procesos agroindustriales transformando leche en queso).</p>',
        imagen: require('@/assets/curso/tema2/imagen4.jpg'),
      },
    ],
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
