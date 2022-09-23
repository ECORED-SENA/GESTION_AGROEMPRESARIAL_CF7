<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 1
      h1 Proceso administrativo
    p.mb-5(data-aos="fade-down-right") Vamos a ampliar los conceptos básicos de la administración de las empresas agropecuarias con el siguiente video:
    figure(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VtQBLQftnrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.my-5(data-aos="fade-down-right") Las actividades del sector agropecuario se dividen en cuatro categorías de actividad específica:
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 1
    p.mb-4.ms-4(data-aos="fade-down-right") Tipos de actividades empresariales por categorías del sector agropecuario
    .tabla-a.my-5.align-items-left(data-aos="fade-down-left")
      table
        thead
          tr
            th.bordeencabezado Agrícola
            th.bordeencabezado Pecuario
            th.bordeencabezado Avícola
            th.bordeencabezado Apicultor

        tbody
          tr
            td.bordestabla Cultivo de Verduras y hortalizas
            td.bordestabla Bovinos
            td.bordestabla Pollos y gallinas
            td.bordestabla Recolección de miel y cera

          tr
            td.bordestabla Cultivo de frutas
            td.bordestabla Porcinos
            td.bordestabla Codornices
            td.bordestabla Cuidado de abejas, etc.

          tr
            td.bordestabla Cultivo en invernaderos y viveros
            td.bordestabla Ovinos y Caprinos
            td.bordestabla Producción de huevo
            td.bordestabla Recolección de jalea real, etc.

          tr
            td.bordestabla Cultivo de cereales, leguminosas, arroz, trigo, frijol, etc.
            td.bordestabla Pescados, mariscos, etc.
            td.bordestabla Otras producciones avícolas derivadas
            td.bordestabla 
    p.my-5(data-aos="fade-down-right") Cada categoría de actividades del sector contempla regulaciones y normas, sistemas de producción específica, tecnologías, y por tanto, requerimientos y disponibilidad de recursos humanos capacitados para las diferentes labores a desarrollar, pues se busca que la actividad agropecuaria sea eficaz y cumpla con el objetivo de satisfacer las necesidades de la sociedad, por lo cual requiere de empresas que desarrollen un proceso administrativo ajustado a su dedicación.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-8.col-md-12
        .titulo-sexto.color-acento-botones(data-aos="fade-down-right")
          h5 Figura 1
          br
          span Proceso Administrativo
        figure.mb-5(data-aos="fade-down-left")
          img(src='@/assets/curso/tema1/figura1.svg')
        p.text-small.ms-5 Fuente: Elaboración propia
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.1  Planeación
    .row
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mt-0.mt-lg-5(data-aos="fade-up-left")
        p.p-4.fondo1.correrder La planeación se define como identificar y sensibilizar alternativas para lograr fines, a partir de una necesidad u objetivos, así mismo, comprende la determinación de formas organizadas de actividades que permiten alcanzar los objetivos o fines esperados.
        p Consiste en saber qué se va a hacer por anticipado, cuál va a ser la dirección que se va a tomar para alcanzar los objetivos y metas trazada en la empresa de la manera más eficiente. Este ejercicio sirve para establecer el camino de gestiones a realizar y no perder de vista el trabajo que se debe realizar en el tiempo, de igual forma, para que los trabajadores y personal de la empresa orienten sus talentos y esfuerzos, las actividades conducentes al cumplimiento de la misión y objetivos empresariales.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen1.jpg')
    .row.justify-content-center.my-5.align-items-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/figura3.svg')
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12(data-aos="fade-up-right")
        .titulo-sexto.color-acento-botones.mt-4
          h5.mb-0 Figura 2
          br
          span Función de planeación
        img(src='@/assets/curso/tema1/figura2.svg')
    p.my-5(data-aos="fade-down-right") La función de planeación es un ejercicio de gestión que permite establecer el quehacer y que define el conjunto de decisiones a seguir, que establecen el camino que debe seguir la empresa para el desarrollo de las iniciativas de los emprendedores agropecuarios y alcanzar los objetivos o metas que se fijen, en pro de suplir las necesidades de la sociedad local, regional, nacional o internacional, los cuales se ajustarán a los constantes y probables cambios de las condiciones climáticas, de acceso a recursos, tendencias de consumo y demás aspectos que afectan la actividad de la empresa.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En una empresa agropecuaria se distinguen tres fases que son soporte fundamental para diseñar la planeación y así crear acciones de mejora en cada una de ellas como son: 
        ul.lista-ul
          li
            i.fas.fa-check
            | Definir la producción de los productos agropecuarios.
          li 
            i.fas.fa-check
            | Establecer la distribución, que es definir cómo será el reparto o transferencia de los productos agropecuarios a las zonas de influencia de la empresa, esto facilitará la comercialización.
          li 
            i.fas.fa-check
            | El mercadeo y ventas, es la fase que genera la iniciativa de compra y promueve el consumo de los productos que la empresa ofrece.
    p.my-5.p-3.fondo1(data-aos="fade-down-right") Estas tres fases: producción, distribución y mercadeo y ventas, se desarrollan en forma sucesiva, existiendo una interrelación entre ellas y una estrecha vinculación a tal punto que es difícil establecer dónde termina la producción, y dónde empieza el mercadeo, se pueden desarrollar de manera paralela. 
    .row
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen3.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        p Para el proceso de planeación y ordenamiento productivo agropecuario en Colombia, El Ministerio de Agricultura a través de la Unidad de Planificación Rural Agropecuaria-UPRA, promueve y vincula los aspectos de mercado mediante el análisis de variables e indicadores de actividad relacionados con la oferta y la demanda nacional para consumo interno y externo (importaciones y exportaciones), que sirven de referente a los productores del país para que se focalizan de manera competitiva, a partir de identificar aspectos  comparativos y de evolución de la producción y consumo, del uso del suelo rural, así como de las posibilidades de los acuerdos de comercio que Colombia ha firmado a nivel internacional con varios países. (UPRA, 2017)
    p.mb-4(data-aos="fade-down-left") La planeación dentro de un proceso productivo agropecuario consiste en la definición e implementación de un método de trabajo para obtener los productos deseados por los inversionistas según sus intereses y posibilidades técnicas, en las cantidades adecuadas, en los tiempos apropiados y corrientes para la producción y consumo, estableciendo la estructura de costos apropiada para hacer rentable la producción. La planeación fusiona factores de mercado y la tecnología de que dispone la empresa para transformarlo en una actividad productiva y económicamente eficiente. En general, la planeación constituye el proceso que permite obtener la visión del futuro productivo, por lo cual requiere del establecimiento de los siguientes aspectos:
    .row.mb-3.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-up-left")
        h4.mb-3 La planeación dentro de un proceso productivo agropecuario 
        img(src='@/assets/curso/tema1/imagen4.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        AcordionA.otroacordion1.mb-5(tipo="a" clase-tarjeta="tarjeta fondo2")
          .row.justify-content-center.align-items-center(titulo="Los objetivos")
            .col-md-8.mb-md-0.mb-0.ps-5
              p Refieren a los diferentes niveles de alcance y/o resultado deseado dentro de los propósitos de la empresa, estos se pueden clasificar de dos maneras:
            .col-md-3.col-sm-5.col-5.my-0.p-0
              figure
                img(src='@/assets/curso/tema1/figura4.svg')
            .row
              .col-md-10.ps-5
                ul.lista-ul.ms-3
                  li
                    i.fas.fa-check
                    p.text-bold Objetivos corporativos: <span style="font-weight: 500;">son los que la empresa persigue para el desarrollo de su actividad.</span> 
                  li 
                    i.fas.fa-check
                    p.text-bold Objetivos específicos: <span style="font-weight: 500;">parten de los objetivos corporativos y se fijan desde las iniciativas de las líneas de producto.</span>       
        
          .row.justify-content-center.align-items-center(titulo="Estrategias")
            .col-md-8.mb-4.mb-md-0.ps-5
              p.ms-4 Son el conjunto de decisiones fundamentales e interfuncionales que fijan los cursos de acción general, que indican cómo deberán utilizarse los recursos y metodologías productivas para el logro de los objetivos. 
          
            .col-md-4.col-sm-6.col-6
              figure
                img(src='@/assets/curso/tema1/figura5.svg')

          .row.justify-content-center.align-items-center(titulo="Las políticas y normas")
            .col-md-8.mb-4.mb-md-0.ps-5
              p.ms-4 Con el conjunto de disposiciones que se deben cumplir para el desarrollo de las actividades empresariales que en el caso de las normas, son disposiciones de carácter obligatorio e impartidas por los entes regulatorios del sector como son el Ministerio de agricultura, el Instituto Colombiano Agropecuario ICA, Secretarías de salud, entre otras, quienes definen los lineamientos generales para tomar el ejercicio de la actividad agropecuaria y fijan guías que orientan la acción y constituyen base para las decisiones en la empresa.
          
            .col-md-4.col-sm-6.col-6
              figure
                img(src='@/assets/curso/tema1/figura6.svg')


    .row.mb-3.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-left")
        AcordionA.otroacordion1.mb-5(tipo="a" clase-tarjeta="tarjeta fondo2")
          .row.justify-content-center.align-items-center(titulo="Plan de acción")
            .col-md-8.mb-4.mb-md-0.ps-5
              p.ms-4 Es lo que denomina el procedimiento, establece el conjunto de actividades propiamente dichas a realizar dentro de una secuencia para el logro de los objetivos y que obedecen al enfoque estratégico previsto; esto hace que tengan un orden cronológico y la secuencia de actividades que deben seguirse estrictamente durante la realización del plan.
          
            .col-md-4.col-sm-6.col-6
              figure
                img(src='@/assets/curso/tema1/figura7.svg')

          .row.justify-content-center.align-items-center(titulo="Los presupuestos")
            .col-md-8.mb-4.mb-md-0.ps-5
              p.ms-4 Es la determinación del nivel de recursos necesarios y que se pueden asignar para el desarrollo de las actividades definidas en el plan de acción, expresado en cantidad y valor de dichos recursos, qué son los planes expresados en términos económicos.
          
            .col-md-4.col-sm-6.col-6
              figure
                img(src='@/assets/curso/tema1/figura8.svg')

          .row.justify-content-center.align-items-center(titulo="Cronograma")
            .col-md-8.mb-4.mb-md-0.ps-5
              p.ms-4 Es la correlación de las actividades y recursos en función del tiempo, esto es, la programación de cada una de las actividades del plan en un horizonte de tiempo, lo que implica la utilización de los recursos necesarios al momento de su realización, por lo cual estos deben estar disponibles en cantidad y funcionalidad al momento de iniciar las actividades.
          
            .col-md-4.col-sm-6.col-6
              figure
                img(src='@/assets/curso/tema1/figura9.svg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen5.jpg')
    .row.justify-content-center.fondo3
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.py-5.px-4(data-aos="fade-up-left")
        span.text-bold Situación ejemplo:  
        span En una finca dedicada a la agricultura se pretende iniciar el cultivo de una nueva variedad en la región.
        ul.lista-ul.mt-3
          li
            i.fas.fa-check
            | La iniciativa o propósito del plan define que sea a mediano plazo, dadas las características de la especie o variedad.
          li
            i.fas.fa-check
            | El objetivo corporativo es incrementar las ventas de la empresa un 20% de la planeación.
          li
            i.fas.fa-check
            | Dentro de la estrategia para el logro de este propósito dentro de la planificación de producción, se puede desarrollar una plantación por lotes y producción agregada anual, semestral, trimestral.
          li
            i.fas.fa-check
            | El Plan de acción requiere para el desarrollo de las actividades una serie de recursos a utilizar como es presupuesto, la cantidad de mano de obra requerida, los insumos necesarios y la maquinaria a utilizar para realizar las labores en el horizonte del plan.
          li
            i.fas.fa-check
            | En el cronograma se detallan las fechas o hitos en que se deben realizar cada una de las labores, especificando los recursos estimados, tal es el caso de inicio de preparación del terreno, que requiere de operarios, un tractor; la siembra, requiere un número de operarios, cantidad de semillas y la implementación de un sistema de riego, etc. 
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.py-5.px-4(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen6.jpg')

    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Tipos de Planes
    p.mb-5(data-aos="fade-down-right") Las posibilidades de planeación en el sector agropecuario se enmarcan desde la naturaleza de los medios productivos, los cuales obedecen a los ciclos vitales de las especies vegetales o pecuarias, por tanto, se pueden tipificar tipos de planes en conformidad a dichos ciclos, esto denota un sentido estrictamente en función del tiempo como variable fundamental. Se enumeran a continuación en más detalle:
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-5(data-aos="fade-up-left")
        LineaTiempoD
          p(numero="1" titulo="Planes a largo plazo") Son aquellos donde se considera como tiempo estimado superior a dos años, el propósito es delimitar las líneas de productos, los niveles de calidad y precio y metas de ventas, participación en nichos o segmentos de mercado que la empresa establezca para sus operaciones. 
          
          p(numero="2" titulo="Planes a mediano plazo") Son aquellas iniciativas estratégicas con un periodo comprendido entre uno a dos años en promedio, como por ejemplo nuevas plantaciones de algunos frutales, las cuales requieren el desarrollo de las plantas hasta sus primeras producciones.
          
          p(numero="3" titulo="Planes a corto plazo") Son aquellas iniciativas que fijan un horizonte inferior a un año, donde regularmente su desarrollo se mide en semanas, este tipo de planes exige un trabajo muy puntual y disciplinado a desarrollar. 
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen7.jpg')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.2 Organización
    p.mb-5(data-aos="fade-down-left") La organización como función del proceso administrativo busca la adecuación de los recursos empresariales entendida como la agrupación de las actividades y los recursos necesarios por cada área funcional, para llevar a cabo las actividades en cumplimiento de los planes establecidos y mantener las relaciones entre los empleados. Es decir, se trata de establecer desde la estructura empresarial y sus áreas funcionales un agrupamiento por cargos para ejecutar las actividades en lo que se denomina, división del trabajo, asignando para ello los recursos necesarios para su realización.
    .titulo-sexto.color-acento-botones.mt-4(data-aos="fade-down-right")
      h5.mb-0 Figura 3
      br
      span Estructura organizacional por áreas o departamentos
    img(data-aos="fade-up-right")(src='@/assets/curso/tema1/figura10.svg')
    .row.justify-content-center.my-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-up-left")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen8.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El concepto de organización se ha usado para el proceso de agrupar y asignar recursos a un área funcional formada de varios cargos, los cuales se interrelacionan mutuamente, pero cada uno tiene unas actividades específicas; que constituyen el personal de una empresa. Por otra parte, en el sector agropecuario la organización interna de una empresa se hace principalmente teniendo en cuenta las actividades funcionales o de importancia en su proceso productivo, las actividades técnicas se agrupan en dos, las que se dedican a la parte agrícola y las que se orientan a las actividades pecuarias, conformando un conjunto denominado “Departamento de producción agropecuaria”.
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Estructura organizacional
    figure(data-aos="fade-down-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/a_SqMxP-Cxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    .row.justify-content-center.my-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-left")
        p.p-5.fondo4 La estructura organizacional empresarial es un mecanismo de ordenación que define cómo será el ordenamiento de la empresa desde sus actividades, las relaciones entre los trabajadores y demás componentes de la empresa. Sirve para esquematizar gráficamente y adecuar las actividades a desarrollar por parte de la empresa y sus equipos de trabajo, adecuar a las personas necesarias en función de dichas actividades, lo que conlleva una mejor comprensión de la empresa y del quehacer ordinario. Así mismo, sirve para definir el esquema de comunicaciones y de división del trabajo dando como resultado las áreas funcionales de una empresa; esta estructuración deriva en una jerarquización según el nivel de roles de la empresa, es decir quienes toman decisiones, quienes coordinan las operaciones y quienes ejecutan o verifican las acciones propiamente dichas.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        .titulo-sexto.color-acento-botones
          h5.mb-0 Figura 4
          br
          span Estructura jerárquica y su distribución departamental en las empresas
        img(src="@/assets/curso/tema1/figura11.svg")
    p(data-aos="fade-down-right") Dentro de la estructura organizacional podemos definir cómo será el ordenamiento funcional, es decir por el conjunto de actividades afines, que conforman los departamentos o áreas de la empresa.
    p.mb-5(data-aos="fade-down-left") Toda empresa tiene tres funciones básicas:
    TabsA.color-acento-botones.mb-5(data-aos="fade-down-right")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.fondo5.p-4(titulo="Producción")
        .row
          .col-xl-7
            h4 Producción
            p Es el conjunto de actividades relacionadas con las actividades principales de la empresa, a lo que se dedica. Si la empresa desarrolla actividad productiva para la obtención de productos agropecuarios su área o departamento de producción será el conjunto de actividades propiamente relacionadas con ese propósito; pero si la empresa desarrolla servicios, como asistencia agrícola, control fitosanitario, etc., que son intangibles como actividad principal, entonces se denomina departamento de servicio en lugar de producción.
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/tema1/produccion.jpg')

      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.fondo5.p-4(titulo="Ventas y Comercialización")
        h4 Ventas y Comercialización
        .row
          .col-xl-7
            p Son el conjunto de actividades concernientes a la búsqueda de clientes, el desarrollo de oferta y venta efectiva de productos o los servicios que la empresa presta.
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/tema1/ventas.jpg')
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.fondo5.p-4(titulo="Administración")
        h4 Administración
        .row
          .col-xl-7
            p Es el conjunto de actividades complementarias a las técnicas de producción y de comercialización, que permiten el sostenimiento e integración de la empresa, vela por el manejo de los recursos y su disposición, sirve de soporte logístico a las otras dos funciones básicas empresariales.
          .col-xl-5.mb-4
            figure
              img(src='@/assets/curso/tema1/admon.jpg')
    .titulo-sexto.color-acento-botones(data-aos="fade-down-right")
      h5.mb-0 Figura 5
      br
      span Ejemplo de Organigrama de Áreas Funcionales para una empresa agropecuaria
    img(data-aos="fade-down-left")(src='@/assets/curso/tema1/figura12.svg')
    p.my-5(data-aos="fade-down-right") Se recomienda que toda empresa agropecuaria defina todas las dependencias de la empresa, para una mejor comprensión de la organización y sus dependencias. Esto sirve de base en los procesos de comunicación y de mejora continua.
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Recursos administrativos
    p(data-aos="fade-down-right") Los recursos administrativos son el conjunto de recursos con los que opera la empresa para el desarrollo de sus actividades, y que debe asignar a las áreas o departamentos, para que sean utilizados, adecuados, asignados, según corresponda.
    p.text-bold(data-aos="fade-down-left") Clases de recursos:
    p.mb-5(data-aos="fade-down-right") Los recursos administrativos se pueden clasificar en cuatro grandes grupos, recursos de talento humano, recursos físicos o tangibles, recursos financieros o monetarios y los recursos intangibles:
    .row.justify-content-center
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12
        .titulo-sexto.color-acento-botones(data-aos="fade-down-right")
          h5.mb-0 Figura 6 
          br
          span Clases de recursos
        ImagenInfografica.color-secundario.mb-5(data-aos="fade-down-left")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figura13.svg')

          .tarjeta.fondo6.p-3(x="5.5%" y="52%" numero="+")
            .h5.mb-2 Recursos Humanos
            p Son las personas vinculadas con la empresa:
            ul.lista-ul
              li.mb-0
                i.fas.fa-check
                | Operarios. 
              li.mb-0
                i.fas.fa-check
                | Obreros.
              li.mb-0
                i.fas.fa-check
                | Supervisores. 
              li.mb-0
                i.fas.fa-check
                | Jefes.
              li.mb-0
                i.fas.fa-check
                | Directores. 
              li.mb-0
                i.fas.fa-check
                | Gerentes.
              li.mb-0
                i.fas.fa-check
                | Presidente, socios.

          .tarjeta.fondo6.p-3(x="31%" y="8%" numero="+")
            .h5.mb-2 Recursos Financieros
            p Son los recursos eminentemente monetarios que necesita la empresa para el desarrollo de las actividades, los cuales pueden ser:
            ul.lista-ul
              li
                i.fas.fa-check
                p.text-bold.mb-0 Propios:
              p.ms-3  Caja, bancos, Inversiones temporales que tenga la empresa (acciones, CDTs, bonos, etc), cuentas por cobrar, 
              li
                i.fas.fa-check
                p.text-bold.mb-0 Ajenos:
              p.ms-3 Créditos (bancarios o extra-bancarios), cuentas por pagar, inversiones temporales (acciones comunes o preferenciales, bonos).            

          .tarjeta.fondo6.p-3(x="69%" y="8%" numero="+")
            .h5.mb-2 Recursos Físicos 
            p Son los recursos tangibles que posee la empresa para el desarrollo de sus actividades, los cuales se clasifican como:
            ul.lista-ul
              li
                i.fas.fa-check
                p.text-bold.mb-0 Bienes muebles: <span style="font-weight: 500;">Equipo de cómputo y comunicaciones, equipo de oficina (calculadoras, perforadoras, cosedoras, etc.), muebles y enseres, flota de transportes (vehículos, camiones, tractores, etc.), etc.</span>
              li
                i.fas.fa-check
                p.text-bold.mb-0 Bienes inmuebles: <span style="font-weight: 500;">Lotes, edificios, oficinas, casas, minas, etc.</span>     

          .tarjeta.fondo6.p-3(x="95%" y="54%" numero="+")
            .h5.mb-2 Recursos Intangibles
            p Son los recursos Intangibles que posee la Empresa y que atesoran los valores de la actividad a la que se dedica la empresa, entre los que se encuentran:
            ul.lista-ul
              li
                i.fas.fa-check
                | El software
              li
                i.fas.fa-check
                | El sistema de Ventas
              li
                i.fas.fa-check
                | El Sistema de producción
              li
                i.fas.fa-check
                | Las patentes
              li
                i.fas.fa-check
                | Los secretos del saber hacer- formulas, etc. 
    .row.justify-content-center.mb-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        p La estimación de los diferentes recursos para operar una empresa parte de las funciones y actividades a realizar, donde, las cuales se agrupan en cargos y estos a su vez son ocupados y desarrollados por personas a quienes se les asigna un salario en conformidad a sus capacidades y talentos. A su vez, los trabajadores necesitarán recursos físicos, técnicos y tecnológicos para el desarrollo de sus labores, por tanto, se deben asignar según corresponda. Algunos recursos no son asignarles a un cargo o puesto en sí, sino son activos de uso general los cuales se suman al final a los asignados a las labores funcionales de los trabajadores.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/imagen9.jpg")
    .tarjeta.color-acento-contenido.p-3.mb-5.sombra(data-aos="fade-down-left")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-4.col-md-3.col-lg-1.ms-3
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/figura14.svg")
        .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-sm-12
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              p.text-bold.mb-1 Presupuesto de recursos administración por área o proceso
              p En la siguiente tabla se describe la técnica para la asignación y estimación de recursos para el desarrollo de las actividades por cada tipo de agrupación o cargo. Para mayores detalles consulte el anexo: presupuesto de recursos administrativos por área o proceso, donde podrá disponer de dicho instrumento modelo.
            .col-sm-auto
              a.boton.fondo7(:href="obtenerLink('downloads/asignacion_y_estimacion_de_recursos.pdf')" target="_blank")
                span.text-dark Descargar
                i.fas.fa-file-download.text-dark
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.3 Dirección
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        img(src="@/assets/curso/tema1/imagen10.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        p La dirección como función del proceso administrativo consiste en dinamizar la empresa y poner en operación y ejecución la planeación, es decir el conjunto de iniciativas estratégicas para lograr los objetivos previstos. Una vez que se completa el proceso de planeación y de organización, hay que cumplir con la disposición de los recursos para el desarrollo de las actividades, esto presupone que hay que contratar talento humano si hace falta, comprar recursos, arrendar o reorganizar tierras, lotes, bodegas, como ajustar las asignaciones de actividades de manera formal de darse a lugar. La ejecución requiere de funciones como la comunicación para la coordinación, el liderazgo para hacer que las personas desarrollen sus labores con motivación y diligencia.
    figure(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/eRlbKj0qQV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.4 Control
    p(data-aos="fade-down-right") La función de control del proceso administrativo consiste en establecer resultados esperados en la planeación y compararlos contra los resultados obtenidos al ejecutar; en la medida que existan desviaciones se realizan los ajustes necesarios para el logro de los resultados esperados.
    p.mb-4(data-aos="fade-down-left") Debido a cambios en los costos o en otros factores, los resultados obtenidos después de que el plan se ejecutó pueden desviarse de los resultados esperados; esto se debe a la incertidumbre y el riesgo que existe en la producción agrícola; no obstante, es necesario identificar el tipo y magnitud de las desviaciones tan pronto como sea posible, pues tiene impactos directos contra las utilidades.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        p Esta fase del proceso de planeación se desarrolla de manera simultánea a su ejecución, va ligeramente después de las acciones y sus efectos, de tal manera que no sea reactiva, sino que de darse desviaciones se puedan corregir y ajustar oportunamente. En esta fase se mide el desempeño y se contrasta con los indicadores de gestión establecidos previamente, a partir de allí, se procede a una interpretación y evaluación con el fin de identificar si se cumple con lo esperado, de ser así se sigue el proceso de medición en conformidad a lo programado, porque no significa que en un futuro los resultados presenten dificultades. De existir desviaciones, es decir, que no se cumple con el indicador y su meta, entonces hay que realizar acciones de ajuste al plan de acción o donde se identifique, el porqué de la desviación, bien sea problemas de costos, o porque se midió mal, entonces el indicador no arroja la información para sacar una conclusión.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/imagen11.jpg")
    p.my-4(data-aos="fade-down-left") Las empresas hoy cuentan con muchos recursos técnicos tecnológicos que facultan sus seguimientos a los planes, y permiten recoger información de los indicadores de gestión con el fin de detallar el comportamiento y trazabilidad de las acciones.
    .titulo-sexto.color-acento-botones(data-aos="fade")
      h5.mb-0 Figura 7 
      br
      span Control y seguimiento al plan de acción
    img(data-aos="fade")(src="@/assets/curso/tema1/figura15.svg")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
