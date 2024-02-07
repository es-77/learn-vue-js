<template>
  <div class="vertical-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <router-link to="/" class="logo logo-dark">
        <span class="logo-sm"> <img src="assets/images/logo-sm.png" alt="" height="22" /> </span>
        <span class="logo-lg"> <img src="assets/images/logo-dark.png" alt="" height="20" /> </span>
      </router-link>
      <router-link to="/" class="logo logo-light">
        <span class="logo-sm"> <img src="assets/images/logo-sm.png" alt="" height="22" /> </span>
        <span class="logo-lg"> <img src="assets/images/logo-light.png" alt="" height="20" /> </span>
      </router-link>
    </div>
    <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
      <i class="fa fa-fw fa-bars"></i>
    </button>
    <div class="sidebar-menu-scroll">
      <!-- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>
          <li>
            <router-link to="/">
              <!-- <i class="uil-home-alt"></i><span class="badge rounded-pill bg-primary float-end">01</span> -->
              <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">User</a>
            <ul class="sub-menu" aria-expanded="true">
              <li><router-link to="/user_listing">User Listing</router-link></li>
              <li><router-link to="/user_add">User Add</router-link></li>
              <li><router-link to="/user_update">User Update</router-link></li>
              <li><router-link to="/user_delete">User Delete</router-link></li>
            </ul>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">Role</a>
            <ul class="sub-menu" aria-expanded="true">
              <li><router-link to="/role_lising">Role Lising</router-link></li>
              <li><router-link to="/role_add">Role Add</router-link></li>
              <li><router-link to="/role_update">Role Update</router-link></li>
              <li><router-link to="/role_delete">Role Delete</router-link></li>
            </ul>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">Permissions</a>
            <ul class="sub-menu" aria-expanded="true">
              <li><router-link to="/role_lising">Permissions Lising</router-link></li>
              <li><router-link to="/role_add">Permission Assign Role</router-link></li>
              <li><router-link to="/role_update">Permission Assign Update</router-link></li>
              <li><router-link to="/role_delete">Permission Assing Role Delete</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template> <script>
import SimpleBar from 'simplebar';
export default {
  name: 'BoostrapSideBar',
  mounted() {
    this.initializeSimpleBar();
  },
  methods: {
    initializeSimpleBar() {
      const sidebarMenuScroll = document.querySelector('.sidebar-menu-scroll');
      if (sidebarMenuScroll) {
        new SimpleBar(sidebarMenuScroll);
      }
    }
  }
};
</script>