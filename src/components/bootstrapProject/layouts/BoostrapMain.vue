<template>
  <BoostrapTopbarVue />
  <!-- ========== Left Sidebar Start ========== -->
  <BoostrapSideBarVue />
  <!-- Left Sidebar End -->
  <DashboardVue />
  <BoostrapRightSidebarVue />

  <!-- <BoostrapTopbarVue /> -->
</template>

<script>
import DashboardVue from '../components/dashboard/Dashboard.vue';
import BoostrapRightSidebarVue from './BoostrapRightSidebar.vue';
import BoostrapSideBarVue from './BoostrapSideBar.vue';
import BoostrapTopbarVue from './BoostrapTopbar.vue';

export default {
  name: 'BoostrapMain',
  components: {
    // BoostrapTopbarVue,
    DashboardVue,
    BoostrapRightSidebarVue,
    BoostrapSideBarVue,
    BoostrapTopbarVue
  }
};
</script>