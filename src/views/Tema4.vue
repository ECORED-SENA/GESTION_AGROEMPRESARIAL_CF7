<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 4
      h1 Herramientas gerenciales
    .row.justify-content-center.ampliar.fondo9
      .col-xxl-12.px-5
        .row
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-left")
            p En las empresas el ejercicio administrativo y gerencial es fundamental para la fijación y el desarrollo de las actividades y alcanzar los objetivos deseados que se establecen en la planeación; esto requiere que en su ejecución se obtenga información del estado de avance de las operaciones, de las condiciones para el desarrollo del plan, es síntesis, en la fijación de estados actuales lo que se denomina diagnóstico, por lo cual existen una serie de herramientas para la gestión empresarial que permitan optimizar su desarrollo y orientar la toma de decisiones y la dirección efectiva de la empresa.
            p.p-4.fondo1.correrder Las herramientas de gestión facilitan el análisis de la organización y aumentan el control, ampliando el conocimiento de los procesos y actividades que se desarrollan, que en un ejercicio compartido con los diferentes actores de áreas funcionales alinean la organización en la resolución de problemas y la definición de soluciones, fijación de objetivos, entre otros. En estas herramientas se puede hacer revisiones de variables cualitativas o cuantitativas para toma de decisiones frente a alternativas empresariales.
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
            img(src='@/assets/curso/tema4/imagen1.jpg')
        p.my-5(data-aos="fade-down-right") Por lo anterior, se puede decir que las herramientas de análisis empresarial, son todos los métodos que se consideren para hacer más eficaz la administración de una empresa al facilitar la toma de decisiones. Entre las más utilizadas están las siguientes:
        figure(data-aos="fade-down-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/84fuGpQeYg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center.my-4
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
            img(src='@/assets/curso/tema4/imagen2.jpg')
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
            p Esta técnica  al paso de los años se ha convertido en una herramienta de análisis estratégico que permite Identificar los factores y sus aspectos de variables endógenos y exógenos que inciden en la operación de la empresa y que la pueden estar afectando de manera favorable o desfavorable, y que permite a su vez focalizar cuáles son los más relevantes, evidenciando las conclusiones en que se debe concentrar la empresa para ampliar, mejorar o conservar su capacidad competitiva; a su vez, permite que la empresa plantee una planeación de objetivos, y por ende fije las medidas estratégicas y de plan de acción para el desarrollo de su competitividad a futuro.
            p La matriz DOFA al igual que en otras actividades empresariales es igualmente aplicable para el diagnóstico y la verificación de la gestión del recurso humano.
    .row.justify-content-center.mb-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        p De manera general, el departamento de recursos humanos sirve de apoyo logístico para la empresa, encargándose de la administración económica y contractual de los trabajadores, mientras que los aspectos administrativos funcionales son responsabilidad del área a la cual pertenezcan cada uno de los trabajadores, pues es allí donde presta sus servicios, le asignan las actividades, tiene su desempeño. Este ejercicio debe procurar contar con condiciones adecuadas para obtener la máxima productividad del personal.
        p Por lo anterior, el departamento de recursos humanos debe realizar un diagnóstico respecto de las variables propias o relacionadas con las gestiones que realiza en la gestión del talento humano que están bajo su responsabilidad, realizando preguntas que permitan identificar las fortalezas, oportunidades, debilidades y amenazas que por naturaleza tienen las áreas de recursos humanos. Este diagnóstico se puede realizar a partir de jornadas grupales o por encuesta de donde cada empleado participa y emite su percepción.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema4/imagen3.jpg')
    .tarjeta.color-acento-contenido.p-3.my-5.sombra(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-4.col-md-3.col-lg-2.col-xl-1.col-xxl-1.ms-3.pt-4.pt-lg-0
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/figura1.svg")
        .col-lg-9.col-xl-10.col-xxl-10.col-md-11.col-sm-12.py-3.py-lg-4
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              p.text-bold.mb-3 Diagnóstico del talento humano
              p En el siguiente anexo podrás ver el ejemplo de un formato de Diagnóstico de talento humano por encuesta.
            .col-sm-auto
              a.boton.fondo7(:href="obtenerLink('downloads/Ejemplo_Encuesta_diagnostico_talento_humano.pdf')" target="_blank")
                span.text-dark Descargar
                i.fas.fa-file-download.text-dark
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 4
    p.ms-4(data-aos="fade-down-right") Ejemplo de preguntas para adelantar una matriz DOFA
    .tabla-a.color-acento-botones.my-5(data-aos="fade-down-left")
      table.bordestabla
        thead.text-center
          tr
            <td colspan="2">
              h4.mb-0 Indagaciones para Formular Análisis Interno
            </td>
        tbody
          tr.fondo10
            td.bordestabla.text-center Fortalezas
            td.bordestabla.text-center Debilidades
          tr
            td.bordestabla 
              ul.lista-ul
                li
                  i.fas.fa-check
                  | ¿Cuáles son los objetivos prioritarios que atiende, por los cuales se distingue el departamento como eficiente?
                li
                  i.fas.fa-check
                  | ¿Cuáles son las ventajas de la administración de recursos humanos? 
                li
                  i.fas.fa-check
                  | ¿Qué hacemos bien?
                li
                  i.fas.fa-check
                  | ¿Contamos con software para liquidación de nómina?
                li
                  i.fas.fa-check
                  | Cumplimiento en pagos
                li
                  i.fas.fa-check
                  | Etc.
            td.bordestabla 
              ul.lista-ul
                li
                  i.fas.fa-check
                  | ¿Qué se está haciendo mal, De que se quejan los funcionarios de la empresa?
                li
                  i.fas.fa-check
                  | ¿Qué podría ser evitado?
                li
                  i.fas.fa-check
                  | ¿Qué podría ser mejorado?  
                li
                  i.fas.fa-check
                  | ¿Por qué hay tanto ausentismo?
                li
                  i.fas.fa-check
                  | No hay reclutamiento y selección de personal.
                li
                  i.fas.fa-check
                  | Falta de evaluación y desarrollo del personal.
                li
                  i.fas.fa-check
                  | Poca claridad en las funciones de los empleados.
                li
                  i.fas.fa-check
                  | Desconocimiento de las leyes laborales.
                li
                  i.fas.fa-check
                  | Reclutamiento y selección de personal deficiente.
          tr.fondo11
            <td colspan="2">
            h4.text-center.mb-0 Indagaciones para Formular Análisis Externo
            </td>
          tr.fondo10
            td.bordestabla.text-center Oportunidades
            td.bordestabla.text-center Amenazas
          tr
            td.bordestabla 
              ul.lista-ul
                li
                  i.fas.fa-check
                  | ¿Cuáles son las tendencias interesantes en manejo de recursos humanos?
                li
                  i.fas.fa-check
                  | ¿Se están dando las buenas oportunidades para la contratación? 
                li
                  i.fas.fa-check
                  | ¿Hay oportunidades de capacitación al sector agro, para mitigar riesgos en el sector? 
                li
                  i.fas.fa-check
                  | Cambios en políticas locales, nacionales y regionales relacionadas con mi sector.
                li
                  i.fas.fa-check
                  | Etc.
            td.bordestabla
              ul.lista-ul
                li
                  i.fas.fa-check
                  | ¿A qué obstáculos se enfrenta la empresa si  no controla? 
                li
                  i.fas.fa-check
                  | ¿El cambio normativo afecta los costos de la empresa?
                li
                  i.fas.fa-check
                  | ¿Qué está haciendo mi competencia que los clientes y empleados están buscándola?
                li
                  i.fas.fa-check
                  | ¿Las especificaciones sobre el trabajo a realizar y los productos y servicios a conseguir cambian continuamente?
                li
                  i.fas.fa-check
                  | Etc.
    p.my-5(data-aos="fade-down-right") A partir de las oportunidades y amenazas, fortalezas y debilidades identificadas, el equipo de recursos humanos y la dirección de la empresa deberán, establecer las iniciativas estratégicas y de plan de acción, relacionando las oportunidades vs fortalezas, las oportunidades vs debilidades, las fortalezas vs amenazas y las fortalezas y las debilidades y amenazas, de tal manera que se conciban las iniciativas de mejora y plan de acción.
    .row.justify-content-center.mb-5
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
          h5 Tabla 5
        span.ms-4 Estructura de la Matriz DOFA para formulación de iniciativas estratégicas y de plan de acción
        img.mt-4(src='@/assets/curso/tema4/tabla1.svg')
    p(data-aos="fade-down-right") Entre las principales iniciativas estratégicas y de mejora que se deben implementar por parte del departamento de recursos humanos esta:
    p.text-bold.text-center(data-aos="fade-down-left") Iniciativas estratégicas y de mejora del departamento de recursos humanos
    .tarjeta.tarjeta--gris.p-4.mb-5.fondo12(data-aos="fade-down-right")
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Clima Laboral")
          .col-md-6.mb-4.mb-md-0
            p.text-bold Clima Laboral: 
            p.mb-3 Consiste en lograr establecer un adecuado ambiente para el desempeño y armonía que nace desde el área de Recursos Humanos y se propaga por toda la empresa, para ello deberá adelantar tácticas como:
            ul.lista-ul
              li.mb-0
                i.fas.fa-check
                | Escuchar las inquietudes de los trabajadores, sobre aspectos de cómo se llevan los procesos, la conciliación de las soluciones a los conflictos que se le puede dar, etc.
              li.mb-0
                i.fas.fa-check
                | Fomentar el respeto entre los colaboradores, 
              li.mb-0
                i.fas.fa-check
                | Promover la importancia del trabajo en equipo.
              li.mb-0
                i.fas.fa-check
                | Mejorar las relaciones interpersonales mediante un proceso de capacitación y talleres de reflexión con el personal del Área.        
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/imagen4.png')


        .row.justify-content-center(titulo="Motivación")
          .col-md-6.mb-4.mb-md-0
            span.text-bold Motivación: 
            span busca generar satisfacción en el área de trabajo con tácticas como:
            ul.lista-ul.mt-3
              li.mb-0
                i.fas.fa-check
                | Premiación de los logros en el trabajo.
              li.mb-0
                i.fas.fa-check
                | Charlas motivacionales, donde los trabajadores se sientan importantes y despierten sentido de pertenencia con la empresa.
              li.mb-0
                i.fas.fa-check
                | Cursos de cualificación y complemento a la formación para todos los colaboradores (cursos de sistemas, inglés, cursos técnicos con base a sus funciones del cargo).
              li.mb-0
                i.fas.fa-check
                | Aumentos de salario a trabajadores destacados permanentemente en sus labores.
              li.mb-0
                i.fas.fa-check
                | Estructurar un sistema de Promoción de cargos y nuevas funciones que representen ascensos.

          .col-md-4
            figure
              img(src='@/assets/curso/tema4/imagen5.png')

        .row.justify-content-center(titulo="Mejorar el Flujo de Trabajo")
          .col-md-6.mb-4.mb-md-0
            p.text-bold.mb-3 Mejorar el Flujo de Trabajo:
            ul.lista-ul
              li.mb-0
                i.fas.fa-check
                | Mejorar la asignación de las actividades de acuerdo al puesto de trabajo
              li.mb-0
                i.fas.fa-check
                | Mejorar los esquemas de Supervisión constante del trabajo de los colaboradores
              li.mb-0
                i.fas.fa-check
                | Respeto de los tiempos establecidos para cada actividad.
              li.mb-0
                i.fas.fa-check
                | Respeto de los horarios de descanso.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/imagen6.png')

        .row.justify-content-center(titulo="Estabilidad laboral")
          .col-md-6.mb-4.mb-md-0
            p.text-bold.mb-3 Estabilidad laboral
            ul.lista-ul
              li.mb-0
                i.fas.fa-check
                | Busca evitar salida de trabajadores de la empresa hacia las empresas competidoras
              li.mb-0
                i.fas.fa-check
                | Disminución de la rotación.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/imagen7.png')

        .row.justify-content-center(titulo="Comunicación")
          .col-md-6.mb-4.mb-md-0
            p.text-bold.mb-3 Comunicación
            ul.lista-ul
              li.mb-0
                i.fas.fa-check
                | Mejorar la comunicación entre colaboradores
              li.mb-0
                i.fas.fa-check
                | Desarrollo de charlas para el mejoramiento de la interacción de los trabajadores
              li.mb-0
                i.fas.fa-check
                | Mejorar el ejercicio  de escuchar las inquietudes y sugerencias de los colaboradores.
              li.mb-0
                i.fas.fa-check
                | Implementar charlas para el mejoramiento de comunicación
              li.mb-0
                i.fas.fa-check
                | Programación del cronograma de tareas para la fluida comunicación entre las áreas y evitar la saturación de trabajo.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/imagen9.png')
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Diagrama de Causa - Efecto
    p.my-5(data-aos="fade-down-right") Es una herramienta para identificar de manera estructurada las causas de un problema o efecto evidenciado a partir de un esquema gráfico que se asemeja a una espina de pescado que es como también se denomina a esta herramienta.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p La técnica de utilización refiere a identificar las causas principales de un problema o efecto negativo en la empresa, posteriormente identificar las subcausas o variables de causas relacionadas con las principales que estén contribuyendo con el problema, y que son de carácter secundario e inclusive pueden ser de carácter terciario como en el caso de proveedores, que infieren en la disponibilidad de materiales de materias primas, insumos o suministros, y dentro de este problema, que estos proveedores están concentrados, o que los materiales de los proveedores solo se consiguen en ciertas cantidades no disponibles para la empresa. Es muy versátil para analizar y resolver problemas complicados, pues permite un análisis desde los factores operativos más relevantes de la empresa.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema4/imagen10.jpg")
    .row.justify-content-center.mt-4
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4(data-aos="fade-down-left")
        .titulo-sexto.color-acento-botones.mb-0
          h5 Figura 8
        span.ms-4 Esquema de Diagrama causa efecto 
        img.mt-4(src="@/assets/curso/tema4/figura1.svg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Diagrama de Pareto
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p Esta herramienta es una forma particular de un diagrama de barras verticales utilizado para identificar los pocos vitales y los muchos triviales que puede tener una empresa, donde los primeros son en gran medida los responsables de la mayor parte de los efectos negativos de los problemas en la empresa, donde caso siempre se asocian a una relación 70-30 o 80-20, esto es, que del total de los múltiples problemas que puede tener una empresa entre el 70% al 80% se concentran en pocas causas, y el resto de problemas que son múltiples representan entre el 20% al 30% de los casos, por lo cual la empresa debe concentrar su atención en resolver esos pocos problemas que son vitales para el negocio pues tienen mucho efecto, y que solucionando estos probablemente se resuelven muchos de los aspectos menores.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema4/imagen11.jpg")
    .row.justify-content-center.my-5
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
          h5 Tabla 6
        p.ms-4 Ejemplo de las quejas y reclamos de clientes por artículos recibidos en un mes
        .tabla-a.color-acento-botones.my-4(data-aos="fade-down-right")
          table.bordestabla
            thead.text-center
              tr
                th.bordeencabezado Causas
                th.bordeencabezado Quejas
                th.bordeencabezado %
                th.bordeencabezado % acumulado
            tbody
              tr
                td.bordestabla Incumplimiento
                td.bordestabla.text-center 50
                td.bordestabla.text-center 33,05 %
                td.bordestabla.text-center 32,05 %
              tr
                td.bordestabla Sucio
                td.bordestabla.text-center 45
                td.bordestabla.text-center 28,85 %
                td.bordestabla.text-center 60,90 %
              tr
                td.bordestabla Defectuoso
                td.bordestabla.text-center 21 
                td.bordestabla.text-center 13,46 %
                td.bordestabla.text-center 74,36 %
              tr
                td.bordestabla No corresponde
                td.bordestabla.text-center 15
                td.bordestabla.text-center 9,62 %
                td.bordestabla.text-center 83, 97 %
              tr
                td.bordestabla Vencido
                td.bordestabla.text-center 10 
                td.bordestabla.text-center 6,41 %
                td.bordestabla.text-center 90,38 %
              tr
                td.bordestabla Incompleto
                td.bordestabla.text-center 8
                td.bordestabla.text-center 5,13 % 
                td.bordestabla.text-center 95,51 %
              tr
                td.bordestabla Mal facturado
                td.bordestabla.text-center 7
                td.bordestabla.text-center 4,49 %
                td.bordestabla.text-center 100,00 % 
              tr
                td.bordestabla Total general
                td.bordestabla.text-center 156
                td.bordestabla.text-center 100,00 %
                td.bordestabla.text-center 
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-right")
          h5 Figura 9
        p.ms-4(data-aos="fade-down-right") Ejemplo de Diagrama de Pareto para análisis del comportamiento de las quejas y reclamos en una empresa
        img(data-aos="fade-down-left").my-4(src="@/assets/curso/tema4/figura2.svg")
    p(data-aos="fade-down-right") En este ejemplo anterior, se puede observar que del total de los 156 casos de quejas y reclamos, el 74,4% de los casos corresponden a tres causas, mientras que las otras cuatro causas de quejas solo contemplan el restante 25,6%; por lo cual la empresa debe tomar decisiones relacionadas con estas causas que concentran la mayoría de las quejas de los clientes por los productos adquiridos, siendo que en la búsqueda de solucionar estos inconvenientes, y conscientes de la importancia para la empresa, los demás aspectos seguramente también se corregirán.
    p.mb-5(data-aos="fade-down-left") Esta herramienta tiene muchas aplicabilidades, para el análisis en la empresa, y por ende facilitar la toma de decisiones, es un ejercicio de aplicabilidad de la administración promoverla al interior de sus diferentes áreas funcionales.
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Diagrama de frecuencias o estratificación
    p(data-aos="fade-down-right") Es una técnica de distribución de las frecuencias de una variable, que busca estratificar el comportamiento de la misma, no denota un sentido de orden específico. En el siguiente ejemplo se puede observar su enfoque de uso.
    p.mb-5(data-aos="fade-down-left") Ejemplo: En una empresa agrícola el gerente desea saber cómo es el consumo y venta de verduras, para ello recurre al análisis estadístico del promedio de ventas de estos recursos, lo que le servirá como parámetro para tomar decisiones.
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 7
      br
      p(data-aos="fade-down-right") Ejemplo de concentración del estado de cartera por ventas (millones)

    .tabla-a.my-5.align-items-left(data-aos="fade-down-left")
      table
        thead
          tr
            th.bordestabla.fondoblanco.bordesup 
            th.fondo11.bordestabla.bordesup Corriente
            th.fondo11.bordestabla.bordesup 30 días
            th.fondo11.bordestabla.bordesup 60 días
            th.fondo11.bordestabla.bordesup 90 días
            th.fondo11.bordestabla.bordesup Total de Cartera

        tbody
          tr.text-center
            td.bordestabla 
              p.text-bold Cartera
            td.bordestabla 50
            td.bordestabla 35
            td.bordestabla 15
            td.bordestabla 12
            td.bordestabla 112

          tr.text-center
            td.bordestabla 
              p.text-bold Frecuencia
            td.bordestabla 44,6 %
            td.bordestabla 31,3 %
            td.bordestabla 13,4 %
            td.bordestabla 10,7 %
            td.bordestabla 100,0 %

    p.my-5(data-aos="fade-down-right") A partir de esta información suministrada por el gerente de las centrales de mercado, y quien resumió los promedios del número de Toneladas por producto que se venden diariamente en el mercado en una semana cualquiera, construyó el siguiente gráfico estadístico de estratificación de frecuencias de los productos.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4(data-aos="fade-down-left")
        .titulo-sexto.color-acento-botones.mb-0
          h5 Figura 10
        p.ms-4 Diagrama de estratificación del estado de cartera por ventas a clientes
        p.text-bold.text-center Concentración del estado de cartera por ventas en millones de pesos
        img(src="@/assets/curso/tema4/figura3.svg") 
    p.text-bold.text-center(data-aos="fade-down-right") Tipo de Cartera
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Histograma
    p(data-aos="fade-down-right") Es la distribución del comportamiento de una variable continua que denota la distribución de las frecuencias a lo largo de la variable continua.
    p.mb-5(data-aos="fade-down-left") En el caso de las ventas en un semestre, el gerente desea saber cómo es su estacionalidad o comportamiento típico, para lo cual el gerente presenta la siguiente información:
    .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
      h5 Tabla 8
      br
      span Ejemplo del nivel de ventas por mes en primer semestre

    .tabla-a.my-5.align-items-left(data-aos="fade-down-left")
      table
        thead
          tr
            th.bordestabla.fondoblanco
            th.fondo11.bordestabla Enero
            th.fondo11.bordestabla Febrero
            th.fondo11.bordestabla Marzo
            th.fondo11.bordestabla Abril
            th.fondo11.bordestabla Mayo
            th.fondo11.bordestabla Junio
            th.fondo11.bordestabla Total de Cartera

        tbody
          tr.text-center
            td.bordestabla 
              p.text-bold Ventas / mes
            td.bordestabla 50
            td.bordestabla 20
            td.bordestabla 70
            td.bordestabla 50
            td.bordestabla 40
            td.bordestabla 65
            td.bordestabla 300

          tr.text-center
            td.bordestabla 
              p.text-bold %
            td.bordestabla 18,3 %
            td.bordestabla 6,7 %
            td.bordestabla 23,3 %
            td.bordestabla 16,7 %
            td.bordestabla 13,3 %
            td.bordestabla 21,7 %
            td.bordestabla 100,0 %

    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4(data-aos="fade-down-left")            
        .titulo-sexto.color-acento-botones.mb-0
          h5 Figura 11
        p.ms-4 Ejemplo de Histograma del comportamiento de ventas semestrales en una empresa
        p.text-bold.text-center.my-5 Comportamiento de las ventas semestrales mes a mes
        img(src="@/assets/curso/tema4/figura4.svg")
    .row.justify-content-center.mt-3
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p En este caso, la variable continua es el tiempo y sus meses del primer semestre, entonces el gerente del restaurante puede identificar como es el comportamiento de ventas mensual en el semestre, lo que describe la estacionalidad de ingresos en el semestre en la empresa por ventas. Lo cual le servirá para tomar decisiones sobre la disposición de caja y programación de pagos, así mismo, para establecer niveles de metas funcionales, es decir, en periodos de baja estacionalidad la empresa puede desarrollar actividades de capacitación entrenamientos, ya que su desarrollo y requiere periodos de concentración en estas actividades sin afectar la producción, así mismo, la implementación de nuevos procesos, tal como se ve para el mes de febrero.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema4/imagen12.jpg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Diagrama de Pastel
    p(data-aos="fade-down-right") Es otro esquema de representación gráfica estadística que busca descomponer una variable en sus diferentes categorías, mostrando la cantidad de frecuencia o casos, evidenciando cuánto del total corresponde cada categoría dentro de la variable.
    p(data-aos="fade-down") #[b Ejemplo]: Para el caso del restaurante se desea saber cómo es el comportamiento o flujo de comensales en el horario de almuerzo, para lo cual el gerente del restaurante recibe de su administrador la siguiente información 
    .row.justify-content-between.my-5
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-down-left")
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-down-left")
          h5 Tabla 9
          br
          span Distribución de empleados de la empresa por región de operación

        table.bordestabla.my-5
          thead.text-center
            tr.bordesup.fondo11
              th.bordeencabezado.anchocol Región
              th.bordeencabezado Número de empleados por sucursal
          tbody
            tr
              td.bordestabla.anchocol Boyacá
              td.bordestabla.text-center 8

            tr
              td.bordestabla.anchocol Tolima
              td.bordestabla.text-center 11

            tr
              td.bordestabla.anchocol Cundinamarca
              td.bordestabla.text-center 16 

            tr
              td.bordestabla.anchocol Antioquia
              td.bordestabla.text-center 15

            tr
              td.bordestabla.text-bold.anchocol Total: Empleados
              td.bordestabla.text-center.text-bold 50 

 
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-botones.mb-0
          h5 Figura 12
        span.ms-4 Distribución de empleados de la empresa por región de operación
        img.mt-4(src="@/assets/curso/tema4/figura5.svg")

    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-7
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Indicadores de gestión 
    figure.my-5(data-aos="fade-down-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8hHQ0i5spgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        p Los indicadores de gestión son los instrumentos a través de los cuales la empresa mide sus desempeños en las diferentes funciones, actividades que desarrolla y que contrasta con los resultados esperados y fijados desde una planeación.
        p Cuando se habla de indicadores de gestión, viene a la mente sinónimo de medición y control, que efectivamente es la función para la cual se establecen, es decir son los instrumentos que facilitan identificar y evaluar los niveles de cumplimiento o desviación de los logros o actividades a realizar frente a los resultados esperados.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")    
        img(src="@/assets/curso/tema4/figura6.svg")
    p.mt-5(data-aos="fade-down-right") Se deben utilizar indicadores de gestión en todos los niveles empresariales para evaluar el desempeño y lo establecido como metas en la planeación de la gestión empresarial. 
    p.mb-5(data-aos="fade-down-left") Ejemplo de algunos indicadores de gestión aplicados a cada una de las áreas funcionales de la empresa:
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-7.col-sm-9.col-6
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Indicadores de gestión humana
    .row.justify-content-center.mb-4
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Indicador de horas extra en el período") Mide el nivel de trabajo adicional en un periodo con sobrecosto, a la jornada ordinaria.
            img.px-0.px-lg-4.mt-3(src="@/assets/curso/tema4/ecuacion1.svg")
          p(numero="2" titulo="Nivel de Ausentismo") Mide la proporción de horas no laboradas por los trabajadores, independientemente de su causal, refleja la ausencia de los trabajadores en general a la empresa. 
            img.px-0.px-lg-4.mt-3(src="@/assets/curso/tema4/ecuacion2.svg")
          p(numero="3" titulo="Nivel de personal") Mide la intensidad o proporción de trabajadores por área o departamento frente al total de empleados contratados en la empresa.
            img.mt-3(src="@/assets/curso/tema4/ecuacion3.svg")
          p(numero="4" titulo="Índice de capacitación") Mide la intensidad o proporción de horas de capacitación, por las horas contratadas.
            img.mt-3(src="@/assets/curso/tema4/ecuacion4.svg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema4/imagen13.jpg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-7.col-sm-9.col-6
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Indicadores Financieros:
    .row.justify-content-center.mb-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Razón Corriente") Mide la capacidad de liquidez que tiene la empresa para pagar las obligaciones financieras o pasivos de corto plazo con recursos de activos corrientes o de corto plazo.
            img.px-0.my-3(src="@/assets/curso/tema4/ecuacion5.svg")
            <span>Si es mayor a 1 significa que sus activos corrientes cubren sus obligaciones de corto plazo</span>
          p(numero="2" titulo="Razón de endeudamiento") Mide el nivel de endeudamiento que tiene la empresa, es decir la cantidad de recursos de la empresa que ha financiado con recursos monetarios ajenos.
            img.mt-3(src="@/assets/curso/tema4/ecuacion6.svg")
          p(numero="3" titulo="Nivel de cobertura de intereses") Mide en qué porcentaje la empresa genera utilidades operativas superiores para poder pagar los intereses de sus obligaciones
            img.mt-3(src="@/assets/curso/tema4/ecuacion7.svg")
          p(numero="4" titulo="Nivel de Rentabilidad Neta") Mide la proporción de la utilidad respecto de las ventas netas de la empresa en un periodo
            img.mt-3(src="@/assets/curso/tema4/ecuacion8.svg")        
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right") 
        img(src="@/assets/curso/tema4/imagen14.jpg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-7.col-sm-9.col-6
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Indicadores productivos
    TabsA.color-acento-botones.mb-5(data-aos="fade-down-right")
      .tarjeta.fondo5.p-4(titulo="Calidad del producto")
        h4 Calidad del producto
        p Indica la proporción de productos defectuosos sobre el total de producto obtenido medido en unidades, en peso, o como se dé la producción, pero se expresa en porcentaje, a menor valor mayor calidad del producto
        img.px-0.px-lg-5.mt-3.sizeimg(src="@/assets/curso/tema4/ecuacion9.svg")    
      
      .tarjeta.fondo5.p-4(titulo="Utilización de la capacidad instalada")
        h4 Utilización de la capacidad instalada
        p Mide el nivel de recursos utilizados para la producción
        img.px-0.px-lg-5.mt-3.sizeimg(src="@/assets/curso/tema4/ecuacion10.png") 
      .tarjeta.fondo5.p-4(titulo="Nivel de desperdicio")
        h4 Nivel de desperdicio
        p Permite medir el nivel de eficiencia en el uso de los recursos
        img.px-0.px-lg-5.mt-3.sizeimg(src="@/assets/curso/tema4/ecuacion11.svg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-7.col-sm-9.col-6
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 Indicadores de ventas y comercialización:
    .row.justify-content-center.mb-5
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4(data-aos="fade-down-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Clientes nuevos") Mide el desempeño de cada vendedor o del grupo de vendedores, en la consecución de clientes nuevos que compren efectivamente.
            img.mt-3.sizeimg.px-0.px-lg-4(src="@/assets/curso/tema4/ecuacion12.svg")
          p(numero="2" titulo="Participación en el mercado") Mide qué tanto de las ventas de la industria o sector donde opera la empresa, la empresa contribuye.
            img.mt-3(src="@/assets/curso/tema4/ecuacion13.svg")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-down-left")
        img(src="@/assets/curso/tema4/imagen15.jpg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-7.col-sm-9.col-6
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo2 <i>Balanced Scorecard (BSC)</i>
    p.my-5(data-aos="fade-down-right") El BSC es una herramienta de gestión que convierte la visión o el objetivo a más largo plazo que tiene la empresa, en acciones explícitas, que mediante un conjunto de indicadores de gestión divididos en cuatro categorías o perspectivas en que se debe regir la empresa o negocio, estas perspectivas son las siguientes:
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-1(data-aos="fade-down-left")
        .tarjeta.fondo13.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2.col-xxl-2.px-xl-4
              img.sizeimg(src="@/assets/curso/tema4/icono1.svg")
            .col-9.col-sm-9.col-lg-10.col-xxl-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-1 Financieros:
                  p Esta perspectiva de la empresa busca evidenciar el nivel de respuesta a las expectativas de los inversionistas o socios de la empresa, busca verificar y hacer seguimiento al  valor para ellos mediante indicadores beneficio o utilidad, crecimiento de ingresos por ventas, crecimiento que reflejan el comportamiento operativo.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-1(data-aos="fade-down-left")
        .tarjeta.fondo13.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2.col-lg-2.col-xxl-2.px-xl-4
              img.sizeimg(src="@/assets/curso/tema4/icono2.svg")
            .col-9.col-sm-9.col-lg-10.col-xxl-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-1 Enfoque hacia el cliente:
                  p En esta perspectiva se busca analizar si los clientes y consumidores están satisfechos con los productos que obtienen de la empresa; su importancia radica en que permite pensar en que se requiere para garantizar la retención de los clientes y la adquisición de nuevos clientes su fidelización de tal manera que se pueda obtener la rentabilidad esperada.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-1(data-aos="fade-down-left")
        .tarjeta.fondo13.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2.col-lg-2.col-xxl-2.px-xl-4
              img.sizeimg(src="@/assets/curso/tema4/icono3.svg")
            .col-9.col-sm-9.col-lg-10.col-xxl-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-1 Procesos internos:
                  p Mide la calidad del producto o servicio final; dimensiona el tiempo de respuesta del equipo operacional frente a las problemáticas y nuevos desafíos impuestos; verifica el coste de los procesos de producción y operacionales; analiza la capacidad de introducir los productos y servicios en el mercado.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-1(data-aos="fade-down-left")
        .tarjeta.fondo13.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2.col-xxl-2.px-xl-4
              img.sizeimg(src="@/assets/curso/tema4/icono4.svg")
            .col-9.col-sm-9.col-lg-10.col-xxl-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-1 Aprendizaje y crecimiento:
                  p Busca medir la satisfacción y compromiso del personal de la empresa, el clima organizacional y los aspectos de disponibilidad de tecnologías de sistemas de información. El cumplimiento de los planes de capacitación y diseño de los mismos, en conformidad a lo diagnosticado.
    p.mb-5(data-aos="fade-down-right") En la siguiente figura se puede identificar la interacción que estas cuatro perspectivas tienen alrededor de la visión y misión empresarial, donde para su logro y desarrollo deben fijar y alcanzar objetivos por cada perspectiva, detallando los instrumentos de indicadores y metas de resultado.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4(data-aos="fade-down-left")
        .titulo-sexto.color-acento-botones.mb-0
          h5 Figura 13
        span.ms-4 Modelo de Balanced Scorecard para la gestión empresarial
        p.text-bold.text-center.my-5 PERSPECTIVAS EXTERNAS
        img(src="@/assets/curso/tema4/figura7.svg")
        p.text-bold.text-center.my-5 PERSPECTIVAS INTERNAS
</template>
<script>
export default {
  name: 'Tema4',
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
