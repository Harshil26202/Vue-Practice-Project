const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id:'manual',
                    name:'hk',
                    phone:'12345',
                    email:'test@email.com'
                },
                {
                    id:'julie',
                    name:'kk',
                    phone:'123312345',
                    email:'test2@email.com'
                }
            ]
        }
    },
})

app.component('friend-contact', {
    template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button>Show Details</button>
      <ul>
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>`,
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toogleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

}); 

app.mount('#app')