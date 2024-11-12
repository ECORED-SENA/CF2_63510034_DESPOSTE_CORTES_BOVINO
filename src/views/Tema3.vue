<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Instalaciones y centros de despiece
    
    .row.mb-4.align-items-center(data-aos="fade-up")
      .col-md-auto
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/56.svg",style="max-width: 89px;")
      .col
        p.mb-0 Las instalaciones del centro de despiece deben cumplir con los estándares establecidos por las normativas vigentes, como el #[b Decreto 3075 de 1997] y el #[b Decreto 1500 de 2007], que regulan las Buenas Prácticas de Manufactura. Asimismo, deben cumplir con la #[b Resolución 240 de 2013] del INVIMA, que establece los requisitos para plantas de almacenamiento y desposte. Algunos de los aspectos generales incluyen:
    
    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-3.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 295px;")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 5.] Aspectos generales
        .tabla-b.dis-p-3
          table
            thead
              tr
                th Ítem
                th Descripción
                th Requisito
            tbody
              tr
                td Localización y planta física
                td Localización de la planta de desposte
                td Cumplir con el Plan de Ordenamiento Territorial
              tr
                td Uso y manejo del agua
                td Consumo de agua potable
                td Acceso a agua potable en cantidad y calidad
              tr
                td Emisiones
                td Permiso de vertimiento y emisiones atmosféricas
                td Cumplimiento ante la autoridad ambiental (CAR)
              tr
                td Manejo de plagas
                td Control de insectos y roedores
                td Establecer un plan de manejo integrado de plagas (MIP)
              tr
                td Requisitos sanitarios INVIMA
                td Control de requisitos sanitarios en la planta de desposte
                td Certificado de cumplimiento sanitario según Resolución 240 de 2013 INVIMA
    
    p.mb-4(data-aos="fade-up") Estos parámetros aseguran que los productos cárnicos procesados en estas instalaciones sean seguros y cumplan con los estándares de calidad exigidos.

    .row.justify-content-center.align-items-center(data-aos="fade-up")
      .col-lg-4
        p.mb-0 Sumado a esto, cada centro de desposte debe cumplir con los requisitos sanitarios relacionados con el manejo del producto cárnico, así como con los utensilios y herramientas utilizados en el proceso. Los estándares comienzan desde el ingreso del personal al centro de despiece, y es esencial que se utilice la indumentaria adecuada, tema tratado en una actividad de aprendizaje anterior.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 610px;")
    
    .titulo-decorativo.my-5.mt-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Ingreso a las instalaciones
    
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-0 Para acceder al centro de despiece, el personal debe cumplir con las especificaciones técnicas establecidas por la dirección del centro. Una de las principales es que el personal debe acreditar su #[b aptitud para manipular alimentos], lo cual requiere #[b soporte médico y corresponde a un examen anual] realizado por un médico laboral. Si se sospecha que un empleado puede portar una enfermedad que afecte la seguridad de los alimentos, se deberá realizar nuevamente el examen médico, de acuerdo con el #[b Decreto 0240 de 2013].
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 610px;")

    .fondo-personalizado-1.f5
      .fondo-personalizado-1__contenido.py-5
        .titulo-decorativo.my-5.mt-0(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Zona de vestier
        
        .row(data-aos="fade-up")
          .col-lg-6
            p.mb-0 Es la zona donde los operarios se cambian y se visten con la indumentaria necesaria, como botas y delantales, los cuales deben almacenarse en lugares específicos. Algunos centros disponen de #[b secadores de botas], que además de ser una estantería, utilizan aire caliente para secarlas internamente.
          .col-lg-6.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 610px;")

    .titulo-decorativo.my-5.mt-0(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Pocetas o pediluvios
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/61.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 En la entrada de todo centro de despiece es obligatorio el uso de #[b pediluvios] para la desinfección de las botas del personal, eliminando agentes patógenos. Estos pueden ser portátiles, y en muchas instituciones también se emplean #[b lavabotas] que, además de desinfectar, eliminan los agentes patógenos mediante fricción. 
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Control de acceso
    
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-0 Algunos centros de despiece instalan #[b controles de acceso] que, además de contar a las personas que ingresan, cumplen la función de pediluvio e incluso permiten el lavado y desinfección de manos antes de ingresar a las áreas de trabajo.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 610px;")

    .fondo-personalizado-1.f5
      .fondo-personalizado-1__contenido.py-5
        .titulo-decorativo.my-5.mt-0(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Sistemas de higiene integrados
        
        .row(data-aos="fade-up")
          .col-lg-6
            p.mb-0 Estos sistemas permiten el #[b lavado y secado de botas], además de garantizar un ciclo completo de lavado y desinfección de manos antes de permitir el acceso. Si los operarios no cumplen con el ciclo de higiene, no pueden ingresar.
          .col-lg-6.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 610px;")

    .titulo-decorativo.my-5.mt-0(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de lavamanos
    
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-4 El lavado y desinfección de las manos es fundamental, y existen varios tipos de lavamanos que evitan el contacto directo con las superficies, como:
        ul.lista-ul.mb-0.ps-4.ps-lg-5
          li.d-flex.mb-0
            i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
            span Lavamanos de pedal
          li.d-flex.mb-0
            i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
            span Lavamanos con fotocelda
          li.d-flex.mb-0
            i.fas.fa-check-circle.c-color-sistema-k.texto-p-1
            span Lavamanos mural de acción con cadera
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 610px;")
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Lavadelantales
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/65.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Es una cabina equipada con jabón, cepillo y dispensador de agua, diseñada para lavar y desinfectar los delantales utilizados en el despiece.
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Sistema de manejo de cuchillos
        
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-0 Los #[b cuchillos] y otras herramientas deben desinfectarse antes y después de cada jornada. Los #[b portacuchillos con protección] y los sistemas de desinfección que utilizan agua a 82 grados aseguran que estas herramientas estén limpias y listas para su uso.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 610px;")


    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Mesas de trabajo para el despiece
        
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-0 Las #[b mesas de trabajo] deben estar fabricadas con materiales que faciliten el lavado y la desinfección, como el acero inoxidable. Se recomienda el uso de canastas para organizar los productos despostados, y la disposición de líquidos para facilitar el proceso de desposte.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 610px;")

    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Lavado y desinfección de instalaciones
        
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-0 El lavado de las instalaciones y herramientas debe realizarse diariamente, utilizando productos desengrasantes y agua a alta presión y temperatura, con el uso de #[b hidrolavadoras industriales]. Esto asegura la eliminación de restos de proteínas y tejidos adheridos.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 610px;")


    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Limpieza de paredes y pisos
        
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-0 La limpieza de #[b paredes y pisos] es esencial para evitar la proliferación de mohos y bacterias. El uso de máquinas de vapor es fundamental para eliminar los residuos y mantener la higiene.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 610px;")


    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Cintas transportadoras y máquinas peladoras
        
    .row(data-aos="fade-up")
      .col-lg-6
        p.mb-4 Las #[b cintas transportadoras y máquinas peladoras] requieren una limpieza cuidadosa debido a la acumulación de residuos en sus superficies. El mantenimiento de estas cintas debe incluir la limpieza regular de la parte superior e inferior, donde se acumulan los residuos. Existen #[b sistemas de limpieza en continuo] que mantienen las cintas en buenas condiciones higiénicas durante toda la jornada.
        p.mb-0 Este proceso de limpieza asegura que los productos cárnicos procesados en los centros de despiece cumplan con las normas de calidad y sanidad exigidas por las autoridades.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 610px;")
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-up")
      p.mb-0 #[b Tabla 6.] Preparación de productos de limpieza y desinfección
    
    .tabla-b.dis-p-1.dis-p-4.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th Tipo de solución
            th Producto
            th(style="min-width: 210px;") Aplicación
            th(style="min-width: 215px;") Preparación
            th Concentración
            th(style="min-width: 350px;") En caso de accidente
        tbody
          tr
            td Detergente.
            td Surfactantes aniónicos.
            td Pisos, paredes, baños, equipos en general.
            td Medir 60 ml del detergente en 10 litros de agua, mezclar y aplicar.
            td 6 ml/l
            td Ojos: lavar con abundante agua. Piel: enjuagar la zona afectada con agua limpia. Ingestión: beber agua, no inducir vómito, solicitar asistencia médica.
          tr
            td Detergente desengrasante.
            td -
            td Pisos, paredes, equipos en general.
            td Medir 40 gr del detergente en 10 litros de agua, mezclar y aplicar.
            td 4 gr/l
            td Igual que el anterior.
          tr
            td Desinfectante.
            td Amonio cuaternario.
            td Pisos, paredes, baños, equipos en general, utensilios y pocetas.
            td Medir 40 ml del desinfectante en 10 litros de agua, mezclar y aplicar.
            td 4 ml/l
            td Igual que el anterior.
          tr
            td Hipoclorito de sodio.
            td -
            td Limpieza de manos, utensilios, mesas, áreas de recepción, área de proceso.
            td Preparar solución de hipoclorito en agua según concentraciones indicadas.
            td -
            td Igual que el anterior.

    .titulo-sexto.color-acento-contenido(data-aos="fade-up")
      p.mb-0 #[b Tabla 7.] Preparación de productos de limpieza y desinfección utilizando hipoclorito de sodio

    .tabla-b.dis-p-1(data-aos="fade-left")
      table
        thead
          tr
            th Concentración en partes por millón
            th(style="min-width: 390px;") Uso
            th Tiempo de exposición
            th Volumen de agua
            th Cantidad de hipoclorito en ml
        tbody
          tr
            td 50 ppm.
            td Manos
            td 1 min
            td 8 litros
            td 8 ml
          tr
            td 150 ppm
            td Utensilios, equipos de acero inoxidable, mesas de trabajo
            td 15 min
            td 10 litros
            td 30 ml
          tr
            td 250 ppm
            td Limpiones, esponjas, pisos, paredes, techos, áreas de proceso
            td 15 min
            td 10 litros
            td 50 ml
          tr
            td 350 ppm
            td Pocetas, utensilios de aseo, canecas de basura
            td 15 min
            td 10 litros
            td 70 ml


</template>

<script>
export default {
  name: 'Tema3',
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
