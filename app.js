const TodoItem = {
    props: ['todo'],
    template: `<li> {{todo.text }}</li>`
} 

const TwoWayBinding = {
    data() {
        return {
            message: 'Olá Mundo!',
            seen: true,
            todos: [
                {id: 0, text: 'Aprender JavaScript'},
                {id: 1, text: 'Aprender Vue'},
                {id: 2, text: 'Criar algo incrível'}
            ]
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
            .split('')
            .reverse()
            .join('')
        },
        hideMessage() {
            this.seen = ! this.seen
        }
    },
    components: {
        TodoItem
    }
}



Vue.createApp(TwoWayBinding).mount('#two-way-binding')