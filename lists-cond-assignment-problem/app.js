const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            isShown: true,
        }
    },
    computed: {
        text(){
            return this.isShown ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask)
        },
        changeState(){
            this.isShown = !this.isShown
        }
    }
})

app.mount('#assignment')