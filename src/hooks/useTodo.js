import { onBeforeMount, ref } from "vue";

function useTodo() {

    const todoItems = ref([]);
    
    //methods
    function fetchTodos() {
        const result = [];
        for(let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            result.push(todoItem);
        }
        return result;
    }

    function addTodo(todo) {
        todoItems.value.push(todo);
    }


    return {todoItems, fetchTodos, addTodo }
}

export {useTodo}