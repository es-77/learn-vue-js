<template>
  <p>V On</p>
  <!-- method handler -->
  <button v-on:click="VClickMethod">V Click Method</button>

  <!-- dynamic event -->
  <!-- <button v-on:[event]="doThis"></button> -->

  <!-- inline statement -->
  <!-- <button v-on:click="doThat('hello', $event)"></button> -->

  <!-- shorthand -->
  <button type="submit" @click="VClickMethod">V Click Method short hand submit</button>

  <!-- shorthand dynamic event -->
  <!-- <button @[event]="doThis"></button> -->

  <!-- stop propagation -->
  <!-- <button @click.stop="VClickMethod">VClickMethod</button> -->

  <!-- prevent default -->
  <button type="submit" @click.prevent="VClickMethod">V Click Method prevent</button>

  <!-- prevent default without expression -->
  <!-- <form @submit.prevent></form> -->

  <!-- chain modifiers -->
  <!-- <button @click.stop.prevent="doThis"></button> -->

  <!-- key modifier using keyAlias -->
  <input @keyup.enter="onEnter" />

  <!-- the click event will be triggered at most once -->
  <button v-on:click.once="VClickMethod">click.once</button>

  <!-- object syntax -->
  <button v-on="{ mousedown: mouseDown, mouseup: mouseUp }">mousedown: mouseDown, mouseup: mouseUp</button>
</template>

<script>
export default {
  name: 'VOn',
  methods: {
    VClickMethod() {
      alert('click function run');
    },
    mouseDown() {
      alert('mouseDown');
    },
    mouseUp() {
      alert('mouseUp');
    }
  }
};
</script>