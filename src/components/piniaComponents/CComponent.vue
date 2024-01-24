<template>
  <p>CComponent</p>
  <p>C Component count value {{ count }}</p>
  <table border="2">
    <tr>
      <td>id</td>
      <td>email</td>
      <td>password</td>
      <td>Delete</td>
      <td>Update</td>
      <td>Add New</td>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.password }}</td>
      <td><button type="button" @click="handleDelete(user.id)">Delete</button></td>
      <td><button type="button" @click="handleUpdate(user)">Update</button></td>
      <td><button type="button" @click="handleNewUserAdd()">Add New User</button></td>
    </tr>
  </table>
  <div class="row" v-if="formShow">
    <form method="post">
      <input type="hidden" name="user_id" id="user_id" v-model="userFormData.id" /><br /><br />
      <input type="email" name="email" id="email" v-model="userFormData.email" /><br /><br />
      <input :type="show ? 'text' : 'password'" name="password" id="password" v-model="userFormData.password" />
      <button type="button" @click="show = !show">{{ show ? 'hid' : 'show' }}</button><br /><br />
      <div v-if="buttonMethod == 'handleUpdateUserData'">
        <button v-on:click="handleUpdateUserData">Update User Data</button>
      </div>
      <div v-else>
        <button v-on:click="handleNewUser">Add New User</button>
      </div>
    </form>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/Counter';
export default {
  name: 'CComponent',
  setup() {
    const store = useCounterStore();
    const { users, count } = storeToRefs(store);
    const { handleDeleteUser, handleUpdateUser, handleAddNewUser } = store;
    return {
      store,
      users,
      count,
      handleDeleteUser,
      handleUpdateUser,
      handleAddNewUser
    };
  },
  methods: {
    handleUpdate(user) {
      this.userFormData.id = user.id;
      this.userFormData.email = user.email;
      this.userFormData.password = user.password;
      this.formShow = true;
      this.buttonMethod = 'handleUpdateUserData';
    },
    handleUpdateUserData(e) {
      e.preventDefault();
      this.handleUpdateUser(this.userFormData.id, this.userFormData);
      this.formShow = false;
    },
    handleNewUserAdd() {
      this.formShow = true;
      this.buttonMethod = 'handleNewUser';
    },
    handleNewUser(e) {
      e.preventDefault();
      const newUser = {
        id: Math.random() * 100,
        email: this.userFormData.email,
        password: this.userFormData.password
      };

      this.handleAddNewUser(newUser);
      this.formShow = false;
    },
    handleDelete(id) {
      console.log(id);
      this.handleDeleteUser(id);
    }
  },
  data() {
    return {
      userFormData: {
        id: '',
        email: 'e@gmail.com',
        password: ''
      },
      show: false,
      formShow: false,
      buttonMethod: 'handleNewUserAdd'
    };
  }
};
</script>
