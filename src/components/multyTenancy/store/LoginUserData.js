import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginUserDataStore = defineStore('LoginUserData', () => {
    let user = ref({})

    function handleUpdateUserData(updatedUser) {
        user.value = updatedUser;
    }

    return { user, handleUpdateUserData }
});