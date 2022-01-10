<head>
<script defer src="/src/assets/js/all.js"></script>
</head>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from '@/components/sidebar/state'
import SidebarLink from '@/components/sidebar/SidebarLink'

export default {
  props: {},
  components: { SidebarLink },
  setup () {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>U</div>
        <div>P</div>
      </span>
      <span v-else>Urlaubs Planer</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/reiseziele" icon="fas fa-map-marked-alt">Reiseziele</SidebarLink>
    <SidebarLink to="/kalender" icon="fas fa-calendar-alt">Kalender</SidebarLink>
    <SidebarLink to="/abstimmungen" icon="fas fa-person-booth">Abstimmungen</SidebarLink>
    <SidebarLink to="/todo" icon="fas fa-tasks">ToDo</SidebarLink>
    <SidebarLink to="/kosten" icon="fas fa-euro-sign">Kosten</SidebarLink>
    <SidebarLink to="/ticketsuche" icon="fas fa-plane-departure">Ticketsuche</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180' : collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #3b3d3d;
  --sidebar-item-hover: #030303;
  --sidebar-item-active: #0a0a0a;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: #3b3d3d;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  opacity: 90%;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: white;

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
