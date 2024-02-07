<template>
  <BoostrapTopbarVue />
  <!-- ========== Left Sidebar Start ========== -->
  <BoostrapSideBarVue />
  <!-- Left Sidebar End -->
  <router-view></router-view>
  <BoostrapRightSidebarVue />

  <!-- <BoostrapTopbarVue /> -->
</template>

<script>
import BoostrapRightSidebarVue from './BoostrapRightSidebar.vue';
import BoostrapSideBarVue from './BoostrapSideBar.vue';
import BoostrapTopbarVue from './BoostrapTopbar.vue';

export default {
  name: 'BoostrapMain',
  components: {
    BoostrapRightSidebarVue,
    BoostrapSideBarVue,
    BoostrapTopbarVue
  }
};
</script>