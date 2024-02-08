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
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="role in roles" :key="role.id">
                      <td>{{ role.id }}</td>
                      <td>{{ role.name }}</td>
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