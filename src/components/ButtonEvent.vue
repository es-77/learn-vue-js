<template>
    <div>
        <button v-on:click="hello">on click </button>
        <br>
        <button v-on:mouseleave="hello">on mouse leave </button>
        <br>
        <button v-on:mouseover="hello">on mouse over </button>
    </div>
</template>
<script>
export default {
    name:'ButtonEvent',
    methods:{
        hello(){
            console.log('hello function call');
        }
    }
}
</script>