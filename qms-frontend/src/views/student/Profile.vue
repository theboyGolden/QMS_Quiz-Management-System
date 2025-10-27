<template>
  <AppLayout>
    <div class="profile">
      <div class="page-header">
        <h1>My Profile</h1>
        <p>Manage your account information</p>
      </div>
      
      <div class="profile-content">
        <div class="profile-card">
          <div class="profile-header">
            <div class="avatar">
              {{ userInitials }}
            </div>
            <div class="user-info">
              <h2>{{ authStore.user?.name }}</h2>
              <p>{{ authStore.user?.email }}</p>
              <span class="role-badge">{{ authStore.user?.role }}</span>
            </div>
          </div>
          
          <div class="profile-details">
            <div class="detail-item">
              <label>User ID:</label>
              <span>{{ authStore.user?.id }}</span>
            </div>
            <div class="detail-item">
              <label>Role:</label>
              <span>{{ authStore.user?.role }}</span>
            </div>
            <div class="detail-item">
              <label>Email:</label>
              <span>{{ authStore.user?.email }}</span>
            </div>
          </div>
          
          <div class="profile-actions">
            <button @click="handleLogout" class="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import AppLayout from '@/components/layout/AppLayout.vue'

const router = useRouter()
const authStore = useAuthStore()

const userInitials = computed(() => {
  if (!authStore.user?.name) return 'U'
  return authStore.user.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<script>
export default {
  name: 'UserProfile'
}
</script>

<style scoped>
.profile {
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.page-header p {
  margin: 0;
  color: #666;
}

.profile-content {
  max-width: 600px;
}

.profile-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #42b883;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1.5rem;
}

.user-info h2 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.user-info p {
  margin: 0 0 0.5rem 0;
  color: #666;
}

.role-badge {
  background-color: #e8f5e8;
  color: #42b883;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.profile-details {
  margin-bottom: 2rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f5f5f5;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item label {
  font-weight: 500;
  color: #2c3e50;
}

.detail-item span {
  color: #666;
}

.profile-actions {
  text-align: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background-color: #c0392b;
}
</style>
