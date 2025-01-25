<template>
  <TodoHeader :appTitle="appTitle"></TodoHeader>
  <TodoInput :todoItems="todoItems" @add="addTodo"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodo"></TodoList>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'; //vim
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import { useTodo } from './hooks/useTodo';
import { onBeforeMount } from 'vue';

export default {
  setup() {
    const {todoItems,addTodo, fetchTodos} = useTodo();
    //화면이 그려지기 전에 동작
    onBeforeMount(() =>{
        todoItems.value = fetchTodos();
    })

    return {todoItems, addTodo}
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  methods:{
    removeTodo(index) {
      this.todoItems.splice(index, 1);
    }
  }

  ,
  data() {
    return{
      appTitle: '할일앱'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>