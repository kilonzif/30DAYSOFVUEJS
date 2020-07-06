new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Global Codess',
    city: 'Accra',
    imagesrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Independence_Square%2C_Accra%2C_Ghana.JPG/400px-Independence_Square%2C_Accra%2C_Ghana.JPG'
  },
    methods: {
    changeCity() {
      if(this.city === 'Accra'){
       this.city='Nairobi';
       this.imagesrc= 'https://www.perseuss.com/_contentediting/files/51c14fa7dc2d410688ee3c7a095e7ce0.jpg';
   }else{
       this.city='Accra';
       imagesrc= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Independence_Square%2C_Accra%2C_Ghana.JPG/400px-Independence_Square%2C_Accra%2C_Ghana.JPG';

   }
    }
  }
  //   methods: {
  //   changeCity() {
  //     if (this.city === 'Accra') {
  //       this.city = 'Nairobi';
  //       this.imagesrc: 'https://www.perseuss.com/_contentediting/files/51c14fa7dc2d410688ee3c7a095e7ce0.jpg';
  //     } else {
  //       this.city = 'Accra';
  //       thisimagesrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Independence_Square%2C_Accra%2C_Ghana.JPG/400px-Independence_Square%2C_Accra%2C_Ghana.JPG';
 
  //     }
  //   }
  // }
});
