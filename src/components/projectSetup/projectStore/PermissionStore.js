import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePermissionStore = defineStore('permission', () => {
    let userPermissions = ref([])


    function handleDeletePermission(userId) {
        const index = userPermissions.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
            userPermissions.value.splice(index, 1);
        } else {
            console.error(`User with ID ${userId} not found.`);
        }
    }

    function handleUpdatePermission(userId, updatedUser) {
        const index = userPermissions.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
            userPermissions.value[index] = { ...userPermissions.value[index], ...updatedUser };
        } else {
            console.error(`User with ID ${userId} not found.`);
        }
    }

    function handleAddNewPermission(newUser) {
        userPermissions.value.push(newUser);
    }

    return {
        userPermissions,
        handleDeletePermission,
        handleUpdatePermission,
        handleAddNewPermission,
    }
});