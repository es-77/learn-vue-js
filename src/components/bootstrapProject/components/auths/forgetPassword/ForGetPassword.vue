<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div>
            <div class="card">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Reset Password</h5>
                  <p class="text-muted">Reset Password with Minible.</p>
                </div>
                <div class="p-2 mt-4">
                  <div class="alert alert-success text-center mb-4" role="alert">
                    Enter your Email and instructions will be sent to you!
                  </div>
                  <Form @submit="onSubmit" :validation-schema="schema">
                    <div class="mb-3">
                      <labe class="form-label" for="email">User Email</labe>
                      <Field type="text" class="form-control" id="email" name="email" placeholder="Enter email" />
                      <ErrorMessage class="text-danger" name="email" />
                    </div>

                    <div class="mt-3 text-end">
                      <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Reset</button>
                    </div>

                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        Remember It ? <a href="auth-login.html" class="fw-medium text-primary"> Signin </a>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ForGetPasswordBoostrapValidation } from './ForGetPasswordBoostrapValidation';
export default {
  name: 'ForGetPassword',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: ForGetPasswordBoostrapValidation
    };
  },
  methods: {
    onSubmit(value) {
      console.log(value);
    }
  }
};
</script>