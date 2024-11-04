<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.borde-20.p-4.py-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama muestra las instalaciones, equipos y herramientas para el desposte, dividiéndose en varias áreas clave: la canal, que incluye componentes musculares, óseos y adiposos, y los sistemas de evaluación; los factores para mantener una buena refrigeración, como la temperatura y la circulación de aire; las instalaciones y centros de despiece, con zonas de acceso y sistemas de higiene y manejo de cuchillos; y el lavado y desinfección de instalaciones, que utiliza productos como el hipoclorito de sodio para la limpieza.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
