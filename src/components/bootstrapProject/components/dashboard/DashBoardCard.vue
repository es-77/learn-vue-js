<template>
  <div class="row">
    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="total-revenue-chart" data-colors='["--bs-primary"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1">$<span data-plugin="counterup">34,152</span></h4>
            <p class="text-muted mb-0">Total Revenue</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-success me-1"><i class="mdi mdi-arrow-up-bold me-1"></i>2.65%</span> since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="orders-chart" data-colors='["--bs-success"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">5,643</span></h4>
            <p class="text-muted mb-0">Orders</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-danger me-1"><i class="mdi mdi-arrow-down-bold me-1"></i>0.82%</span> since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="customers-chart" data-colors='["--bs-primary"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">45,254</span></h4>
            <p class="text-muted mb-0">Customers</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-danger me-1"><i class="mdi mdi-arrow-down-bold me-1"></i>6.24%</span> since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="growth-chart" data-colors='["--bs-warning"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1">+ <span data-plugin="counterup">12.58</span>%</h4>
            <p class="text-muted mb-0">Growth</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-success me-1"><i class="mdi mdi-arrow-up-bold me-1"></i>10.51%</span> since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->
  </div>
</template>

<script>
export default {
  name: 'DashBoardCard'
};
</script>