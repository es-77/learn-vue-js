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
                      <Form @submit="onSubmit" :validation-schema="schema">
                        <div class="mb-3">
                          <label class="form-label" for="formrow-Fullname-input">Full Name</label>
                          <Field
                            type="text"
                            class="form-control"
                            id="formrow-Fullname-input"
                            placeholder="Enter your full Name"
                            name="name"
                          />
                          <ErrorMessage class="text-danger" name="name" /><br />
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="form-label" for="formrow-email-input">Email</label>
                              <Field
                                type="email"
                                class="form-control"
                                id="formrow-email-input"
                                placeholder="Enter your email address"
                                name="email"
                              />
                              <ErrorMessage class="text-danger" name="email" /><br />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="form-label" for="formrow-password-input">Password</label>
                              <Field
                                type="password"
                                class="form-control"
                                id="formrow-password-input"
                                placeholder="Enter your password"
                                name="password"
                              />
                              <ErrorMessage class="text-danger" name="password" /><br />
                            </div>
                          </div>
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
import { BootstrapUserVaildation } from './BootstrapUserVaildation';
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  name: 'UserCreate',
  data() {
    return {
      schema: BootstrapUserVaildation
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    onSubmit(value) {
      console.log(value);
    }
  }
};
</script>