<template>
  <div class="app-layout">
    <Navbar />
    <div class="main-content">
      <Sidebar v-if="isAuthenticated" />
      <div class="content" :class="{ 'with-sidebar': isAuthenticated }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated
</script>

<script>
export default {
  name: 'AppLayout'
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  display: flex;
  min-height: calc(100vh - 80px);
}

.content {
  flex: 1;
  padding: 0;
  transition: margin-left 0.3s ease;
}

.content.with-sidebar {
  margin-left: 250px;
}

@media (max-width: 768px) {
  .content.with-sidebar {
    margin-left: 0;
  }
}
</style>