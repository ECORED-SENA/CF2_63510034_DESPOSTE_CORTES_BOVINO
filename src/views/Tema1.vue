<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La canal
    
    p.mb-4(data-aos="fade-up") Es el cuerpo del animal sacrificado, desangrado, #[b desollado, eviscerado, sin cabeza ni extremidades]. La canal es el producto primario, un paso intermedio en la producción de carne, que representa el producto final.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-5.pe-lg-0
        .fondo-color-sistema-j.p-4.h-100.align-content-center
          .fig-dec-1.tam-1.mb-4
            .fig-dec-content
              figure
                img.mx-auto(src="@/assets/curso/temas/5.svg")
          p.mb-0 La canal varía en calidad, dependiendo fundamentalmente de las proporciones relativas de hueso, músculo y grasa. Idealmente, se busca la máxima cantidad de carne, con la menor cantidad de hueso y una proporción óptima de grasa.
      .col-lg-5.ps-lg-0.order-first.order-lg-last.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/6.png")
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.1 Medias canales
    
    p.mb-4(data-aos="fade-up") Después de completar los pasos previos, la canal se divide en dos partes iguales mediante un corte longitudinal a lo largo de la línea media de la columna vertebral, obteniendo así dos medias canales de un bovino para facilitar su manipulación.

    .row.justify-content-center.align-items-center(data-aos="fade-up")
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 440px;")
      .col-lg-6
        p.mb-4 Para almacenar la canal, se limpia la carne eliminando estructuras que pueden ser fuente de contaminación, tales como:
        .row
          .col-lg-11
            .fondo-color-primario.borde-10.p-4.p-md-5
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Tendones.
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Fascias (telas colgantes).
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Médula.
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Ganglios.
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Sangre.
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Aserrín (generado al cortar los huesos con sierra).
              .bg-white.borde-5.py-1.px-2.mb-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Adherencias de pedazos de cuero.
              .bg-white.borde-5.py-1.px-2
                p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Residuos gástricos.
    
    .titulo-decorativo.my-5.mt-3.mb-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Cuartos de canal
    
    p.mb-4(data-aos="fade-up") Cada media canal se corta en dos cuartos mediante un corte a la altura de la duodécima vértebra, obteniendo así un cuarto delantero y un cuarto trasero.

    TabsC.color-acento-contenido.tabsc-p-1(data-aos="fade-up")
      .row.justify-content-center.align-items-center.py-5(titulo="Cuarto delantero")
        .col-lg-5
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 451px;")
        .col-lg-5
          h4.mb-4 Cuarto delantero
          p.mb-0 Incluye las siguientes piezas: sobrebarriga delgada y gruesa, pecho, espaldilla, costilla, falda, punta de falda, corbata, lomo redondo, tapa de la nuca, barcino, morrillo, bola negra, muchacho, lagarto y lomo de brazo. 
      .row.justify-content-center.align-items-center.py-5(titulo="Cuarto trasero")
        .col-lg-5
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 451px;")
        .col-lg-5
          h4.mb-4 Cuarto trasero
          p.mb-0 Está compuesto por solomillo, lomo cuadrado, entrepierna, relojera, cola, muchacho, punta de anca, chocozuela, bola negra, ampolleta o caderita, tortuga y lagarto.
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.2 Componentes de la canal
    
    p.mb-4(data-aos="fade-up") La canal bovina está formada por tres componentes básicos: muscular, óseo y adiposo.

    .fondo-personalizado-1.f2(data-aos="fade-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-5.mb-4.mb-lg-0
                h4.mb-4 Componente muscular
                p.mb-4 Es el más relevante desde el punto de vista productivo, pues constituye la base del sistema cárnico y de corte. Se subdivide en:
                ul.lista-ul.ps-4.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Pierna
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Lomo
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Brazo
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Cuello
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Costilla
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 459px;")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-5.mb-4.mb-lg-0
                h4.mb-4 Componente óseo
                p.mb-4 El componente óseo está compuesto por más de 150 huesos, aunque se excluyen los de la parte distal de las extremidades, que se retiran durante el sacrificio. Entre los huesos presentes destacan:
                ul.lista-ul.ps-4.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Columna vertebral
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Esternón
                  li.d-flex.mb-1
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Huesos de la pelvis
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span Costillas
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 459px;")
            .row.justify-content-center.pt-2
              .col-lg-6.ps-lg-0.mb-4.mb-lg-0
                h4.mb-4 Componente adiposo
                p.mb-4 La grasa en la canal se encuentra de tres maneras: superficial, de depósito e intramuscular. Aquí tienes el texto en formato de tabla sin resumir:
                ul.lista-ul.ps-3.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span #[b Grasa superficial o de manto:] recubre la superficie, mejora la presentación y protege la canal, evitando la deshidratación durante el almacenamiento.
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span #[b Grasa de depósito o de reserva:] se acumula en la región interna de la canal.
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                    span #[b Grasa intramuscular o marmóreo:] distribuida entre los cortes, dentro de las fibras musculares, también conocida como jaspeado.
                
              .col-lg-5.pe-lg-0
                figure
                  img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/13.png",style="max-width: 542px;")
                  img.mx-auto.d-lg-none(src="@/assets/curso/temas/14.png",style="max-width: 350px;")
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.3 Parámetros que se usan para evaluar la calidad de una canal
    
    p.mb-4(data-aos="fade-up") Los parámetros empleados para evaluar la calidad de una canal se agrupan en dos grandes categorías. En primer lugar, están los #[b parámetros cualitativos], que son más fáciles de apreciar por los consumidores, y en segundo lugar, los #[b parámetros cuantitativos], que permiten evaluar la canal en términos de valor económico.

    .row(data-aos="fade-up")
      .col-lg-4.mb-4.mb-lg-0.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 400px;")
      .col-lg-4.mb-4.mb-lg-0
        .fondo-color-sistema-m.p-3.borde-2.h-100.align-content-center
          p.fw-bold.mb-3 Parámetros cualitativos (Características que interesan al consumidor)
          .row.align-items-center
            .col-lg-5.pe-lg-0
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 230px;")
            .col-lg-7
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Edad
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Conformación
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Acabado
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Terneza
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Jugosidad
      .col-lg-4
        .fondo-color-sistema-n.p-3.borde-2.h-100.align-content-center
          p.fw-bold.mb-3 Parámetros cualitativos (Características que interesan al consumidor)
          .row.align-items-center
            .col-lg-5.pe-lg-0
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 230px;")
            .col-lg-7
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Peso
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Espesor de la grasa dorsal
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Perímetro de la pierna
                li.d-flex.mb-1
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Longitud de la canal
                li.d-flex.mb-0
                  i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                  span Cantidad de carne
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Sistema de clasificación de canales para Colombia
    
    .row.mb-4(data-aos="fade-up")
      .col-lg-6
        p.mb-4 El método adoptado por el Ministerio de Agricultura de Colombia desde 1995 es el #[b Sistema ICTA] de clasificación de canales y cortes de carne bovina. Este sistema, desarrollado por el Instituto de Ciencia y Tecnología de Alimentos en colaboración con la Universidad Nacional y el SENA, clasifica las canales en cinco categorías, otorgando #[b cinco estrellas] a las de mayor calidad y una estrella a las de menor calidad.

        .row.justify-content-center
          .col-lg-4.mb-4
            .fondo-color-sistema-o.p-2.borde-5.h-100.align-content-center
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 62px;")
                .col
                  p.mb-0 Edad.
          .col-lg-4.mb-4
            .fondo-color-sistema-o.p-2.borde-5.h-100.align-content-center
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 62px;")
                .col
                  p.mb-0 Sexo.
          .col-lg-4.mb-4
            .fondo-color-sistema-o.p-2.pe-lg-0.borde-5.h-100.align-content-center
              .row.align-items-center
                .col-auto.col-lg-4.pe-lg-0
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 62px;")
                .col-8
                  p.mb-0 Conformación de la canal.
          .col-lg-4.mb-4
            .fondo-color-sistema-o.p-2.pe-lg-0.borde-5.h-100.align-content-center
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 62px;")
                .col
                  p.mb-0 Grado de acabado.
          .col-lg-6.mb-4
            .fondo-color-sistema-o.p-2.pe-lg-0.borde-5.h-100.align-content-center
              .row.align-items-center
                .col-auto.col-lg-4.pe-lg-0
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 62px;")
                .col
                  p.mb-0 Peso de la canal fría (P.C.F.)
         
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/18.png")
    
    .row.mb-4(data-aos="fade-up")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 295px;")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Sistema ICTA de clasificación de canales bovinas
        .tabla-b
          table
            thead
              tr
                th Categoría
                th Edad
                th Sexo
                th Conformación
                th Acabado
                th P.C.F.
            tbody
              tr
                td 5 estrellas
                td ≤ 2.5
                td M
                td EB
                td 0, 1
                td ≥ 230
              tr
                td 4 estrellas
                td ≤ 3
                td M
                td EB
                td 0, 1
                td ≥ 210
              tr
                td 3 estrellas
                td > 3 - 4 <
                td MH
                td EB
                td 0, 1, 2
                td > 200
              tr
                td 2 estrellas
                td > 4 - 5 <
                td MH
                td EBR
                td 0, 1, 2, 3
                td > 180
              tr
                td 1 estrellas
                td > 5
                td Cualquiera
                td EBRI
                td 0, 1, 2, 3
                td Cualquiera
    
    p.mb-4(data-aos="fade-up") Las características que deben cumplir las canales de acuerdo al Sistema ICTA.
    
    .fondo-personalizado-1.size-full.med.pos-bottom.f3
      .fondo-personalizado-1__contenido.pb-4
        .fondo-personalizado-1.f2.mb-4(data-aos="fade-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.borde-20.p-4.pb-5
              PasosB.pasos-personalizado-1
                .row.align-items-center.justify-content-center(titulo="Cinco estrellas")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Cinco estrellas
                    ul.lista-ul.mb-0.ps-4
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Sexo]: machos (novillos y toretes).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Edad]: menor o igual a 2.5 años.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Peso]: 230 kg mínimo.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Conformación]: entre excelente y buena (E-B).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Grado de acabado]: moderado (0-1).
                  .col-lg-5
                    .borde-15.overflow-hidden.position-relative.pb-2
                      figure
                        img.mx-auto(src="@/assets/curso/temas/25.png")
                      .position-absolute.w-100(style="bottom: 0;")
                        figcaption.fondo-color-sistema-i.text-center.py-1
                          span.texto-p-2 Nota. Frigobandeira (2018).
                .row.align-items-center.justify-content-center(titulo="Cuatro estrellas")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Cuatro estrellas
                    ul.lista-ul.mb-0.ps-4
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Sexo]: machos (novillos y toretes).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Edad]: menor o igual a 3 años.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Peso]: 210 kg mínimo.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Conformación]: entre excelente y buena (E-B).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Grado de acabado]: moderado (0-1).
                  .col-lg-5
                    .borde-15.overflow-hidden.position-relative.pb-2
                      figure
                        img.mx-auto(src="@/assets/curso/temas/26.png")
                      .position-absolute.w-100(style="bottom: 0;")
                        figcaption.fondo-color-sistema-i.text-center.py-1
                          span.texto-p-2 Nota. Frigobandeira (2018).
                .row.align-items-center.justify-content-center(titulo="Tres estrellas")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Tres estrellas
                    ul.lista-ul.mb-0.ps-4
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Sexo]: cualquiera (novillos, toros y vacas).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Edad]: entre 3 y 4 años.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Peso]: 200 kg mínimo.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Conformación]: entre excelente y buena (E-B).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Grado de acabado]: entre moderado y medio (0-1-2).
                  .col-lg-5
                    .borde-15.overflow-hidden.position-relative.pb-2
                      figure
                        img.mx-auto(src="@/assets/curso/temas/27.png")
                      .position-absolute.w-100(style="bottom: 0;")
                        figcaption.fondo-color-sistema-i.text-center.py-1
                          span.texto-p-2 Nota. Frigobandeira (2018).
                .row.align-items-center.justify-content-center(titulo="Dos estrellas")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Dos estrellas
                    ul.lista-ul.mb-0.ps-4
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Sexo]: cualquiera (novillos, toros y vacas).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Edad]: entre 4 y 5 años.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Peso]: 180 kg mínimo.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Conformación]: entre excelente y regular (E-B-R).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Grado de acabado]: entre moderado y medio (0-1-2-3).
                  .col-lg-5
                    .borde-15.overflow-hidden.position-relative.pb-2
                      figure
                        img.mx-auto(src="@/assets/curso/temas/28.png")
                      .position-absolute.w-100(style="bottom: 0;")
                        figcaption.fondo-color-sistema-i.text-center.py-1
                          span.texto-p-2 Nota. Frigobandeira (2018).
                .row.align-items-center.justify-content-center(titulo="Una estrella")
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Una estrella
                    ul.lista-ul.mb-0.ps-4
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Sexo]: cualquiera (novillos, toros y vacas).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Edad]: 5 años y más.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Peso]: cualquiera.
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Conformación]: entre excelente e inferior (E-B-R-I).
                      li.d-flex.mb-0
                        i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
                        span #[b Grado de acabado]: entre moderado y alto (0-1-2-3).
                  .col-lg-5
                    .borde-15.overflow-hidden.position-relative.pb-2
                      figure
                        img.mx-auto(src="@/assets/curso/temas/28.png")
                      .position-absolute.w-100(style="bottom: 0;")
                        figcaption.fondo-color-sistema-i.text-center.py-1
                          span.texto-p-2 Nota. Frigobandeira (2018).
        
        p.mb-4(data-aos="fade-up") Los parámetros a tener en cuenta en la evaluación de canales son:

        h3.borde-20.fondo-color-sistema-p.d-inline-flex.mb-4.py-2.px-4(data-aos="fade-up") Edad

        .row(data-aos="fade-up")
          .col-lg-4.mb-4.mb-lg-0
            p.mb-0 La edad se puede determinar de dos formas en la canal. Una de ellas es la #[b dentición], que permite identificar la edad del animal a través del estado de sus piezas dentales. Sin embargo, cuando se examina la canal sin la cabeza, y por ende sin las piezas dentales, se utiliza la #[b osificación] como el método alternativo para estimar la edad.
          .col-lg-8
            .row
              .col-lg-5.pe-lg-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 350px;")
              .col-lg-7.ps-lg-0
                .fondo-color-sistema-p.p-4.h-100
                  .fig-dec-1.mb-3
                    .fig-dec-content
                      figure
                        img.mx-auto(src="@/assets/curso/temas/30.svg")
                  p.mb-0 La osificación se refiere al análisis de los cartílagos en diversas zonas del cuerpo, como el esternón, la sínfisis púbica, las vértebras lumbares y el sacro. Particularmente, las #[b estérnebras] del esternón son de las más utilizadas para este propósito. A medida que el animal envejece, también es común notar otros cambios, como el color amarillento de la grasa.
    
    h3.borde-20.fondo-color-sistema-p.d-inline-flex.mb-5.py-2.px-4(data-aos="fade-up") Cantidad de cartílago

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/32.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cantidad de cartílago presente en la canal también es un indicador de la edad del animal. Animales jóvenes presentan más cartílago, mientras que en los animales mayores, este se osifica. 
    
    h3.borde-20.fondo-color-sistema-p.d-inline-flex.mb-4.py-2.px-4(data-aos="fade-up") Medición de la cantidad de cartílago de las estérnebras

    .fondo-personalizado-1.size-full.f4
      .fondo-personalizado-1__contenido
        p.mb-4(data-aos="fade-up") Para medir la cantidad de cartílago de las estérnebras, se utilizan los puntos #[b CAR 1], #[b CAR 2] y #[b CAR 3], según el sistema ICTA:

        .row.justify-content-center.mb-2(data-aos="fade-up")
          .col-lg-4.col-md-6.mb-4
            .sombra-p-1.borde-11.overflow-hidden
              .text-center.p-4.pt-lg-5
                h4.fondo-color-acento-contenido.mb-3.d-inline-flex.py-1.px-5 CAR 1
                p.mb-0.mb-md-4.mb-lg-0 Se mide la porción más angosta del manubrio del esternón.
              .position-relative
                figure
                  img.mx-auto(src="@/assets/curso/temas/33.png")
                .position-absolute.w-100(style="bottom: 0;")
                  figcaption.fondo-color-sistema-j.text-center.py-1
                    span.texto-p-2.fw-normal Nota. Gómez, Palacios & Maldonado (1995, p. 19)
          .col-lg-4.col-md-6.mb-4
            .sombra-p-1.borde-11.overflow-hidden
              .text-center.p-4.pt-lg-5
                h4.fondo-color-acento-contenido.mb-3.d-inline-flex.py-1.px-5 CAR 2
                p.mb-0 Corresponde a la medida más angosta entre la primera y segunda estérnebra.
              .position-relative
                figure
                  img.mx-auto(src="@/assets/curso/temas/34.png")
                .position-absolute.w-100(style="bottom: 0;")
                  figcaption.fondo-color-sistema-j.text-center.py-1
                    span.texto-p-2.fw-normal Nota. Gómez, Palacios & Maldonado (1995, p. 19)
          .col-lg-4.col-md-6.mb-4
            .sombra-p-1.borde-11.overflow-hidden
              .text-center.p-4.pt-lg-5
                h4.fondo-color-acento-contenido.mb-3.d-inline-flex.py-1.px-5 CAR 3
                p.mb-0 Corresponde a la medida más angosta entre la sexta y séptima estérnebra.
              .position-relative
                figure
                  img.mx-auto(src="@/assets/curso/temas/35.png")
                .position-absolute.w-100(style="bottom: 0;")
                  figcaption.fondo-color-sistema-j.text-center.py-1
                    span.texto-p-2.fw-normal Nota. Gómez, Palacios & Maldonado (1995, p. 19)
        
        p.mb-4(data-aos="fade-up") Estas mediciones permiten obtener una evaluación precisa de la osificación y, por tanto, de la edad del animal.

        .row.align-items-center(data-aos="fade-up")
          .col-lg-5
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 505px;")
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2.] Parámetros de osificación según las medidas en centímetros
            .tabla-b.dis-p-1
              table
                thead
                  tr
                    th Edad
                    th CAR 1 (cms)
                    th CAR 2 (cms)
                    th CAR 3 (cms)
                tbody
                  tr
                    td 2 y 3 años
                    td 1.0 - 3.0
                    td 0.5 - 1.0
                    td 0.3 - 0.6
                  tr
                    td 4 y 5 años
                    td 0.5 - 2.0
                    td 0.0 - 0.5
                    td 0.0 - 0.3
        
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Parámetros de osificación según el color de las estructuras óseas
    
    p.mb-4(data-aos="fade-up") A medida que el animal envejece, los patrones de osificación experimentan cambios en la coloración. En animales jóvenes, las estructuras óseas tienden a ser más oscuras, mientras que en animales adultos, estas adquieren una tonalidad amarillenta clara. Este cambio en la coloración es uno de los indicadores clave para determinar la madurez fisiológica del animal.

    .row.align-items-center.justify-content-center(data-aos="fade-up")
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Madurez fisiológica
        figure.mb-2
          img.mx-auto(src="@/assets/curso/temas/38.png")
        figcaption.py-1
          span.texto-p-2 Nota. Gómez, Palacios & Maldonado (1995, p. 19)
    
    h3.borde-20.fondo-color-sistema-p.d-inline-flex.my-5.py-2.px-4(data-aos="fade-up") Conformación de la canal

    p.mb-4(data-aos="fade-up") La conformación de la canal se refiere al desarrollo muscular en relación con la estructura ósea. Para evaluarla, se consideran factores como:

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-5
        .fondo-color-sistema-j.p-4.px-md-5.borde-19.h-100
          .bg-white.py-1.px-3.borde-5.mb-2
            p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Desarrollo de las nalgas.
          .bg-white.py-1.px-3.borde-5.mb-2
            p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] Desarrollo de los lomos.
          .bg-white.py-1.px-3.borde-5.mb-2
            p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] El aspecto macizo de la canal.
          .bg-white.py-1.px-3.borde-5
            p.mb-0 #[i.fas.fa-check-circle.c-color-sistema-k.texto-p-1] La proporcionalidad de la canal.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/40.png")
    
    p.mb-5(data-aos="fade-up") Una mejor conformación indica un mayor potencial de aprovechamiento en términos de producción de carne y un mayor tamaño de los cortes obtenidos. Los métodos para calcular la conformación de la canal son:
    
    .row.justify-content-center(data-aos="fade-up")
      .col-lg-4.col-md-10.mb-4
        .fondo-color-sistema-j.h-100
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/41.png")
          .p-4
            p.mb-4.fw-bold Método subjetivo
            p.mb-0 Se basa en una apreciación visual del volumen y perfil de la cadera, así como la longitud y el ancho de la zona dorsolumbar.
      .col-lg-4.col-md-10.mb-4
        .fondo-color-sistema-j.h-100
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/42.png")
          .p-4
            p.mb-4.fw-bold Método objetivo
            p.mb-0 Consiste en medir el perímetro de la pierna, tomando como referencia el contorno del músculo semitendinoso. Los valores se expresan en las categorías: Excelente, Bueno, Regular e Inferior.
    
    .row.justify-content-center.pt-1(data-aos="fade-up")
      .col-lg-6.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.] Patrones de conformación de la canal bovina
        .tabla-b.dis-p-1.dis-p-2
          table
            thead
              tr
                th Grado de conformación
                th Perímetro en centímetros
            tbody
              tr
                td Excelente (E)
                td Mayor a 80 cm
              tr
                td Bueno (B)
                td Entre 70-79 cm
              tr
                td Regular (R)
                td Entre 60-69 cm
              tr
                td Inferior (I)
                td Entre 55-59 cm
      .col-lg-4
        .fondo-color-sistema-n.p-4.h-100.align-content-center
          figure.mb-3
            img(src="@/assets/curso/temas/43.svg",style="max-width: 196px;")
          p.mb-0 Este análisis permite determinar la calidad de la canal y su potencial para la producción de carne.
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Acabado de la canal
    
    p.mb-4(data-aos="fade-up") El #[b grado de acabado] de la canal se mide principalmente a través de la #[b grasa de cobertura], que se evalúa tomando el espesor de la grasa dorsal en una canal refrigerada. Esta medida se realiza en dos puntos clave del dorso de la canal, y se expresa en centímetros.

    TabsC.color-acento-contenido.tabsc-p-1(data-aos="fade-up")
      .row.justify-content-center.align-items-center.py-5(titulo="Cuarto delantero")
        .col-lg-5
          .fondo-color-sistema-q.p-1
            .bg-white.pt-1
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 205px;")
            figcaption.fondo-color-sistema-q.text-center.py-1
              span.texto-p-2.fw-normal Nota. Gómez, Palacios & Maldonado (1995, p. 19) 
        .col-lg-6.order-first.order-lg-last.mb-4.mb-lg-0
          h4.mb-3 Grado de acabado 1 (G1)
          p.mb-0 Se mide entre la séptima y octava vértebra torácica, a un centímetro del borde del corte longitudinal que divide la canal en dos partes. 
      .row.justify-content-center.align-items-center.py-5(titulo="Cuarto delantero")
        .col-lg-5
          .fondo-color-sistema-q.p-1
            .bg-white.pt-1
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 220px;")
            figcaption.fondo-color-sistema-q.text-center.py-1
              span.texto-p-2.fw-normal Nota. Gómez, Palacios & Maldonado (1995, p. 19)
        .col-lg-6.order-first.order-lg-last.mb-4.mb-lg-0
          h4.mb-3 Grado de acabado 2 (G2)
          p.mb-0 Se localiza en la parte más sobresaliente del hueso sacro, a siete centímetros del corte longitudinal por donde se ha dividido la canal.

    .titulo-decorativo.my-5.mb-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Patrones de acabado de la canal bovina
    
    p.mb-4(data-aos="fade-up") El acabado de la canal bovina se clasifica en una escala que va del 0 al 3:

    .row.align-items-center
      .col-lg-6
        .row.justify-content-center.mb-4
          .col-lg-7
            .fondo-color-sistema-i.borde-3.p-4(data-aos="fade-up")
              .bg-white.borde-5.mb-2
                .d-flex.py-1.px-2
                  .borde-3.fondo-color-acento-contenido.d-inline-flex.me-2
                    span.fw-bold.text-center(style="min-width: 30px;") 0
                  p.mb-0 Acabado excelente.
              .bg-white.borde-5.mb-2
                .d-flex.py-1.px-2
                  .borde-3.fondo-color-acento-contenido.d-inline-flex.me-2
                    span.fw-bold.text-center(style="min-width: 30px;") 1-2
                  p.mb-0 Acabado intermedio.
              .bg-white.borde-5.mb-0
                .d-flex.py-1.px-2
                  .borde-3.fondo-color-acento-contenido.d-inline-flex.me-2
                    span.fw-bold.text-center(style="min-width: 30px;") 3
                  p.mb-0 Acabado regular.
    
        p.mb-4(data-aos="fade-up") Esta clasificación permite identificar la cantidad y distribución de la grasa en la canal, un factor esencial para determinar su calidad final. Estos patrones se explican a continuación:

        .row.justify-content-center(data-aos="fade-up")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 4.] Patrones de acabado de la canal bovina
            .tabla-b.dis-p-1.dis-p-2
              table
                thead
                  tr
                    th Grado
                    th G1 (cms)
                    th G2 (cms)
                tbody
                  tr
                    td 0
                    td 0.0 - 0.2
                    td 0.0 - 0.3
                  tr
                    td 1
                    td 0.3 - 0.8
                    td 0.4 - 0.9
                  tr
                    td 2
                    td 0.9 - 1.5
                    td 1.0 - 1.2
                  tr
                    td 3
                    td > 1.5
                    td > 1.2
      
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="fade-up")
          img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 505px;")
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Peso de la canal
    
    p.mb-4(data-aos="fade-up") Para determinar el peso de la canal, se deben seguir ciertos estándares, entre los cuales destacan los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .borde-3.fondo-color-sistema-j.p-4.px-md-5.h-100.align-content-center
          .bg-white.borde-5.p-3.p-md-2.mb-4
            .row.align-items-center
              .col-md-auto
                figure.mb-4.mb-md-0
                  img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 74px;")
              .col
                p.mb-0 La canal debe estar libre de estructuras como riñones, ubre y órganos viriles.
          .bg-white.borde-5.p-3.p-md-2.mb-4
            .row.align-items-center
              .col-md-auto
                figure.mb-4.mb-md-0
                  img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 74px;")
              .col
                p.mb-0 Debe estar desprovista de grasa interna, incluyendo la grasa renal, escrotal, pélvica y abdominal.
          .bg-white.borde-5.p-3.p-md-2.mb-0
            .row.align-items-center
              .col-md-auto
                figure.mb-4.mb-md-0
                  img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 74px;")
              .col
                p.mb-0 La canal debe ser pesada en estado frío.
      
      .col-lg-4.align-content-center.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 400px;")
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/51.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        h4.mb-0 Manejo de las canales en el centro de despiece
        br
        br
        p.mb-0 Una vez que las canales ingresan al centro de despiece, deben seguir estándares que garanticen su inocuidad, ya que desde este punto son consideradas un alimento. Uno de los parámetros clave para mantener la calidad de la carne es la #[b refrigeración], la cual depende de varios factores que se analizarán posteriormente. 

      
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
