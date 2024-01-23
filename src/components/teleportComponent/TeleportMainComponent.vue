<template>
  <p>TeleportMainComponent</p>
  <TeleportComponentRecived />
  <teleport to="#TeleportComponentRecivedHeader">
    <TeleportHeaderComponent />
  </teleport>
  <teleport to="#TeleportComponentRecivedBody">
    <TeleportBodyComponent />
  </teleport>
  <teleport to="#TeleportComponentRecivedFooter">
    <TeleportFooterComponent />
  </teleport>
</template>


<script>
import TeleportHeaderComponent from './TeleportHeaderComponent.vue';
import TeleportBodyComponent from './TeleportBodyComponent.vue';
import TeleportFooterComponent from './TeleportFooterComponent.vue';
import TeleportComponentRecived from './TeleportComponentRecived.vue';
export default {
  name: 'TeleportMainComponent',
  components: {
    TeleportHeaderComponent,
    TeleportBodyComponent,
    TeleportFooterComponent,
    TeleportComponentRecived
  }
};
</script>