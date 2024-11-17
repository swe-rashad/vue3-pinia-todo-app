<script setup lang="ts">
    import {useTodoStore} from '@/stores/todoList';
    import TextField from './components/TextField.vue';
    import TodoList from './components/TodoList.vue';

    const {addToList, getList, list} = useTodoStore();

    const addToDoList = (payload: string) => {
       addToList(payload);
    }

</script>

<template>
   <section class="todo">

      <div class="center-form">

          <div class="form-box">

              <div class="title">
                 <span>Add something to-do-list</span>
              </div>

              <TextField
                @change="addToDoList($event)"
                placeholder="Type something"
              />

          </div>

          
          <TodoList/>

      </div>
   </section>
</template>

<style scoped>
  .todo{
    width: 100%;
    height: 100vh;
    background-color: deepskyblue;
    & .center-form{
      padding-top: 50px;
      width: 440px;
      margin: 0 auto;
      position: relative;
      & .form-box{
        width: 100%;
        margin-bottom: 24px;
        padding: 24px;
        border-radius: 12px;
        background-color: #f2f2f2;
        box-sizing: border-box;
        & .title{
          font-weight: 600;
          margin-bottom: 24px;
          color: #000;
          font-size: 24px;
          font-family: cursive;
        }
      }
    }
  }
</style>
