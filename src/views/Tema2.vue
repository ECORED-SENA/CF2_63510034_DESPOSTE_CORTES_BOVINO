<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Factores para mantener una buena refrigeración

    .borde-14.fondo-color-sistema-r.p-3.mb-4(data-aos="zoom-in-out")
      .row.align-items-center
        .col-md-auto
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/52.svg",style="max-width: 89px;")
        .col
          p.mb-0 Los factores clave para mantener una buena refrigeración incluyen la temperatura, la humedad relativa y la circulación de aire. Estos elementos son fundamentales para asegurar la preservación adecuada de los productos almacenados en ambientes refrigerados.
    
    .fondo-personalizado-1.f2(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Temperatura
                p.mb-0 Mantener una temperatura adecuada es esencial para prolongar la conservación de los productos. A temperaturas más bajas, se ralentiza la reproducción de microorganismos y la acción de enzimas que provocan el deterioro de los alimentos.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 412px;")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Humedad relativa
                p.mb-0 La humedad relativa se relaciona directamente con la temperatura. Cuando aumenta la humedad, los productos pueden sufrir deterioro, presentando cambios de color, ablandamiento y olores desagradables. Si la humedad es demasiado baja, los productos pueden deshidratarse, afectando su calidad.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 412px;")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Circulación de aire
                p.mb-0 Medido en metros por segundo o ciclos por segundo, este factor contribuye a mantener temperaturas y humedades relativas constantes dentro de la cámara de refrigeración, favoreciendo la conservación de los alimentos.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 412px;")

</template>

<script>
export default {
  name: 'Tema2',
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
