<template>
  <div class="signup-page">
    <!-- Main Container -->
    <div class="signup-container">
      <!-- Header Section -->
      <div class="header-section">
        <button class="back-button" @click="goBack">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h1 class="signup-title">Create an account</h1>
        <p class="login-prompt">
          Already have an account? 
          <router-link to="/login" class="login-link">Log in</router-link>
        </p>
      </div>

      <!-- Form Section -->
      <div class="form-section">
        <form @submit.prevent="handleSignup" class="signup-form">
          <!-- Name Fields -->
          <div class="name-fields">
            <div class="input-group">
              <label for="firstName">First name</label>
              <input 
                id="firstName"
                v-model="firstName" 
                type="text" 
                required
                class="form-input"
              >
            </div>
            <div class="input-group">
              <label for="lastName">Last name</label>
              <input 
                id="lastName"
                v-model="lastName" 
                type="text" 
                required
                class="form-input"
              >
            </div>
          </div>

          <!-- Email Field -->
          <div class="input-group">
            <label for="email">Email address</label>
            <input 
              id="email"
              v-model="email" 
              type="email" 
              required
              class="form-input"
            >
          </div>

          <!-- Password Fields -->
          <div class="password-fields">
            <div class="input-group">
              <label for="password">Password</label>
              <input 
                id="password"
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                required
                class="form-input"
              >
            </div>
            <div class="input-group">
              <label for="confirmPassword">Confirm your password</label>
              <input 
                id="confirmPassword"
                v-model="confirmPassword" 
                :type="showPassword ? 'text' : 'password'" 
                required
                class="form-input"
              >
            </div>
          </div>

          <!-- Password Requirements and Toggle -->
          <div class="password-options">
            <label class="checkbox-label">
              <input 
                v-model="showPassword" 
                type="checkbox" 
                class="checkbox-input"
              >
              <span class="checkbox-custom"></span>
              Show password
            </label>
            <p class="password-requirements">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          <!-- Action Elements -->
          <div class="form-actions">
            <router-link to="/login" class="login-instead-link">log in instead</router-link>
            <button type="submit" class="signup-button">Create an account</button>
          </div>
        </form>
      </div>

      <!-- Mortarboard Illustration -->
      <div class="illustration-section">
        <div class="mortarboard-illustration">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Mortarboard (graduation hat) -->
            <!-- Hat base -->
            <rect x="40" y="80" width="120" height="8" fill="black" rx="4"/>
            
            <!-- Hat top -->
            <path d="M40 80 L100 40 L160 80 Z" fill="black"/>
            
            <!-- Tassel cord -->
            <line x1="160" y1="84" x2="180" y2="100" stroke="black" stroke-width="2"/>
            
            <!-- Tassel -->
            <rect x="175" y="100" width="10" height="20" fill="black" rx="2"/>
            <line x1="180" y1="100" x2="180" y2="120" stroke="black" stroke-width="1"/>
            <line x1="177" y1="105" x2="183" y2="105" stroke="black" stroke-width="1"/>
            <line x1="177" y1="110" x2="183" y2="110" stroke="black" stroke-width="1"/>
            <line x1="177" y1="115" x2="183" y2="115" stroke="black" stroke-width="1"/>
            
            <!-- Decorative elements around the hat -->
            <!-- Books -->
            <rect x="30" y="120" width="15" height="20" fill="#f0f0f0" stroke="black" stroke-width="1"/>
            <rect x="32" y="122" width="11" height="2" fill="black"/>
            <rect x="32" y="125" width="11" height="2" fill="black"/>
            <rect x="32" y="128" width="11" height="2" fill="black"/>
            
            <rect x="50" y="125" width="15" height="20" fill="#f0f0f0" stroke="black" stroke-width="1"/>
            <rect x="52" y="127" width="11" height="2" fill="black"/>
            <rect x="52" y="130" width="11" height="2" fill="black"/>
            <rect x="52" y="133" width="11" height="2" fill="black"/>
            
            <!-- Scroll -->
            <rect x="150" y="130" width="20" height="15" fill="#f8f8f8" stroke="black" stroke-width="1" rx="2"/>
            <line x1="155" y1="135" x2="165" y2="135" stroke="black" stroke-width="1"/>
            <line x1="155" y1="138" x2="165" y2="138" stroke="black" stroke-width="1"/>
            <line x1="155" y1="141" x2="160" y2="141" stroke="black" stroke-width="1"/>
            
            <!-- Academic stars -->
            <path d="M80 50 L82 56 L88 56 L83 60 L85 66 L80 62 L75 66 L77 60 L72 56 L78 56 Z" fill="black"/>
            <path d="M120 60 L121 64 L125 64 L122 66 L123 70 L120 68 L117 70 L118 66 L115 64 L119 64 Z" fill="black"/>
            <path d="M60 110 L61 114 L65 114 L62 116 L63 120 L60 118 L57 120 L58 116 L55 114 L59 114 Z" fill="black"/>
            
            <!-- Diploma -->
            <rect x="130" y="100" width="25" height="18" fill="#f8f8f8" stroke="black" stroke-width="1" rx="2"/>
            <line x1="135" y1="105" x2="150" y2="105" stroke="black" stroke-width="1"/>
            <line x1="135" y1="108" x2="150" y2="108" stroke="black" stroke-width="1"/>
            <line x1="135" y1="111" x2="145" y2="111" stroke="black" stroke-width="1"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const handleSignup = () => {
  // Validate passwords match
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  
  // Mock signup - replace with actual API call
  authStore.setUser({
    id: 1,
    name: `${firstName.value} ${lastName.value}`,
    email: email.value,
    role: 'student'
  })
  router.push('/dashboard')
}

