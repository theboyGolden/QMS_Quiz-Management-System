<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link" active-class="active">
            <span class="nav-icon">🏠</span>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/courses" class="nav-link" active-class="active">
            <span class="nav-icon">📚</span>
            Courses
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/quizzes" class="nav-link" active-class="active">
            <span class="nav-icon">📝</span>
            Quizzes
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link" active-class="active">
            <span class="nav-icon">👤</span>
            Profile
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// No additional logic needed for now
</script>

<script>
export default {
  name: 'AppSidebar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #34495e;
  color: white;
  height: calc(100vh - 80px);
  position: fixed;
  left: 0;
  top: 80px;
  overflow-y: auto;
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background-color: #2c3e50;
  color: white;
}

.nav-link.active {
  background-color: #42b883;
  color: white;
  border-left-color: #369870;
}

.nav-icon {
  margin-right: 0.75rem;
  font-size: 1.1rem;
}
</style>
