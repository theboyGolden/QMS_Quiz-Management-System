<template>
  <div class="landing-page">
    <Navbar />
    <div class="main-content">
      <div class="login-section">
        <LoginForm />
      </div>
      <div class="image-section">
        <div class="student-image">
          <img src="@/assets/student-photo.jpg" alt="Student" class="student-photo">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
</script>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 80px);
}

.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
}

.student-image {
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.student-photo {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .login-section,
  .image-section {
    padding: 1rem;
  }
  
  .student-photo {
    max-width: 300px;
  }
}
</style>