const goBack = () => {
  router.go(-1)
}
</script>

<script>
export default {
  name: 'SignupPage'
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Main Container */
.signup-container {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  flex: 1;
}

/* Header Section */
.header-section {
  grid-column: 1;
}

.back-button {
  width: 48px;
  height: 48px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.2s ease;
}

.back-button:hover {
  background-color: #d0d0d0;
  color: #333;
}

.signup-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.login-prompt {
  font-size: 1rem;
  color: #666;
  margin: 0 0 2rem 0;
}

.login-link {
  color: #333;
  text-decoration: underline;
  font-weight: 500;
}

.login-link:hover {
  color: #007AFF;
}

/* Form Section */
.form-section {
  grid-column: 1;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Name Fields */
.name-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Password Fields */
.password-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Input Groups */
.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #007AFF;
}

/* Password Options */
.password-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #333;
  border-radius: 3px;
  margin-right: 0.75rem;
  position: relative;
  transition: background-color 0.2s ease;
}

.checkbox-input:checked + .checkbox-custom {
  background-color: #333;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.password-requirements {
  font-size: 0.8rem;
  color: #999;
  margin: 0;
  line-height: 1.4;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.login-instead-link {
  color: #333;
  text-decoration: underline;
  font-size: 0.9rem;
}

.login-instead-link:hover {
  color: #007AFF;
}

.signup-button {
  padding: 0.875rem 2rem;
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.signup-button:hover {
  background-color: #e8e8e8;
}

/* Illustration Section */
.illustration-section {
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mortarboard-illustration {
  width: 100%;
  max-width: 300px;
  opacity: 0.8;
}

/* Page Footer */
.page-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.language-selector {
  background: none;
  border: none;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
}

.footer-right {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .signup-container {
    grid-template-columns: 1fr;
    margin: 1rem;
    padding: 1.5rem;
    gap: 2rem;
  }
  
  .header-section,
  .form-section,
  .illustration-section {
    grid-column: 1;
  }
  
  .name-fields,
  .password-fields {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .signup-title {
    font-size: 2rem;
  }
  
  .page-footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .signup-container {
    margin: 0.5rem;
    padding: 1rem;
  }
  
  .signup-title {
    font-size: 1.75rem;
  }
}
</style>
