import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useLoginUserDataStore = defineStore('LoginUserData', () => {
    let user = ref({})

    if (localStorage.getItem("login_user")) {
        user.value = localStorage.getItem("login_user") ? JSON.parse(localStorage.getItem("login_user")) : {}
    }
    watch(user, (userValue) => {
        localStorage.setItem("login_user", JSON.stringify(userValue))
    }, { deep: true })

    function handleUpdateUserData(updatedUser) {
        user.value = updatedUser;
    }

    return { user, handleUpdateUserData }
});