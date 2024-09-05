<template>
   <div class="user-task-input-field">
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="enter task..." v-model="newTask">
        <!-- <p>{{ newTask }}</p> -->
        <button>add task</button>
  </form>
   </div>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';

    export default {
        setup(){
          const taskStore  = useTaskStore()
          const newTask = ref('')

          const handleSubmit = ()=>{

              if(newTask.value.length>0){
                taskStore.addTask({
                    title:newTask.value,
                    id:Math.floor(Math.random() * 10),
                    isFavorite:false
                })
                newTask.value = ''
              }
          }
          return {handleSubmit, newTask}
        }
    }
</script>