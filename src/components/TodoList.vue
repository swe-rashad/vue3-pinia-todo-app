<script setup>
    import {useTodoStore} from '@/stores/todoList.ts';
    const {getList, removeFromList} = useTodoStore();
</script>

<template>

    <div class="todo-list" v-if="getList.length > 0">

        <div class="item-todo" v-for="(item, index) in getList" :key="index">
            <span class="title">
                {{ item }}
            </span>
            <span class="remove-item" @click="removeFromList(index)">
                X
            </span>
        </div>

    </div>
    
</template>

<style  scoped>
    .todo-list{
        position: relative;
        width: 100%;
        border-radius: 12px;
        box-sizing: border-box;
        padding: 24px;
        background-color: white;
        & .item-todo{
            height: 40px;
            background-color: peru;
            margin-bottom: 12px;
            box-sizing: border-box;
            padding-left: 12px;
            padding-right: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 12px;
            color: white;
            font-size: 24px;
            font-weight: 500;
            & .remove-item{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                font-size: 16px;
                color: black;
                cursor: pointer;
                background-color: palevioletred;
                justify-content: center;
                align-items: center;
            }
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
</style>