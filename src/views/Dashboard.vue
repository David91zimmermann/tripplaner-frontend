<template>
  <h1>The Sidebar is {{ collapsed ? 'closed' : 'open' }}</h1>
  <button @click="toggleSidebar">Toggle Sidebar</button>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup () {
    return { collapsed, toggleSidebar }
  },
  name: 'Dashboard'
}
</script>

<style scoped>

</style>
