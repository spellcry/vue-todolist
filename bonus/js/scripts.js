const todos = [
    {
        text: 'Fare i compiti',
        done: false,
        optionsVisible: false,
    },
    {
        text: 'Fare la spesa',
        done: true,
        optionsVisible: false,
    },
    {
        text: 'Buttare il pattume',
        done: false,
        optionsVisible: false,
    },
    {
        text: 'Fare la doccia',
        done: false,
        optionsVisible: false,
    },
];

const app = new Vue({
    el: '#app',
    data: {
        name: 'TodoList',
        todos,
        classeTodo: 'todo',
        classeIcon: 'fas',
        newTodo: '',
    },
    computed: {
        todosNotDone() {
            const todosDone = this.todos.filter(todo => {
                return todo.done === false;
            })
            return todosDone;
        },
        todosDone() {
            const todosDone = this.todos.filter(todo => {
                return todo.done === true;
            })
            return todosDone;
        },
    },
    methods: {
        toggleDoneOf(todo) {
            todo.done = !todo.done;
            todo.optionsVisible = false;
        },
        addTodo() {
            this.newTodo = this.newTodo.trim();
            if (!this.newTodo) return;
            const newTodoObj = {
                text: this.newTodo, 
                done: false,
                optionsVisible: false,
            };
            this.todos.push(newTodoObj);
            this.newTodo = '';
        },
        delTodo(todo) {
            todos.splice(todos.indexOf(todo), 1);
            this.optionsVisible = false;
        },
        toggleOptions(todo) {
            todo.optionsVisible = !todo.optionsVisible;
        },
    }
});