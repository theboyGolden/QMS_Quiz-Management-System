<template>
  <ModernAppLayout>
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
  </ModernAppLayout>
</template>

<script setup>
import { ref } from 'vue'
import ModernAppLayout from '@/components/layout/ModernAppLayout.vue'
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
  max-width: 1200px;
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

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.empty-state h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.5rem;
}

.empty-state p {
  font-size: 1rem;
}
</style>
