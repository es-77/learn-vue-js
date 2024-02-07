<template>
  <p>Dashboard</p>
  <!-- Begin page -->
  <div id="layout-wrapper">
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <!-- start page title -->
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Dashboard</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Minible</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <!-- end page title -->

          <DashBoardCardVue />
          <!-- end row-->
          <!-- <DashboardSalesAnalyticsVue /> -->

          <!-- end row-->

          <DashBoardActivityVue />
          <!-- end row -->
          <DashBoardTableVue />
          <!-- end row -->
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->

      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">© Minible.</div>
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
    <!-- end main content-->
  </div>
  <!-- END layout-wrapper -->
  <div class="rightbar-overlay"></div>
</template>

<script>
import DashBoardActivityVue from './DashBoardActivity.vue';
import DashBoardCardVue from './DashBoardCard.vue';
// import DashboardSalesAnalyticsVue from './DashboardSalesAnalytics.vue';
import DashBoardTableVue from './DashBoardTable.vue';

export default {
  name: 'BoostrapDashBoard',
  components: {
    DashBoardCardVue,
    // DashboardSalesAnalyticsVue,
    DashBoardTableVue,
    DashBoardActivityVue
  }
};
</script>

