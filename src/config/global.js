export default {
  global: {
    componenteFormativo: 'Gestión de talento humano',
    descripcionCurso:
      'En este componente formativo se resalta la importancia del Recurso de Talento Humano dentro de las empresas, evidenciando su importancia en todas las funciones y actividades de la misma, desarrollando la comunicación, la creación de un ambiente laboral positivo y permitiendo el desarrollo de los trabajadores en un ambiente de armonía empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Planeación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Organización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Dirección',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Control',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagnóstico y necesidades de talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estilos de dirección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas gerenciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Manual de funciones y responsabilidades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Gestión del talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Funciones sustantivas de la gestión de talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Reclutamiento del personal ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Selección del personal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Bienestar laboral',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Indicadores de gestión',
      referencia:
        'Daniella Terreros, Indicadores de gestión empresarial: características y tipos.',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/marketing/indicadores-de-gestion',
    },
    {
      tema: 'Gestión de talento humano',
      referencia: 'Carlos Andrés Lobo, Gestión del Talento Humano',
      tipo: 'Libro',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1484/Gesti%C3%B3n%20del%20Talento%20Humano.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Administración de una Finca',
      referencia:
        'Ángel Fabián Cabrera Morocho, Manual de Procedimientos para la Administración de una Finca Agropecuaria (2017).Ecuador',
      tipo: 'Tesis',
      link:
        'https://dspace.unl.edu.ec/jspui/bitstream/123456789/18503/1/Tesis%20Lista%20Angel%20Cabrera.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agremiación',
      significado:
        'Asociación sin ánimo de lucro y con personería jurídica que reúne personas del mismo oficio o profesión dedicadas a la producción de bienes agrícolas o forestales (MinAgricultura, 2018).',
    },
    {
      termino: 'Empleador',
      significado:
        'Que da empleo a otros, puede ser una persona natural o la empresa agropecuaria',
    },
    {
      termino: 'Insumo',
      significado:
        'Bien de cualquier clase empleado en la producción de otros bienes.',
    },
    {
      termino: 'Recursos',
      significado:
        'Lista ordenada de bienes y demás cosas valorables que pertenecen a una persona, empresa o institución, para el desarrollo de sus actividades',
    },
    {
      termino: 'Pago salarial',
      significado:
        'Es la compensación económica, regularmente en dinero, que se otorga a un trabajador por un servicio prestado a la empresa.',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de actividades relacionadas con la compra y venta de mercancías y servicios.',
    },
    {
      termino: 'Personal',
      significado:
        'Que se realiza con la participación de una persona físicamente presente y no utilizando medios indirectos, como el teléfono o la mediación de otras personas.',
    },
    {
      termino: 'Operario',
      significado:
        'Persona que tiene un oficio de tipo manual o que requiere esfuerzo físico, en especial si maneja una máquina en una fábrica o taller.',
    },
    {
      termino: 'Organigrama',
      significado:
        'Es la representación gráfica de la estructura de una empresa o cualquier otra organización, que incluye las estructuras departamentales y, en algunos casos, las personas que las dirigen, hacen un esquema sobre las relaciones jerárquicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Francisco Restrepo Escobar, Francisco Javier Arias Vargas, Las prácticas de gestión del talento humano en empresas agropecuarias del sector bananero en Colombia. (2015). <i>Journal of Agriculture.</i>',
    },
    {
      referencia:
        'Finca y campo. (2020). La dirección en las empresas agropecuarias. ',
      link:
        'http://www.fincaycampo.com/2014/07/la-direccion-en-las-empresas-agropecuarias/',
    },
    {
      referencia:
        'Chiavenato, I. (2002). Gestión de Talento Humano (5ª ed.). Editorial Mc. Graw Hill GestioPolis.com Experto. (2003). ¿Qué es proceso administrativo? Origen, fases y etapa.',
      link: 'https://www.gestiopolis.com/que-es-proceso-administrativo/',
    },
    {
      referencia:
        'Infoagro. (s.f.). Indicadores sociales de las unidades productivas para el desarrollo rural en Argentina.',
      link:
        'https://www.infoagro.com/desarrollo/indicadores_sociales_desarrollo_rural_argentina.htm',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2016). Manual de Funciones y Competencias Laborales.     ',
      link:
        'https://www.ica.gov.co/getdoc/bb0f47d2-ccab-45a4-beb2-b0a0eb69bc5f/manual-de-funciones-y-competencias-laborales-ica-2.aspx',
    },
    {
      referencia:
        'Ledezma, Y. (2017). Técnicas y herramientas de predicción del talento humano.',
      link:
        'http://yariaudyledezmagth.blogspot.com/2017/11/actividad-12-tecnicas-y-herramientas-de.html',
    },
    {
      referencia:
        'Adriana Meza B. (2020), El Diagnóstico Organizacional: elementos, métodos y técnicas. ',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'Alejandro Beltran Duque, Olga Lucia Anzola Morales. (2013). Mejorando la competitividad de la PYME. Ediciones Universidad Externado de Colombia.',
    },
    {
      referencia:
        'ATA-Autonomos- Federación Nacional de Asociaciones de Trabajadores Autónomos (2021). Diagnóstico Empresarial en tiempos de Covid-19. ',
      link:
        'https://ata.es/wp-content/uploads/2021/05/ATA-guia-diagnostico-empresarial-en-tiempos-de-covid-murcia-V2.pdf',
    },
    {
      referencia:
        'Enred Consultoría, S.L. (2011). Metodología para la elaboración de diagnóstico y plan para la igualdad en empresas y entidades privadas. Ed. EMAKUNDE - Instituto Vasco de la Mujer. C/ Manuel Iradier.',
      link:
        'https://www.emakunde.euskadi.eus/u72-igualorg/es/contenidos/informacion/ig_org_enlaces/es_material/adjuntos/metodologia-definitiva-web.pdf',
    },
    {
      referencia:
        'Garza, T. J. (2009). Administración Contemporánea. Reto para la empresa. Ed. Alhambra Mexicana.',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad.',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html',
    },
    {
      referencia:
        'JDELCA, A. E. (2020, 2 de mayo). [ASESORÍA EMPRESARIAL Y COACHING EJECUTIVO - JDELCA]. ¿CÓMO INICIAR EL PROCESO DEL DIAGNÓSTICO EMPRESARIAL EN MI ORGANIZACIÓN? [vídeo]. Youtube',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. En L. Jayh. México D.F.: Centro Regional de Ayuda Técnica.',
    },
    {
      referencia:
        'Portugal, V. (s.f.). Diagnóstico Empresarial. Fundación Universitaria del Areandina.',
    },
    {
      referencia:
        'Rodriguez, D. (2012). Diagnóstico organizacional (4ta Edición ed.). México, D.F.: Alfaomega Grupo Editor, S.A.',
    },
    {
      referencia:
        'Tlaxcala, I. t. (s.f.). Herramientas Estadisticas - Instituto tecnológico Apizaco de Tlaxcala. Obtenido de Herramientas Estadisticas',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
    {
      referencia:
        'UPRA, Unidad de Planeamiento Rural Agropecuario. Ministerio de agricultura. (2017). Mercado de Productos Agropecuarios.',
    },
    {
      referencia:
        'Blandez Ricalde, M. G. (2014). Proceso Administrativo. Estado de México, México: Editorial Digital UNID.',
    },
    {
      referencia:
        'Garcia Echeverria, S. (1994). Introducción a la Economía de la Empresa. Madrid, España.: Ediciones Díaz de Santos, S.A. Obtenido de',
      link:
        'https://books.google.com.ni/books?id=Lo10xtQ3D0kC&printsec=frontcover&dq=introdu%20ccion+a+la+economia+de+la+empresa+santiago+garcia+echevarria+pdf&hl=es&sa=X&%20ved=0ahUKEwjU_-qRh5XkAhWSjFkKHb1xAN0Q6AEIJzAA#v=onepage&q&f=false',
    },
    {
      referencia:
        'Las Limas. (2019). Planeación de la empresa. Empresa “Las Limas S.A.”, Estelí, Nicaragua.',
    },
    {
      referencia:
        'Las Limas S.A. (21 de Febrero de 2013). Datos Generales de la Empresa “Las Limas S.A.”. Datos Generales de la Empresa “Las Limas S, A.”. Estelí, Nicaragua.',
    },
    {
      referencia:
        'Limas, L. (2019). Evaluación al desempeño laboral. Estelí, Nicaragua.',
    },
    {
      referencia:
        'Palermo, I. (08 de Octubre de 2019). Entrevista a Gerente del área de Recursos Humanos. (S. Herrera, Entrevistador).',
    },
    {
      referencia:
        'Rodríguez, J. (2014). Administración de pequeñas y medianas empresas. España: Ediciones Thomson.',
    },
    {
      referencia:
        'Siliézar, M. A. (2011). Técnicas de Reclutamiento y Selección de Personal. España: MS.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: 'Regional Bogotá - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES Norte de Santander',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
