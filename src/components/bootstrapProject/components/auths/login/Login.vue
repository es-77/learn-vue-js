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
                <h5 class="text-primary">Welcome Back !</h5>
                <p class="text-muted">Sign in to continue to Minible.</p>
              </div>
              <div class="p-2 mt-4">
                <Form @submit="onSubmit" :validation-schema="schema">
                  <div class="mb-3">
                    <labe class="form-label" for="email">User Email</labe>
                    <Field type="text" class="form-control" id="email" name="email" placeholder="Enter email" />
                    <ErrorMessage class="text-danger" name="email" />
                  </div>

                  <div class="mb-3">
                    <div class="float-end">
                      <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                    </div>
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
                      id="auth-remember-check"
                      name="auth-remember-check"
                    />
                    <label class="form-check-label" for="auth-remember-check">Remember me</label>
                    <ErrorMessage class="text-danger" name="auth-remember-check" />
                  </div>

                  <div class="mt-3 text-end">
                    <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Log In</button>
                  </div>

                  <div class="mt-4 text-center">
                    <div class="signin-other-title">
                      <h5 class="font-size-14 mb-3 title">Sign in with</h5>
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
                    <p class="mb-0">
                      Don't have an account ?
                      <a href="auth-register.html" class="fw-medium text-primary"> Signup now </a>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <p>Minible. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
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
// LoginValidationBootstrap
// import axios from 'axios';
import { LoginValidationBootstrap } from './LoginValidationBootstrap';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: LoginValidationBootstrap
    };
  },
  methods: {
    onSubmit(value) {
      console.log(value);
    }
  }
};
</script>