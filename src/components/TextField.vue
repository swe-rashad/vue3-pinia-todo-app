<script setup lang="ts">
    import {ref, onMounted, watch} from 'vue';

    // Refs

    const input = ref() as HTMLInputElement;
    const inputValue = ref("");

    // Props

    type IProps = {
        placeholder?: string;
    };

    const {
        placeholder
    } = defineProps<IProps>();

    // Emits

    type IEmits = {
        change: [value: string]
    };

    const emit = defineEmits<IEmits>();

    // Methods

    const blur = () => {
        if(input?.value){
            input.value.blur();
        }
    }

    const sendEmit = () => {
       let _value = inputValue.value;
       inputValue.value = '';
       emit("change", _value)
       blur();
    }

    
 

</script>   

<template>
    <div class="input-box">
        <input 
            ref="input"
            @keyup.enter="sendEmit" 
            type="text" 
            v-model="inputValue" 
            :placeholder="placeholder"
         >
    </div>
</template>

<style>
    .input-box{
        width: 100%;
        height: 48px;
        background-color: #ccc;
        border-radius: 12px;
        & input{
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 12px;
            color: black;
            font-weight: bold;
            box-sizing: border-box;
            outline: none;
            padding-left: 12px;
            font-family: Arial, Helvetica, sans-serif;
            padding-right: 12px;
            &::placeholder{
                color:black;
                font-weight: 400;
            }
        }
    }
</style>