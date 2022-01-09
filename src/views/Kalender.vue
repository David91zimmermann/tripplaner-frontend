
<template>
  <div>
    <Navbar>Navbar</Navbar>
  </div>
  <div class="kalender">
    <img :src="require('../assets/OnePiece Error.jpeg')">
  </div>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  setup () {
    return { collapsed, toggleSidebar }
  }
}
</script>

<style scoped>
.kalender {
  background-color: #6d6d6d;

  width: 100%;
  padding: 200px;

  display: flex;
  justify-content: center;
  height: 100vh
}
</style>
