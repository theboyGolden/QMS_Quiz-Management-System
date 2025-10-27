<template>
  <div class="login-page">
    <!-- Login Form -->
    <div class="login-container">
      <h1 class="login-title">Log in</h1>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="email">Email address or user name</label>
          <input 
            id="email"
            v-model="email" 
            type="email" 
            required
            class="form-input"
          >
        </div>

        <div class="input-group">
          <div class="password-label-wrapper">
            <label for="password">Password</label>
            <button 
              type="button" 
              class="password-toggle"
              @click="togglePassword"
            >
              <svg v-if="showPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="password-toggle-text">{{ showPassword ? 'Hide' : 'Show' }}</span>
            </button>
          </div>
          <input 
            id="password"
            v-model="password" 
            :type="showPassword ? 'text' : 'password'" 
            required
            class="form-input"
          >
        </div>

        <div class="remember-me">
          <label class="checkbox-label">
            <input 
              v-model="rememberMe" 
              type="checkbox" 
              class="checkbox-input"
            >
            <span class="checkbox-custom"></span>
            Remember me
          </label>
        </div>

        <p class="legal-text">
          By continuing, you agree to the 
          <a href="#" class="legal-link">Terms of use</a> 
          and 
          <a href="#" class="legal-link">Privacy Policy</a>.
        </p>

        <button type="submit" class="login-button">Log in</button>

        <div class="action-links">
          <a href="#" class="action-link">Forgot your password?</a>
          <p class="signup-text">
            Don't have an account? 
            <router-link to="/signup" class="action-link">Sign up</router-link>
          </p>
        </div>
      </form>

      <!-- Social Login -->
      <div class="social-login">
        <div class="separator">
          <span>Or continue with</span>
        </div>
        
        <div class="social-buttons">
          <button class="social-button facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          
          <button class="social-button apple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </button>
          
          <button class="social-button google">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          
          <button class="social-button twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = () => {
  // Mock login - replace with actual API call
  authStore.setUser({
    id: 1,
    name: 'Test User',
    email: email.value,
    role: 'student'
  })
  router.push('/dashboard')
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Login Container */
.login-container {
  max-width: 520px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

.login-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 2rem 0;
  text-align: center;
}

/* Form Styles */
.login-form {
  margin-bottom: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #007AFF;
}

.password-label-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.password-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  font-size: 0.8rem;
  padding: 0;
}

.password-toggle:hover {
  color: #333;
}

.password-toggle-text {
  font-size: 0.8rem;
}

/* Remember Me */
.remember-me {
  margin-bottom: 1.5rem;
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

/* Legal Text */
.legal-text {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  text-align: center;
}

.legal-link {
  color: #333;
  text-decoration: underline;
}

.legal-link:hover {
  color: #007AFF;
}

/* Login Button */
.login-button {
  width: 100%;
  padding: 0.875rem;
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 1.5rem;
}

.login-button:hover {
  background-color: #e8e8e8;
}

/* Action Links */
.action-links {
  text-align: center;
}

.action-link {
  color: #333;
  text-decoration: underline;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1rem;
}

.action-link:hover {
  color: #007AFF;
}

.signup-text {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.signup-text .action-link {
  display: inline;
  margin: 0;
}

/* Social Login */
.social-login {
  margin-top: 2rem;
}

.separator {
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.separator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e0e0e0;
}

.separator span {
  background: white;
  padding: 0 1rem;
  color: #666;
  font-size: 0.9rem;
  position: relative;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-button {
  width: 48px;
  height: 48px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.social-button:hover {
  border-color: #ccc;
  transform: translateY(-1px);
}

.social-button.facebook {
  color: #1877F2;
}

.social-button.apple {
  color: #000;
}

.social-button.google {
  color: #4285F4;
}

.social-button.twitter {
  color: #1DA1F2;
}

/* Responsive */
@media (max-width: 480px) {
  .login-container {
    padding: 1.5rem 1rem;
  }
  
  .social-buttons {
    gap: 0.75rem;
  }
  
  .social-button {
    width: 44px;
    height: 44px;
  }
}
</style>
