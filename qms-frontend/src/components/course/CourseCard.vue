<template>
  <div class="course-card">
    <h3>{{ course.title }}</h3>
    <p>{{ course.description }}</p>
    <div class="course-actions">
      <router-link :to="`/courses/${course.id}`" class="btn btn-primary">
        View Course
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

<script>
export default {
  name: 'CourseCard'
}
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.course-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.course-card p {
  margin: 0 0 1rem 0;
  color: #666;
  line-height: 1.5;
}

.course-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-primary:hover {
  background-color: #369870;
}
</style>
