<template>
  <ModernAppLayout>
    <div class="quiz-view">
      <div v-if="loading" class="loading">
        <p>Loading quiz...</p>
      </div>
      
      <div v-else-if="quiz" class="quiz-container">
        <div class="quiz-header">
          <h1>{{ quiz.title }}</h1>
          <p>{{ quiz.description }}</p>
          <div class="quiz-info">
            <span class="time-limit">Time Limit: {{ quiz.timeLimit }} minutes</span>
            <span class="attempts">Max Attempts: {{ quiz.maxAttempts }}</span>
          </div>
        </div>
        
        <div class="quiz-actions">
          <button @click="startQuiz" class="btn btn-primary" :disabled="!canStartQuiz">
            Start Quiz
          </button>
        </div>
      </div>
      
      <div v-else class="error-state">
        <h3>Quiz not found</h3>
        <p>The quiz you're looking for doesn't exist or you don't have access to it.</p>
        <router-link to="/courses" class="btn btn-primary">
          Back to Courses
        </router-link>
      </div>
    </div>
  </ModernAppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ModernAppLayout from '@/components/layout/ModernAppLayout.vue'

const route = useRoute()
const loading = ref(true)
const quiz = ref(null)

const canStartQuiz = computed(() => {
  if (!quiz.value) return false
  const now = new Date()
  const availableFrom = new Date(quiz.value.availableFrom)
  const availableUntil = new Date(quiz.value.availableUntil)
  return now >= availableFrom && now <= availableUntil
})

const startQuiz = () => {
  // Navigate to quiz taking interface
  console.log('Starting quiz:', quiz.value?.id)
}

onMounted(() => {
  // Mock API call to fetch quiz
  const quizId = route.params.id
  setTimeout(() => {
    quiz.value = {
      id: Number(quizId),
      moduleId: 1,
      title: 'Sample Quiz',
      description: 'This is a sample quiz to test your knowledge.',
      timeLimit: 30,
      maxAttempts: 3,
      availableFrom: new Date().toISOString(),
      availableUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    }
    loading.value = false
  }, 1000)
})
</script>

<script>
export default {
  name: 'QuizView'
}
</script>

<style scoped>
.quiz-view {
  max-width: 800px;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.quiz-container {
  max-width: 800px;
  margin: 0 auto;
}

.quiz-header {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 2rem;
}

.quiz-header h1 {
  margin: 0 0 1rem 0;
  color: #1f2937;
  font-size: 2rem;
  font-weight: bold;
}

.quiz-header p {
  margin: 0 0 1.5rem 0;
  color: #6b7280;
  line-height: 1.5;
  font-size: 1.1rem;
}

.quiz-info {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.quiz-actions {
  text-align: center;
}

.error-state {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.error-state h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.5rem;
}

.error-state p {
  font-size: 1rem;
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

.btn-primary {
  background-color: #ff6b35;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #e55a2b;
}

.btn:disabled {
  background-color: #d1d5db;
  cursor: not-allowed;
}
</style>
