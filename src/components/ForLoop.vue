<template>
    <div>
        <table border="1px">
            <tr>
                <td>id</td>
                <td>name</td>
                <td>email</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'ForLoop',
    data(){
        return {
            users:[
                {id:1,name:1},
                {id:2,name:2},
                {id:3,name:3},
                {id:4,name:4},
                {id:5,name:5},
                {id:6,name:6},
                {id:7,name:7},
                {id:8,name:8},
                {id:9,name:9},
                {id:10,name:10}
            ]
        }
    }
}
</script>