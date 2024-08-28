console.log('js connected');

const { createApp, ref } = Vue;

createApp({
    data() {
      // Definizione dei dati reattivi
      const message = ref('Hello world!');
      const imgUrl = ref('img/IMG_4275.jpg');
      const imageClass = ref('medium-img'); 
      return {
        message,
        imgUrl,
        imageClass
      };
    }
}).mount('#app');
