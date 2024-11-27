export default {
  global: {
    componenteFormativo:
      'Instalaciones, equipos y herramientas para el desposte',
    descripcionCurso:
      'El componente formativo describe las instalaciones, equipos y herramientas necesarios para el desposte, cubriendo el manejo de canales bovinas, su clasificación según el sistema ICTA en Colombia, y los factores que influyen en la refrigeración y la higiene. Además, detalla procedimientos de desinfección, requisitos sanitarios, y aspectos técnicos de infraestructura para garantizar la calidad e inocuidad en el procesamiento cárnico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La canal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Medias canales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes de la canal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Parámetros que se usan para evaluar la calidad de una canal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Factores para mantener una buena refrigeración',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Factores para mantener una buena refrigeración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instalaciones y centros de despiece',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63510034_CF02_DU.pdf',
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
      tema: 'La canal.',
      referencia:
        'Asturianavalles. (2011).Características de la Canal y de la Carne (ASEAVA). [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=PVPhN4LYVaw&ab_channel=asturianavalles',
    },
    {
      tema: 'Medias canales.',
      referencia:
        'TVMÁS. (2017). Veracruz Agropecuario - El Canal Bovino, rendimiento y cortes. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GFbKOROEtas&ab_channel=TVM%C3%81S',
    },
    {
      tema: 'Parámetros que se usan para evaluar la calidad de una canal.',
      referencia:
        'agriNews Play. (2019). AGRICONSEJO - IMPORTANCIA de la calidad de la CANAL ‼️',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=TBewCC1juTo&ab_channel=agriNewsPlay',
    },
    {
      tema: 'Factores para mantener una buena refrigeración.',
      referencia:
        'TvAgro. (2017). Sistemas de Producción de Carne- TvAgro por Juan Gonzalo Angel. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Avii-ABc-Ps&ab_channel=TvAgro',
    },
    {
      tema: 'Instalaciones y centros de despiece.',
      referencia:
        'Ecosistema de Recursos Educativos. (2019). Limpieza de botas. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=cEaqXw_U9Xs&ab_channel=EcosistemadeRecursosEducativos',
    },
    {
      tema: 'Instalaciones y centros de despiece.',
      referencia:
        'Ecosistema de Recursos Educativos. (2019). Higiene de manos.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Vyb5zddLbFI&ab_channel=EcosistemadeRecursosEducativos',
    },
  ],
  glosario: [
    {
      termino: 'Desposte',
      significado:
        'proceso de cortar y desmembrar las canales bovinas para su distribución y venta.',
    },
    {
      termino: 'Canal',
      significado:
        'cuerpo del animal sacrificado, desangrado y eviscerado, sin cabeza ni extremidades.',
    },
    {
      termino: 'ICTA',
      significado:
        'sistema colombiano de clasificación de canales y cortes de carne bovina.',
    },
    {
      termino: 'Refrigeración',
      significado:
        'método utilizado para conservar la carne a temperaturas bajas, evitando su deterioro.',
    },
    {
      termino: 'Grasa intramuscular',
      significado:
        'grasa presente entre las fibras musculares, también conocida como marmóreo.',
    },
    {
      termino: 'Conformación',
      significado:
        'evaluación del desarrollo muscular en proporción al componente óseo de la canal.',
    },
    {
      termino: 'Pediluvio',
      significado:
        'dispositivo utilizado para desinfectar las botas de los operarios en las plantas de desposte.',
    },
    {
      termino: 'Osificación',
      significado:
        'proceso de formación y desarrollo del hueso, utilizado para determinar la edad del animal.',
    },
    {
      termino: 'Lavabotas',
      significado:
        'equipo que limpia y desinfecta mecánicamente las botas del personal en las plantas de desposte.',
    },
    {
      termino: 'Sistema de higiene',
      significado:
        'equipos integrados para el lavado y desinfección de manos y botas en las instalaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aragonés, J. F. (2011). <em>Almacenaje y expedición de carne y productos cárnicos</em>. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Clínica Universidad de Navarra. (2018). Definición de fascia.',
      link: 'https://www.cun.es/diccionario-medico/terminos/fascia',
    },
    {
      referencia:
        'De máquinas y herramientas. (2014). ¿Cómo funciona la Hidrolavadora?',
      link:
        'http://www.demaquinasyherramientas.com/maquinas/hidrolavadoras-tipos-y-usos',
    },
    {
      referencia:
        'Durán, A. M., Cubillos, M. C., y Melo, L. F. (2016). <em>Caracterización del eslabón comercial de la cadena cárnica bovina en el municipio de Villavicencio, Meta</em> (Trabajo de grado). Universidad de La Salle, Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Frigobandeira (2018). La clasificación de canales de vacuno mayor.',
      link:
        'https://www.frigobandeira.com/la-clasificacion-de-canales-de-vacuno-mayor/',
    },
    {
      referencia:
        'García, A. (2018). La carne no es tan mala como la pintan. <em>El Mundo</em>.',
      link:
        'https://www.elmundo.es/vida-sana/bienestar/2018/03/18/5aabc304e5fdea8f538b463c.html',
    },
    {
      referencia:
        'Gómez, I., Palacios, A., y Maldonado, M. A. (1995). <em>Sistema ICTA de clasificación de canales y cortes de carne bovina</em>. Ministerio de Agricultura y Desarrollo Rural. Universidad Nacional de Colombia. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Keane, & Montoya. (s.f.). Cómo se produce la conversión de músculo a carne.',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/como-se-produce-la-conversion-de-musculo-carne',
    },
    {
      referencia:
        'Ley 811 de 2013. Por medio de la cual se modifica la Ley 101 de 1993, se crean las organizaciones de cadenas en el sector agropecuario, pesquero, forestal, acuícola, las Sociedades Agrarias de Transformación, SAT, y se dictan otras disposiciones. Diario Oficial N.º 45.236, 2 de julio de 2013.',
      link: '',
    },
    {
      referencia:
        'Orihuel, E. (2017, mayo 9). La energía mecánica en la limpieza de superficies con agua a presión: Un modelo simplificado [Entrada de blog]. <em>Betelgeux</em>.',
      link:
        'http://www.betelgeux.es/blog/2017/05/09/la-energia-mecanica-en-la-limpieza-de-superficies-con-agua-a-presion-un-modelo-simplificado/',
    },
    {
      referencia:
        'Red Mercosur de Noticias. (2013, enero 31). Uruguay: INAC no sancionará frigoríficos que están incumpliendo la normativa [Entrada de blog]. <em>Panorama Rural Ahora</em>.',
      link:
        'http://panoramaruralahora.blogspot.com/2013/01/uruguay-inac-no-sancionara-frigorificos.html',
    },
    {
      referencia:
        'Resolución 240 de 2013. Ministerio de Salud y Protección Social. Por la cual se establecen los requisitos sanitarios para el funcionamiento de las plantas de beneficio animal de las especies bovina, bufalina y porcina, plantas de desposte y almacenamiento, comercialización, expendio, transporte, importación o exportación de carne y productos cárnicos comestibles. Febrero 9 de 2013.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Iván Cifuentes García',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
