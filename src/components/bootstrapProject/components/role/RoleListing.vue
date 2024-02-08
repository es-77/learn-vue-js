<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <p>Role Listing</p>
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
                      <th>Delete</th>
                      <th>Update</th>
                      <th>Add</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="role in roles" :key="role.id">
                      <td>{{ role.id }}</td>
                      <td>{{ role.name }}</td>
                      <td><button @click="handleDelete(role.id)" class="btn btn-danger">Delete Role</button></td>
                      <td>
                        <router-link :to="'role_update/' + role.id" class="btn btn-primary">Update Role</router-link>
                      </td>
                      <td><router-link to="role_add" class="btn btn-secondary">Add Role</router-link></td>
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
import RoleMixinApiCall from './roleMixins/RoleMixinApiCall.js';
export default {
  name: 'RoleListing',
  data() {
    return {
      roles: []
    };
  },
  mixins: [RoleMixinApiCall]
};
</script>