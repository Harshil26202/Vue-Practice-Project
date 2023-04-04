const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  computed: {
    fullname() {if(this.name === '') return ''
    return this.name + ' '+ 'pro'}
  },
  watch: {
    counter(value){
      if(value>30){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000);
      }
    }
  },
  methods: {
    outputFullName(){ if(this.name === '') return ''
      return this.name + ' ' + 'pro'},
    confirmedInput(){this.confirmedName = this.name},
    submitForm(){alert('submitted!')},
    setName(event, lastname){this.name = event.target.value},
    add(num){ this.counter+=num},
    remove(num){ this.counter-=num},
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');
