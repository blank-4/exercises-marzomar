new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      ajoute() { 
        this.counter++;
      },
      retire() {
          this.counter--;
      }
    }
  });