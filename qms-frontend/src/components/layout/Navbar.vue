<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/dashboard" class="brand-link">
        QMS
      </router-link>
    </div>
    <div class="navbar-menu">
      <div v-if="authStore.isAuthenticated" class="navbar-end">
        <span class="user-info">
          Welcome, {{ authStore.user?.name }}
        </span>
        <button @click="handleLogout" class="btn btn-outline">
          Logout
        </button>
      </div>
      <div v-else class="navbar-end">
        <router-link to="/login" class="btn btn-primary">
          Login
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.brand-link {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.brand-link:hover {
  color: #42b883;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-end {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  color: #ecf0f1;
  font-size: 0.9rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-primary:hover {
  background-color: #369870;
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.btn-outline:hover {
  background-color: white;
  color: #2c3e50;
}
</style>
