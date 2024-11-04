<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Instalaciones, equipos y herramientas para el desposte',
      titulo: 'Cuestionario',
      introduccion:
        'Reconocer  las instalaciones, equipos, procedimientos de higiene y clasificación de canales en el proceso de desposte.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué término se refiere al proceso de cortar y desmembrar las canales bovinas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Despiece.', esCorrecta: false },
            { id: 'b', texto: 'Desposte.', esCorrecta: true },
            { id: 'c', texto: 'Sacrificio.', esCorrecta: false },
            { id: 'd', texto: 'Fraccionamiento.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de estos componentes NO forma parte de la canal bovina?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Músculo.', esCorrecta: false },
            { id: 'b', texto: 'Grasa.', esCorrecta: false },
            { id: 'c', texto: 'Riñones.', esCorrecta: true },
            { id: 'd', texto: 'Huesos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se llama el sistema colombiano de clasificación de canales y cortes de carne bovina?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'FPTA.', esCorrecta: false },
            { id: 'b', texto: 'INAC.', esCorrecta: false },
            { id: 'c', texto: 'INTA.', esCorrecta: false },
            { id: 'd', texto: 'ICTA.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué se utiliza para medir la cantidad de cartílago en la canal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dentición.', esCorrecta: false },
            { id: 'b', texto: 'Osificación.', esCorrecta: true },
            { id: 'c', texto: 'Color de la grasa.', esCorrecta: false },
            { id: 'd', texto: 'Madurez fisiológica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito principal de los pediluvios en las plantas de desposte?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medir la temperatura.', esCorrecta: false },
            { id: 'b', texto: 'Almacenar cuchillos.', esCorrecta: false },
            { id: 'c', texto: 'Lavar las manos.', esCorrecta: false },
            { id: 'd', texto: 'Desinfectar las botas.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué factor NO influye en la calidad de la refrigeración en las cámaras frigoríficas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Temperatura.', esCorrecta: false },
            { id: 'b', texto: 'Presión atmosférica.', esCorrecta: true },
            { id: 'c', texto: 'Humedad relativa.', esCorrecta: false },
            { id: 'd', texto: 'Circulación del aire.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo se conoce la grasa que se encuentra entre las fibras musculares?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Grasa superficial.', esCorrecta: false },
            { id: 'b', texto: 'Grasa de reserva.', esCorrecta: false },
            { id: 'c', texto: 'Marmóreo.', esCorrecta: true },
            { id: 'd', texto: 'Grasa externa.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el material más recomendado para las mesas de trabajo en el desposte?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aluminio.', esCorrecta: false },
            { id: 'b', texto: 'Acero inoxidable.', esCorrecta: true },
            { id: 'c', texto: 'Madera.', esCorrecta: false },
            { id: 'd', texto: 'Plástico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El lavado y desinfección de las instalaciones debe realizarse diariamente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La clasificación ICTA de canales bovinas incluye hasta cinco categorías.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
