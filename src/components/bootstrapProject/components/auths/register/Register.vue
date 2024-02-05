<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <a href="index.html" class="mb-5 d-block auth-logo">
              <img src="assets/images/logo-dark.png" alt="" height="22" class="logo logo-dark" />
              <img src="assets/images/logo-light.png" alt="" height="22" class="logo logo-light" />
            </a>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card">
            <div class="card-body p-4">
              <div class="text-center mt-2">
                <h5 class="text-primary">Register Account</h5>
                <p class="text-muted">Get your free Minible account now.</p>
              </div>
              <div class="p-2 mt-4">
                <Form @submit="onSubmit" :validation-schema="schema">
                  <div class="mb-3">
                    <label class="form-label" for="name">Username</label>
                    <Field type="text" class="form-control" id="name" name="name" placeholder="Enter name" />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="email">Email</label>
                    <Field type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
                    <ErrorMessage class="text-danger" name="email" />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="password">Password</label>
                    <Field
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                    />
                    <ErrorMessage class="text-danger" name="password" />
                  </div>

                  <div class="form-check">
                    <Field
                      type="checkbox"
                      class="form-check-input"
                      id="auth-terms-condition-check"
                      name="auth-terms-condition-check"
                    />
                    <ErrorMessage class="text-danger" name="auth-terms-condition-check" />
                    <label class="form-check-label" for="auth-terms-condition-check"
                      >I accept <a href="javascript: void(0);" class="text-reset">Terms and Conditions</a></label
                    >
                  </div>

                  <div class="mt-3 text-end">
                    <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Register</button>
                  </div>

                  <div class="mt-4 text-center">
                    <div class="signin-other-title">
                      <h5 class="font-size-14 mb-3 title">Sign up using</h5>
                    </div>

                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                          <i class="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                          <i class="mdi mdi-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                          <i class="mdi mdi-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4 text-center">
                    <p class="text-muted mb-0">
                      Already have an account ? <a href="auth-login.html" class="fw-medium text-primary"> Login</a>
                    </p>
                  </div>
                </Form>
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
import { RegisterValidationBootstrap } from './RegisterValidationBootstrap';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: RegisterValidationBootstrap
    };
  }
};
</script>