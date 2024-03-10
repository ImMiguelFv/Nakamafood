document.addEventListener('DOMContentLoaded', function () {
  
  // Obtiene una referencia al botón de apertura del modal mediante su ID
  const open = document.getElementById('origina_amen_1');
  
  // Obtiene una referencia al contenedor del modal mediante su ID
  const modal_container = document.getElementById('modal_container');
  
  // Obtiene una referencia al botón de cierre del modal mediante su ID
  const close = document.getElementById('close');
  
  // Obtiene una referencia al iframe dentro del contenedor del modal
  let iframe = modal_container.querySelector('iframe');

  // Función para detener la reproducción del video dentro del iframe
  function stopVideo() {
      // Verifica si existe el iframe
      if (iframe) {
          // Obtiene la fuente del iframe
          var iframeSrc = iframe.src;
          // Establece la fuente del iframe a sí mismo para detener la reproducción
          iframe.src = iframeSrc;
      }
  }

  // Función para pausar el video dentro del iframe
  function pauseVideo() {
      // Verifica si existe el iframe
      if (iframe) {
          // Obtiene una referencia al reproductor de video del iframe
          var player = iframe.contentWindow.document.querySelector('video');
          // Verifica si el reproductor de video existe y está reproduciendo
          if (player && !player.paused) {
              // Pausa el video
              player.pause();
          }
      }
  }

  // Agrega un event listener para abrir el modal cuando se hace clic en el botón de apertura
  open.addEventListener('click', () => {
      modal_container.classList.add('show'); // Agrega la clase 'show' para mostrar el modal
    
      // Muestra el iframe si ya existe
      if (iframe) {
          iframe.style.display = 'block'; // Cambia el estilo para mostrarlo
      }
  });

  // Agrega un event listener para cerrar el modal cuando se hace clic en el botón de cierre
  close.addEventListener('click', () => {
      modal_container.classList.remove('show'); // Elimina la clase 'show' para ocultar el modal
    
      // Oculta el iframe en lugar de eliminarlo
      if (iframe) {
          iframe.style.display = 'none'; // Cambia el estilo para ocultarlo
      }
    
      // Detiene el video (opcional, dependiendo de tu caso)
      stopVideo();
  });

  // Agrega un event listener para cerrar el modal cuando se hace clic fuera de él
  window.addEventListener('click', (event) => {
      if (event.target === modal_container) {
          modal_container.classList.remove('show'); // Elimina la clase 'show' para ocultar el modal
      
          // Oculta el iframe en lugar de eliminarlo
          if (iframe) {
              iframe.style.display = 'none'; // Cambia el estilo para ocultarlo
          }

          // Detiene el video (opcional, dependiendo de tu caso)
          stopVideo();
      }
  });
});
