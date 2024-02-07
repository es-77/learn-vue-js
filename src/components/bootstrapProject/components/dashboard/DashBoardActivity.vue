<template>
  <div class="row">
    <div class="col-xl-4">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle"
                href="#"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-muted">All Members<i class="mdi mdi-chevron-down ms-1"></i></span>
              </a>

              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                <a class="dropdown-item" href="#">Locations</a>
                <a class="dropdown-item" href="#">Revenue</a>
                <a class="dropdown-item" href="#">Join Date</a>
              </div>
            </div>
          </div>
          <h4 class="card-title mb-4">Top Users</h4>

          <div data-simplebar style="max-height: 339px">
            <div class="table-responsive">
              <table class="table table-borderless table-centered table-nowrap">
                <tbody>
                  <tr>
                    <td style="width: 20px">
                      <img src="assets/images/users/avatar-4.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> Nevada</p>
                    </td>
                    <td><span class="badge bg-danger-subtle text-danger font-size-12">Cancel</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$250.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="assets/images/users/avatar-5.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Lolita Hamill</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> Texas</p>
                    </td>
                    <td><span class="badge bg-success-subtle text-success font-size-12">Success</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-danger" data-feather="trending-down"></i>$110.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="assets/images/users/avatar-6.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Robert Mercer</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                    </td>
                    <td><span class="badge bg-info-subtle text-info font-size-12">Active</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$420.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="assets/images/users/avatar-7.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> Montana</p>
                    </td>
                    <td><span class="badge bg-warning-subtle text-warning font-size-12">Pending</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-danger" data-feather="trending-down"></i>$120.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="assets/images/users/avatar-8.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> Colorado</p>
                    </td>
                    <td><span class="badge bg-info-subtle text-info font-size-12">Active</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$112.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="assets/images/users/avatar-2.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> Australia</p>
                    </td>
                    <td><span class="badge bg-success-subtle text-success font-size-12">Success</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-danger" data-feather="trending-down"></i>$120.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="assets/images/users/avatar-1.jpg" class="avatar-xs rounded-circle" alt="..." />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                      <p class="text-muted font-size-13 mb-0"><i class="mdi mdi-map-marker"></i> India</p>
                    </td>
                    <td><span class="badge bg-danger-subtle text-danger font-size-12">Cancel</span></td>
                    <td class="text-muted fw-semibold text-end">
                      <i class="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$112.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- enbd table-responsive-->
          </div>
          <!-- data-sidebar-->
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end col -->

    <div class="col-xl-4">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle"
                href="#"
                id="dropdownMenuButton3"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-muted">Recent<i class="mdi mdi-chevron-down ms-1"></i></span>
              </a>

              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                <a class="dropdown-item" href="#">Recent</a>
                <a class="dropdown-item" href="#">By Users</a>
              </div>
            </div>
          </div>

          <h4 class="card-title mb-4">Recent Activity</h4>

          <ol class="activity-feed mb-0 ps-2" data-simplebar style="max-height: 339px">
            <li class="feed-item">
              <div class="feed-item-list">
                <p class="text-muted mb-1 font-size-13">Today<small class="d-inline-block ms-1">12:20 pm</small></p>
                <p class="mb-0">
                  Andrei Coman magna sed porta finibus, risus posted a new article:
                  <span class="text-primary">Forget UX Rowland</span>
                </p>
              </div>
            </li>
            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                22 Jul, 2020 <small class="d-inline-block ms-1">12:36 pm</small>
              </p>
              <p class="mb-0">Andrei Coman posted a new article: <span class="text-primary">Designer Alex</span></p>
            </li>
            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                18 Jul, 2020 <small class="d-inline-block ms-1">07:56 am</small>
              </p>
              <p class="mb-0">
                Zack Wetass, sed porta finibus, risus Chris Wallace Commented
                <span class="text-primary"> Developer Moreno</span>
              </p>
            </li>
            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                10 Jul, 2020 <small class="d-inline-block ms-1">08:42 pm</small>
              </p>
              <p class="mb-0">Zack Wetass, Chris combined Commented <span class="text-primary">UX Murphy</span></p>
            </li>

            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                23 Jun, 2020 <small class="d-inline-block ms-1">12:22 am</small>
              </p>
              <p class="mb-0">
                Zack Wetass, sed porta finibus, risus Chris Wallace Commented
                <span class="text-primary"> Developer Moreno</span>
              </p>
            </li>
            <li class="feed-item pb-1">
              <p class="text-muted mb-1 font-size-13">
                20 Jun, 2020 <small class="d-inline-block ms-1">09:48 pm</small>
              </p>
              <p class="mb-0">Zack Wetass, Chris combined Commented <span class="text-primary">UX Murphy</span></p>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div class="col-xl-4">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle"
                href="#"
                id="dropdownMenuButton4"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-muted">Monthly<i class="mdi mdi-chevron-down ms-1"></i></span>
              </a>

              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton4">
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Weekly</a>
              </div>
            </div>
          </div>

          <h4 class="card-title">Social Source</h4>

          <div class="text-center">
            <div class="avatar-sm mx-auto mb-4">
              <span class="avatar-title rounded-circle bg-primary-subtle font-size-24">
                <i class="mdi mdi-facebook text-primary"></i>
              </span>
            </div>
            <p class="font-16 text-muted mb-2"></p>
            <h5>
              <a href="#" class="text-reset">Facebook - <span class="text-muted font-16">125 sales</span> </a>
            </h5>
            <p class="text-muted">
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.
            </p>
            <a href="#" class="text-reset font-16">Learn more <i class="mdi mdi-chevron-right"></i></a>
          </div>
          <div class="row mt-4">
            <div class="col-4">
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span class="avatar-title rounded-circle bg-primary font-size-16">
                    <i class="mdi mdi-facebook text-white"></i>
                  </span>
                </div>
                <h5 class="font-size-15">Facebook</h5>
                <p class="text-muted mb-0">125 sales</p>
              </div>
            </div>
            <div class="col-4">
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span class="avatar-title rounded-circle bg-info font-size-16">
                    <i class="mdi mdi-twitter text-white"></i>
                  </span>
                </div>
                <h5 class="font-size-15">Twitter</h5>
                <p class="text-muted mb-0">112 sales</p>
              </div>
            </div>
            <div class="col-4">
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span class="avatar-title rounded-circle bg-pink font-size-16">
                    <i class="mdi mdi-instagram text-white"></i>
                  </span>
                </div>
                <h5 class="font-size-15">Instagram</h5>
                <p class="text-muted mb-0">104 sales</p>
              </div>
            </div>
          </div>

          <div class="mt-3 text-center">
            <a href="#" class="text-primary font-size-14 fw-medium"
              >View All Sources <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoardActivity'
};
</script>
