<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mt-4">
                      <Form @submit="handleForm" :validation-schema="schema">
                        <div class="mb-3">
                          <label class="form-label" for="formrow-Fullname-input">Role Name</label>
                          <Field
                            type="text"
                            class="form-control"
                            id="formrow-Fullname-input"
                            placeholder="Enter your full Name"
                            name="name"
                            v-model="name"
                          />
                          <ErrorMessage class="text-danger" name="name" /><br />
                        </div>

                        <div class="d-flex flex-wrap gap-3 mt-3">
                          <button type="submit" class="btn btn-primary waves-effect waves-light w-md">Submit</button>
                          <button type="reset" class="btn btn-outline-danger waves-effect waves-light w-md">
                            Reset
                          </button>
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
  </div>
</template>

<script>
import { BootstrapRoleValidation } from './BootstrapRoleValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import RoleUpdateCreateApiMixins from './roleMixins/RoleUpdateCreateApiMixins.js';
import RoleWatcherMixins from './roleMixins/RoleWatcherMixins.js';
export default {
  name: 'RoleAdd',
  props: {
    role: {}
  },
  data() {
    return {
      schema: BootstrapRoleValidation,
      name: '',
      id: ''
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  mixins: [RoleUpdateCreateApiMixins, RoleWatcherMixins]
};
</script>
