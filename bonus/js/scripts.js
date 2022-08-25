const todos = [
    {
        text: 'Fare i compiti',
        done: false,
    },
    {
        text: 'Fare la spesa',
        done: true,
    },
    {
        text: 'Buttare il pattume',
        done: false,
    },
    {
        text: 'Fare la doccia',
        done: false,
    },
];

const app = new Vue({
    el: '#app',
    data: {
        name: 'TodoList',
        todos,
        classeTodo: 'todo',
        newTodo: '',
    },
    methods: {
        toggleDoneOf(todo) {
            todo.done = !todo.done;
        },
        addTodo() {
            this.newTodo = this.newTodo.trim();
            if (!this.newTodo) return;
            const newTodoObj = {
                text: this.newTodo, 
                done: false
            };
            this.todos.push(newTodoObj);
            this.newTodo = '';
        },
    }
});