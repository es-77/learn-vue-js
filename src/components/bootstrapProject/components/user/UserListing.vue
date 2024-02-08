<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <p>UserListing</p>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table
                  id="datatable"
                  class="table table-bordered dt-responsive nowrap"
                  style="border-collapse: collapse; border-spacing: 0; width: 100%"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>Add</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.id }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.password }}</td>
                      <td>
                        <button type="button" class="btn-primary btn" @click="handleDelete(user.id)">
                          Delete User
                        </button>
                      </td>
                      <td>
                        <router-link class="btn btn-secondary" :to="'user_update/' + user.id">Update User</router-link>
                      </td>
                      <td>
                        <router-link class="btn btn-dark" to="user_add">Add User</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserApiCallMixins from './userMixins/UserApiCallMixins.js';
export default {
  name: 'UserListing',
  data() {
    return {
      users: []
    };
  },
  mixins: [UserApiCallMixins]
};
</script>
