new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Global Codess Faith ',
    city: 'Accra'
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
       'What is up!' :
       'Hello World!';
    }
  }
});
