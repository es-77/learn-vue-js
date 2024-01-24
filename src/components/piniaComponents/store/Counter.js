import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(1);
    let users = ref([
        {
            "id": "3177",
            "email": "wowosolaqo@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "08f7",
            "email": "cysu@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "e6da",
            "email": "zupoh@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "4f62",
            "email": "tedaqesaso@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "c6cd",
            "email": "beqa@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "bf43",
            "email": "zylodujix@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "20ad",
            "email": "qitohuci@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "112e",
            "email": "culoruzen@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "6213",
            "email": "pocesoja@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "3c0f",
            "email": "sybahev@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "9dd3",
            "email": "wydumij@mailinator.com",
            "password": "Pa$$w0rd!"
        },
        {
            "id": "f80e",
            "email": "hahyk@mailinator.com",
            "password": "Pa$$w0rd!"
        }
    ])

    const doubleIncrement = computed(() => count.value + 2);
    function handleIncrement() {
        count.value++;
    }
    function handleDecrement() {
        count.value--;
    }
    function handleDeleteUser(userId) {
        const index = users.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
            users.value.splice(index, 1);
        } else {
            console.error(`User with ID ${userId} not found.`);
        }
    }

    function handleUpdateUser(userId, updatedUser) {
        const index = users.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
            users.value[index] = { ...users.value[index], ...updatedUser };
        } else {
            console.error(`User with ID ${userId} not found.`);
        }
    }

    function handleAddNewUser(newUser) {
        users.value.push(newUser);
    }

    return { count, users, doubleIncrement, handleDecrement, handleIncrement, handleDeleteUser, handleUpdateUser, handleAddNewUser }
});