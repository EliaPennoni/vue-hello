console.log('js connected');

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message :('Hello world!'),
      imgUrl :('img/IMG_4275.jpg')
    };
  }
});

app.mount('#app');
