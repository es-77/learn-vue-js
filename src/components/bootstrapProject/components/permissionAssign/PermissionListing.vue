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
                      <th>Role Id</th>
                      <th>Role Name</th>
                      <th>Permissions</th>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>Add</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="rolePermission in rolePermissions" :key="rolePermission.id">
                      <td>{{ rolePermission.id }}</td>
                      <td>{{ rolePermission.role_id }}</td>
                      <td>{{ rolePermission.role_name }}</td>
                      <td>
                        <label
                          class="form-label m-2"
                          for="formrow-password-input"
                          v-for="permission in rolePermission.permissions"
                          :key="permission"
                          >{{ permission }}</label
                        >
                      </td>
                      <td>
                        <button type="button" class="btn-primary btn" @click="handleDelete(rolePermission.id)">
                          Delete Role Permissions
                        </button>
                      </td>
                      <td>
                        <router-link class="btn btn-secondary" :to="'permission_update/' + rolePermission.id"
                          >Update Role Permissions</router-link
                        >
                      </td>
                      <td>
                        <router-link class="btn btn-dark" to="permission_add">Add Role Permissions</router-link>
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
import RoleAssignPermissionApiCallMixins from './permissionAssingMixins/RoleAssignPermissionApiCallMixins';
export default {
  name: 'PermissionListing',
  data() {
    return {
      rolePermissions: []
    };
  },
  mixins: [RoleAssignPermissionApiCallMixins]
};
</script>
