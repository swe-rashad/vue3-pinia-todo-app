import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue';



export const useTodoStore = defineStore("todo", () => {
    const list = reactive<string[]>([]);

    const addToList = (payload: string) => {
        list.push(payload);
    }

    const removeFromList = (index: number) => {
        list.splice(index, 1);
    }

    const getList = computed(() => {
        return list;
    });

    return {
        list,
        addToList,
        removeFromList,
        getList
    }
}
);

