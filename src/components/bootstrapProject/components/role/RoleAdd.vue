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
                      <form>
                        <div class="mb-3">
                          <label class="form-label" for="formrow-Fullname-input">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="formrow-Fullname-input"
                            placeholder="Enter your full Name"
                          />
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="form-label" for="formrow-email-input">Email</label>
                              <input
                                type="email"
                                class="form-control"
                                id="formrow-email-input"
                                placeholder="Enter your email address"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="form-label" for="formrow-password-input">Password</label>
                              <input
                                type="password"
                                class="form-control"
                                id="formrow-password-input"
                                placeholder="Enter your password"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap gap-3 mt-3">
                          <button type="submit" class="btn btn-primary waves-effect waves-light w-md">Submit</button>
                          <button type="reset" class="btn btn-outline-danger waves-effect waves-light w-md">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Form Layout -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- End Page-content -->

    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6">
            <div class="text-sm-end d-none d-sm-block">
              Crafted with <i class="mdi mdi-heart text-danger"></i> by
              <a href="https://themesbrand.com/" target="_blank" class="text-reset">Themesbrand</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'RoleAdd'
};
</script>
