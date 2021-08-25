new Vue({
    el: '#app',
    data: {
        message: 'HelloNewMessage!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})