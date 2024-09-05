import { defineStore } from "pinia";
export const useTaskStore = defineStore('taskStore', {
    state:()=>({
        tasks: [
            {id: 1, title: "learn pinia store management", isFavorite: false},
            {id: 2, title: "work on projects", isFavorite: true},
            {id: 3, title: "submit project on due date", isFavorite: true},
        ],
    }),
    getters:{
        favoriteTasks(){
            return this.tasks.filter(t => t.isFavorite);
        },
        totalCount:(state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){

        },
        toggleMarkAsFavorite(id){

        }
    }
})