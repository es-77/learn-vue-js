<template>
    <div>
        <h1>hello home components</h1>
        <!-- <h1>{{name}}</h1>
        <h1>{{lastName}}</h1> -->

        <button v-on:click="helloWord"> console data on click</button>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    props:{
        name:String,
        lastName:String
    },
    methods:{
        helloWord(){
            console.log('hello world button click ');

        }
    }
}
</script>
