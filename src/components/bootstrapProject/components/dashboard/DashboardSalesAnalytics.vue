<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle text-reset"
                href="#"
                id="dropdownMenuButton5"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="fw-semibold">Sort By:</span>
                <span class="text-muted">Yearly<i class="mdi mdi-chevron-down ms-1"></i></span>
              </a>

              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton5">
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Weekly</a>
              </div>
            </div>
          </div>
          <h4 class="card-title mb-4">Sales Analytics</h4>

          <div class="mt-1">
            <ul class="list-inline main-chart mb-0">
              <li class="list-inline-item chart-border-left me-0 border-0">
                <h3 class="text-primary">
                  $<span data-plugin="counterup">2,371</span
                  ><span class="text-muted d-inline-block font-size-15 ms-3">Income</span>
                </h3>
              </li>
              <li class="list-inline-item chart-border-left me-0">
                <h3>
                  <span data-plugin="counterup">258</span
                  ><span class="text-muted d-inline-block font-size-15 ms-3">Sales</span>
                </h3>
              </li>
              <li class="list-inline-item chart-border-left me-0">
                <h3>
                  <span data-plugin="counterup">3.6</span>%<span class="text-muted d-inline-block font-size-15 ms-3"
                    >Conversation Ratio</span
                  >
                </h3>
              </li>
            </ul>
          </div>

          <div class="mt-3">
            <div
              id="sales-analytics-chart"
              data-colors='["--bs-primary", "#dfe2e6", "--bs-warning"]'
              class="apex-charts"
              dir="ltr"
            ></div>
          </div>
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end col-->

    <div class="col-xl-4">
      <div class="card bg-primary">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-sm-8">
              <p class="text-white font-size-18">
                Enhance your <b>Campaign</b> for better outreach <i class="mdi mdi-arrow-right"></i>
              </p>
              <div class="mt-4">
                <a href="javascript: void(0);" class="btn btn-success waves-effect waves-light">Upgrade Account!</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mt-4 mt-sm-0">
                <img src="assets/images/setup-analytics-amico.svg" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->

      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle text-reset"
                href="#"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="fw-semibold">Sort By:</span>
                <span class="text-muted">Yearly<i class="mdi mdi-chevron-down ms-1"></i></span>
              </a>

              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Weekly</a>
              </div>
            </div>
          </div>

          <h4 class="card-title mb-4">Top Selling Products</h4>

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0"><i class="mdi mdi-circle-medium text-primary me-2"></i> Desktops</p>
            </div>

            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-primary"
                  role="progressbar"
                  style="width: 52%"
                  aria-valuenow="52"
                  aria-valuemin="0"
                  aria-valuemax="52"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0"><i class="mdi mdi-circle-medium text-info me-2"></i> iPhones</p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-info"
                  role="progressbar"
                  style="width: 45%"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="45"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0"><i class="mdi mdi-circle-medium text-success me-2"></i> Android</p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-success"
                  role="progressbar"
                  style="width: 48%"
                  aria-valuenow="48"
                  aria-valuemin="0"
                  aria-valuemax="48"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0"><i class="mdi mdi-circle-medium text-warning me-2"></i> Tablets</p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-warning"
                  role="progressbar"
                  style="width: 78%"
                  aria-valuenow="78"
                  aria-valuemin="0"
                  aria-valuemax="78"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0"><i class="mdi mdi-circle-medium text-purple me-2"></i> Cables</p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-purple"
                  role="progressbar"
                  style="width: 63%"
                  aria-valuenow="63"
                  aria-valuemin="0"
                  aria-valuemax="63"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end Col -->
  </div>
</template>

<script>
export default {
  name: 'DashboardSalesAnalytics'
};
</script>
