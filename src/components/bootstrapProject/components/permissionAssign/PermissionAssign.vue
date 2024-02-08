<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0">Basic Elements</h4>
            </div>
          </div>
        </div>
        <!-- end page title -->

        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Form layouts</h4>
                <div class="row">
                  <div class="col-xl-6 mt-4">
                    <Form @submit="onSubmit" :validation-schema="schema">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-floating mb-3">
                            <Field name="role_id" as="select" @change="handleRoleName" class="form-select">
                              <option value="">Select Role</option>
                              <option v-for="role in users" :key="role.id" :data-roleName="role.name" :value="role.id">
                                {{ role.name }}
                              </option>
                            </Field>
                            <ErrorMessage name="role_id" class="text-danger" />
                          </div>
                          <Field name="role_name" type="hidden" v-model="roleName" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <div
                          v-for="(modulePermission, index) in dataBasePermission"
                          :key="index"
                          :for="modulePermission"
                          class="mb-3"
                        >
                          <div class="row">
                            <div class="col-md-12">
                              <label class="form-check-label" for="floatingCheck">
                                {{ index }}
                              </label>
                            </div>
                            <div class="form-check col-md-12">
                              <label
                                v-for="permission in modulePermission"
                                :key="permission.id"
                                :for="index + '_' + permission.name"
                                class="form-check-label mx-4"
                              >
                                <Field
                                  type="checkbox"
                                  name="permissions"
                                  :value="index + '_' + permission.name"
                                  :id="index + '_' + permission.name"
                                  class="form-check-input"
                                />
                                {{ permission.name }}
                              </label>
                            </div>
                          </div>
                        </div>
                        <ErrorMessage name="permissions" class="text-danger" /><br />
                      </div>
                      <div class="d-flex flex-wrap gap-3">
                        <button type="submit" class="btn btn-primary waves-effect waves-light w-md">Submit</button>
                        <button type="reset" class="btn btn-outline-danger waves-effect waves-light w-md">Reset</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapPermissionValidation } from './BootstrapPermissionValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import PermissionAssingApiCallMixins from './permissionAssingMixins/PermissionAssingApiCallMixins.js';
export default {
  name: 'PermissionAssign',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: BootstrapPermissionValidation,
      users: [],
      permissions: [],
      dataBasePermission: [],
      toastMessage: '',
      toastVariant: 'info',
      roleName: ''
    };
  },
  methods: {
    handleRoleName(event) {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const rolename = selectedOption.dataset.rolename;
      this.roleName = rolename;
    }
  },
  mixins: [PermissionAssingApiCallMixins]
};
</script>