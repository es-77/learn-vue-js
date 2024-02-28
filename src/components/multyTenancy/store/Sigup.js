import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSigupStore = defineStore('sigup', () => {
    let users = ref(null)

    function handleUpdateUser(updatedUser) {
        users.value = updatedUser;
    }


    return { users, handleUpdateUser }
});