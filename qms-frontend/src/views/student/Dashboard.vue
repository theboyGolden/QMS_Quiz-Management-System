<template>
  <AppLayout>
    <div class="dashboard">
      <h1>Welcome, {{ authStore.user?.name }}</h1>
      <div class="courses-grid">
        <CourseCard 
          v-for="course in courses" 
          :key="course.id" 
          :course="course" 
        />
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import AppLayout from '@/components/layout/AppLayout.vue'
import CourseCard from '@/components/course/CourseCard.vue'

const authStore = useAuthStore()

// Mock data - replace with API call
const courses = ref([
  {
    id: 1,
    title: 'Introduction to Vue.js',
    description: 'Learn the fundamentals of Vue.js',
    isPublished: true,
    modules: []
  }
])
</script>

<script>
export default {
  name: 'StudentDashboard'
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
}

.dashboard h1 {
  margin: 0 0 2rem 0;
  color: #2c3e50;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>