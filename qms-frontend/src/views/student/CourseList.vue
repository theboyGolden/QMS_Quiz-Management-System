<template>
  <AppLayout>
    <div class="course-list">
      <div class="page-header">
        <h1>My Courses</h1>
        <p>Browse and access your enrolled courses</p>
      </div>
      
      <div class="courses-grid">
        <CourseCard 
          v-for="course in courses" 
          :key="course.id" 
          :course="course" 
        />
      </div>
      
      <div v-if="courses.length === 0" class="empty-state">
        <h3>No courses available</h3>
        <p>You haven't been enrolled in any courses yet.</p>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import CourseCard from '@/components/course/CourseCard.vue'

// Mock data - replace with API call
const courses = ref([
  {
    id: 1,
    title: 'Introduction to Vue.js',
    description: 'Learn the fundamentals of Vue.js framework',
    isPublished: true,
    modules: []
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into modern JavaScript features',
    isPublished: true,
    modules: []
  },
  {
    id: 3,
    title: 'Web Development Best Practices',
    description: 'Learn industry standards and best practices',
    isPublished: true,
    modules: []
  }
])
</script>

<script>
export default {
  name: 'CourseList'
}
</script>

<style scoped>
.course-list {
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

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.empty-state h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}
</style>
