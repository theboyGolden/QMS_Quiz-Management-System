<template>
  <ModernAppLayout>
    <div class="quiz-list">
      <div class="page-header">
        <h1>Available Quizzes</h1>
        <p>Take quizzes to test your knowledge</p>
      </div>
      
      <div class="quizzes-grid">
        <div v-for="quiz in quizzes" :key="quiz.id" class="quiz-card">
          <h3>{{ quiz.title }}</h3>
          <p>{{ quiz.description }}</p>
          <div class="quiz-info">
            <span class="time-limit">⏱️ {{ quiz.timeLimit }} min</span>
            <span class="attempts">🔄 {{ quiz.maxAttempts }} attempts</span>
          </div>
          <div class="quiz-actions">
            <router-link :to="`/quiz/${quiz.id}`" class="btn btn-primary">
              Take Quiz
            </router-link>
          </div>
        </div>
      </div>
      
      <div v-if="quizzes.length === 0" class="empty-state">
        <h3>No quizzes available</h3>
        <p>There are no quizzes available at the moment.</p>
      </div>
    </div>
  </ModernAppLayout>
</template>

<script setup>
import { ref } from 'vue'
import ModernAppLayout from '@/components/layout/ModernAppLayout.vue'

// Mock data - replace with API call
const quizzes = ref([
  {
    id: 1,
    moduleId: 1,
    title: 'Vue.js Fundamentals',
    description: 'Test your knowledge of Vue.js basics',
    timeLimit: 30,
    maxAttempts: 3,
    availableFrom: new Date().toISOString(),
    availableUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    moduleId: 2,
    title: 'JavaScript ES6+',
    description: 'Advanced JavaScript concepts and features',
    timeLimit: 45,
    maxAttempts: 2,
    availableFrom: new Date().toISOString(),
    availableUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
  }
])
</script>

<script>
export default {
  name: 'QuizList'
}
</script>

<style scoped>
.quiz-list {
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

.quizzes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.quiz-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
}

.quiz-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.quiz-card h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
}

.quiz-card p {
  margin: 0 0 1rem 0;
  color: #6b7280;
  line-height: 1.5;
}

.quiz-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.quiz-actions {
  display: flex;
  gap: 0.5rem;
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

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #ff6b35;
  color: white;
}

.btn-primary:hover {
  background-color: #e55a2b;
}
</style>
