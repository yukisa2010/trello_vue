import Vue from 'vue'

Vue.component('input-field', {
    props: ["inputText"],
    template: `
    <div>
        <input type="text" v-model="inputText"/>
        <button @click="addTodo">追加</button>
    </div>
    `,
    methods: {
        addTodo() {
            this.$emit('addTodo', this.inputText)
        }
    }
})


new Vue({
    el: '#app',
    template: `
    <div>
        <input-field 
            :inputText="inputText"
            @addTodo="addTodo"
        ></input-field>
        <ul>
            <li>{{todos}}</li>
        </ul>
    </div>
    `,
    data() {
        return {
            todos: [],
            inputText: []
        }
    },
    methods: {
        addTodo(inputText) {
            const todo = {}
            todo.content = inputText
            this.todos.push(todo)
            this.inputText = ''
        }
    }
})


