<template>
  <TodoHeader></TodoHeader>
  <TodoInput :todoItems="todoItems" @add="addTodo"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodo"></TodoList>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'; //vim
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import { ref } from 'vue';
export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  setup() {
    //data
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
    todoItems.value = fetchTodos();

    function addTodo(todo) {
      todoItems.value.push(todo);
    }

    return {todoItems, addTodo}
  },
  methods:{
    removeTodo(index) {
      this.todoItems.splice(index, 1);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>