import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserDataStore = defineStore('userData', () => {
    let userData = ref([])


    function handleDeleteUserData(userId) {
        const index = userData.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
            userData.value.splice(index, 1);
        } else {
            console.error(`User with ID ${userId} not found.`);
        }
    }

    function handleUpdateUserData(userId, updatedUser) {
        const index = userData.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
            userData.value[index] = { ...userData.value[index], ...updatedUser };
        } else {
            console.error(`User with ID ${userId} not found.`);
        }
    }

    function handleAddUserData(newUser) {
        userData.value.push(newUser);
    }

    return {
        userData,
        handleDeleteUserData,
        handleUpdateUserData,
        handleAddUserData,
    }
});