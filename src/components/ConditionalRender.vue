<template>
    <div>
        <h1 v-if="show" >if block of code</h1>
        <h1 v-else >else block of code</h1>
        <button v-on:click="disply">  hid show if block</button>
    </div>
</template>

<script>
export default {
    name:'ConditionalRender',
    data(){
        return {show:true}
    },
    methods:{
        disply(){
            this.show = !this.show
        }
    }
}
</script>