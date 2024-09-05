<template>
    <main>
        <!---- header--->
        <header>
            <img src="" alt="logo">
            <h1>To-Do App</h1>
        </header>
        <!----user task input component-->
        <div class="user-task-input">
            <UserTaskInput/>
        </div>

        <!----task navigation button-->
        <div class="task-nav-btn">
            <button @click="filterTasks = 'all'">all task(s)</button>
            <button @click="filterTasks = 'favorite'">favorite task(s)</button>
        </div>

        <!----tasks-->
        <div v-if="filterTasks === 'all'" class="task-lists">
            <p style="font-weight: bold; text-transform: uppercase;font-size: 12px;">you have {{ taskStore.totalCount }} tasks left to complete</p>
            <div v-for="task in taskStore.tasks" :key="task.id">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div v-if="filterTasks === 'favorite'" class="task-lists">
            <div v-for="task in taskStore.favoriteTasks" :key="task.id">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';
import UserTaskInput from './components/userTaskInput.vue';

export default {
    components: {
        TaskDetails, UserTaskInput
    },
    setup() {
        const taskStore = useTaskStore();
        const filterTasks = ref('all');
        
        return { taskStore, filterTasks };
    }
}
</script>