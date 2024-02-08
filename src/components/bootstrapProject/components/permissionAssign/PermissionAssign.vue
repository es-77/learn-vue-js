<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0">Basic Elements</h4>

              <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                  <li class="breadcrumb-item active">Basic Elements</li>
                </ol>
              </div>
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
                    <form>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-floating mb-3">
                            <label for="role_id">Select Role</label><br />
                            <Field name="role_id" as="select" class="form-select">
                              <option value="">Select Role</option>
                              <option v-for="role in users" :key="role.id" :value="role.id">{{ role.name }}</option>
                            </Field>
                            <ErrorMessage name="role_id" />
                            <label for="floatingSelectGrid">Works with selects</label>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="floatingCheck" />
                          <label class="form-check-label" for="floatingCheck"> Check me out </label>
                        </div>
                        <div
                          v-for="(modulePermission, index) in dataBasePermission"
                          :key="index"
                          :for="modulePermission"
                        >
                          <label>
                            {{ index }}
                          </label>
                          <p>
                            <label
                              v-for="permission in modulePermission"
                              :key="permission.id"
                              :for="index + '_' + permission.name"
                            >
                              <Field
                                type="checkbox"
                                name="permissions"
                                :value="index + '_' + permission.name"
                                :id="index + '_' + permission.name"
                              />
                              {{ permission.name }}
                            </label>
                          </p>
                        </div>
                        <ErrorMessage name="permissions" /><br />
                      </div>
                      <div class="d-flex flex-wrap gap-3">
                        <button type="submit" class="btn btn-primary waves-effect waves-light w-md">Submit</button>
                        <button type="reset" class="btn btn-outline-danger waves-effect waves-light w-md">Reset</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Form Layout -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PermissionAssign'
};
</script>