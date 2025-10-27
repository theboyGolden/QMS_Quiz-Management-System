<template>
  <ModernAppLayout>
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
  </ModernAppLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import ModernAppLayout from '@/components/layout/ModernAppLayout.vue'

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
  max-width: 800px;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 2rem;
  font-weight: bold;
}

.page-header p {
  margin: 0;
  color: #6b7280;
  font-size: 1.1rem;
}

.profile-content {
  max-width: 600px;
}

.profile-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff6b35;
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
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
}

.user-info p {
  margin: 0 0 0.5rem 0;
  color: #6b7280;
  font-size: 1rem;
}

.role-badge {
  background-color: #fef3c7;
  color: #d97706;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
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
  border-bottom: 1px solid #f3f4f6;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item label {
  font-weight: 500;
  color: #1f2937;
}

.detail-item span {
  color: #6b7280;
}

.profile-actions {
  text-align: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.btn-danger:hover {
  background-color: #dc2626;
}
</style>
