<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-4.pb-md-4
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.size-full.med.pos-bottom.f1
      .fondo-personalizado-1__contenido.pb-3
        .row.mb-4(data-aos="zoom-in-out")
          .col-lg-9.pe-lg-0
            .fondo-color-sistema-i.p-4.h-100.align-content-center
              .fig-dec-1.mb-2
                .fig-dec-content
                  figure
                    img.mx-auto(src="@/assets/curso/temas/1.svg")
              p.mb-4 De acuerdo con la Ley 811 de 2003, emitida por el Ministerio de Agricultura y Desarrollo Rural, se define una cadena como el conjunto de actividades que se articulan técnica y económicamente desde el inicio de la producción y elaboración de un producto agropecuario hasta su comercialización final.
              p.mb-0 Estas cadenas están compuestas por eslabones, es decir, por todos los agentes que intervienen en la producción, transformación y distribución de los productos. Su objetivo común es llevar el producto al consumidor final.

          .col-lg-3.ps-lg-0.align-content-center.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 315px;")
        
        .row.justify-content-center(data-aos="fade")
          .col-lg-5.pe-lg-0.align-content-center
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 505px;")
          .col-lg-5.ps-lg-0
            .fondo-color-sistema-j.p-4.h-100.align-content-center
              p.mb-0 En el caso de la producción cárnica, los procesos se suelen describir como #[b "De la granja a la mesa"]. Todos estos procedimientos y operaciones son cruciales para garantizar la calidad y el servicio de las carnes y productos cárnicos hasta su llegada al consumidor final.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
