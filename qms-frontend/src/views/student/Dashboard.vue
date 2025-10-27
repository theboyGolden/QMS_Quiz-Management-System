<template>
  <div class="dashboard">
    <!-- Header Bar -->
    <div class="header-bar">
      <div class="header-left">
        <div class="logo">
          <div class="logo-icon">Q</div>
          <span class="logo-text">QMS</span>
        </div>
      </div>
      
      <div class="header-center">
        <div class="search-bar">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input type="text" placeholder="Search" class="search-input">
          <span class="search-shortcut">⌘ F</span>
        </div>
      </div>
      
      <div class="header-right">
        <div class="notification-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="user-info">
          <div class="user-avatar">S</div>
          <span class="user-name">Student</span>
          <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Sidebar -->
      <div class="sidebar">
        <nav class="nav-menu">
          <router-link to="/dashboard" class="nav-item active">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"/>
            </svg>
            <span>Dashboard</span>
          </router-link>
          <router-link to="/courses" class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Courses</span>
          </router-link>
          <router-link to="/quizzes" class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Quizzes</span>
          </router-link>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 10V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Schedule</span>
          </div>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Recordings</span>
          </div>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Discussions</span>
          </div>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Resources</span>
          </div>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 16H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Notes</span>
          </div>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Downloads</span>
          </div>
          <div class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Classes</span>
          </div>
          <router-link to="/profile" class="nav-item">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Settings</span>
          </router-link>
        </nav>
      </div>

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Greeting Section -->
        <div class="greeting-section">
          <h1 class="greeting-title">Hello Student 👋</h1>
          <p class="greeting-subtitle">Let's learn something new today!</p>
        </div>

        <!-- Dashboard Grid -->
        <div class="dashboard-grid">
          <!-- Recent Enrolled Course -->
          <div class="card recent-course-card">
            <h3 class="card-title">Recent enrolled course</h3>
            <div class="course-info">
              <div class="course-icon">📝</div>
              <div class="course-details">
                <h4 class="course-name">Product Design Course</h4>
                <div class="progress-container">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 47%"></div>
                  </div>
                  <span class="progress-text">14/30 class</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Your Resources -->
          <div class="card resources-card">
            <h3 class="card-title">Your Resources</h3>
            <div class="resource-list">
              <div class="resource-item">
                <div class="resource-icon pdf">📄</div>
                <div class="resource-info">
                  <span class="resource-name">Auto-layout.pdf</span>
                  <span class="resource-size">8.5 MB</span>
                </div>
                <button class="resource-action">Cancel</button>
              </div>
              <div class="resource-item">
                <div class="resource-icon png">🖼️</div>
                <div class="resource-info">
                  <span class="resource-name">Design_Tips.png</span>
                  <span class="resource-size">576 KB</span>
                  <p class="resource-description">Let's quickly create some realistic and shiny metal @figma</p>
                </div>
                <button class="resource-action">Download</button>
              </div>
              <div class="resource-item">
                <div class="resource-icon fig">🎨</div>
                <div class="resource-info">
                  <span class="resource-name">Basics_Of_UX.fig</span>
                  <span class="resource-size">2.5 MB</span>
                  <p class="resource-description">An introductory guide to the fundamental principles and practices of User Experience (UX) design.</p>
                </div>
                <button class="resource-action">Download</button>
              </div>
            </div>
            <div class="card-footer">
              <span class="see-more">see more</span>
            </div>
          </div>

          <!-- Calendar Widget -->
          <div class="card calendar-card">
            <div class="calendar-header">
              <h3 class="card-title">June 2024</h3>
              <div class="calendar-nav">
                <button class="nav-btn">‹</button>
                <button class="nav-btn">›</button>
              </div>
            </div>
            <div class="calendar-grid">
              <div class="calendar-weekdays">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>
              <div class="calendar-dates">
                <span class="date weekend">26</span>
                <span class="date">27</span>
                <span class="date">28</span>
                <span class="date">29</span>
                <span class="date">30</span>
                <span class="date">31</span>
                <span class="date weekend">1</span>
                <span class="date">2</span>
                <span class="date">3</span>
                <span class="date">4</span>
                <span class="date">5</span>
                <span class="date">6</span>
                <span class="date weekend">7</span>
                <span class="date">8</span>
                <span class="date">9</span>
                <span class="date current">10</span>
                <span class="date">11</span>
                <span class="date">12</span>
                <span class="date weekend">13</span>
                <span class="date">14</span>
                <span class="date">15</span>
                <span class="date">16</span>
                <span class="date">17</span>
                <span class="date">18</span>
                <span class="date weekend">19</span>
                <span class="date">20</span>
                <span class="date">21</span>
                <span class="date">22</span>
                <span class="date">23</span>
                <span class="date">24</span>
                <span class="date weekend">25</span>
                <span class="date">26</span>
                <span class="date">27</span>
                <span class="date">28</span>
                <span class="date">29</span>
                <span class="date">30</span>
              </div>
            </div>
          </div>

          <!-- Hours Spent Chart -->
          <div class="card chart-card">
            <h3 class="card-title">Hours Spent</h3>
            <div class="chart-legend">
              <div class="legend-item">
                <div class="legend-color study"></div>
                <span>Study</span>
              </div>
              <div class="legend-item">
                <div class="legend-color test"></div>
                <span>Online Test</span>
              </div>
            </div>
            <div class="chart-container">
              <div class="chart-bars">
                <div class="chart-bar">
                  <div class="bar-segment study" style="height: 20%"></div>
                  <div class="bar-segment test" style="height: 30%"></div>
                  <span class="bar-label">Jan</span>
                </div>
                <div class="chart-bar">
                  <div class="bar-segment study" style="height: 40%"></div>
                  <div class="bar-segment test" style="height: 25%"></div>
                  <span class="bar-label">Feb</span>
                </div>
                <div class="chart-bar">
                  <div class="bar-segment study" style="height: 35%"></div>
                  <div class="bar-segment test" style="height: 52%"></div>
                  <span class="bar-label">Mar</span>
                </div>
                <div class="chart-bar">
                  <div class="bar-segment study" style="height: 60%"></div>
                  <div class="bar-segment test" style="height: 20%"></div>
                  <span class="bar-label">Apr</span>
                </div>
                <div class="chart-bar">
                  <div class="bar-segment study" style="height: 45%"></div>
                  <div class="bar-segment test" style="height: 35%"></div>
                  <span class="bar-label">May</span>
                </div>
              </div>
              <div class="chart-y-axis">
                <span>80 Hr</span>
                <span>60 Hr</span>
                <span>40 Hr</span>
                <span>20 Hr</span>
                <span>0 Hr</span>
              </div>
            </div>
          </div>

          <!-- Performance Gauge -->
          <div class="card performance-card">
            <h3 class="card-title">Performance</h3>
            <div class="performance-header">
              <span class="performance-title">Assignment Submission Performance</span>
              <button class="dropdown-btn">Monthly</button>
            </div>
            <div class="gauge-container">
              <div class="gauge">
                <div class="gauge-needle" style="transform: rotate(45deg)"></div>
              </div>
              <div class="gauge-grade">Your Grade: 8.966</div>
            </div>
          </div>

          <!-- To Do List -->
          <div class="card todo-card">
            <h3 class="card-title">To do List</h3>
            <div class="todo-list">
              <div class="todo-item">
                <input type="checkbox" class="todo-checkbox">
                <div class="todo-content">
                  <span class="todo-text">Human Interaction Designs</span>
                  <span class="todo-date">Tuesday, 30 June 2024</span>
                </div>
              </div>
              <div class="todo-item">
                <input type="checkbox" class="todo-checkbox">
                <div class="todo-content">
                  <span class="todo-text">Design system Basics</span>
                  <span class="todo-date">Monday, 24 June 2024</span>
                </div>
              </div>
              <div class="todo-item">
                <input type="checkbox" class="todo-checkbox" checked>
                <div class="todo-content">
                  <span class="todo-text completed">Introduction to UI</span>
                  <span class="todo-date">Friday, 10 June 2024</span>
                </div>
              </div>
              <div class="todo-item">
                <input type="checkbox" class="todo-checkbox" checked>
                <div class="todo-content">
                  <span class="todo-text completed">Basics of Figma</span>
                  <span class="todo-date">Friday, 05 June 2024</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Enrolled Classes -->
          <div class="card classes-card">
            <div class="classes-header">
              <h3 class="card-title">Recent enrolled classes</h3>
              <div class="classes-actions">
                <span class="all-text">All</span>
                <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="classes-list">
              <div class="class-item featured">
                <div class="class-icon">🔄</div>
                <div class="class-info">
                  <h4 class="class-name">User Experience (UX) Design</h4>
                  <div class="class-meta">
                    <span class="class-duration">🕐 5:30hrs</span>
                    <span class="class-lessons">📚 05 Lessons</span>
                    <span class="class-assignments">✅ Assignments</span>
                  </div>
                </div>
              </div>
              <div class="class-item">
                <div class="class-icon">🎨</div>
                <div class="class-info">
                  <h4 class="class-name">Visual Design and Branding</h4>
                  <div class="class-meta">
                    <span class="class-duration">🕐 4:00hrs</span>
                    <span class="class-lessons">📚 03 Lessons</span>
                    <span class="class-assignments">✅ Assignments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming Lesson -->
          <div class="card upcoming-card">
            <h3 class="card-title">Upcoming Lesson</h3>
            <div class="lesson-list">
              <div class="lesson-item">
                <div class="lesson-icon">🎓</div>
                <div class="lesson-info">
                  <h4 class="lesson-name">UX Design Fundamentals</h4>
                  <span class="lesson-time">5:30pm</span>
                </div>
                <button class="join-btn">Join</button>
              </div>
              <div class="lesson-item">
                <div class="lesson-icon">✅</div>
                <div class="lesson-info">
                  <h4 class="lesson-name">Interaction Design</h4>
                  <span class="lesson-time">9:00pm</span>
                </div>
                <button class="join-btn">Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dashboard component setup
</script>

<script>
export default {
  name: 'StudentDashboard'
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header Bar */
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left .logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #ff6b35;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
}

.header-center {
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.search-icon {
  color: #6b7280;
  margin-right: 0.5rem;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
}

.search-shortcut {
  color: #9ca3af;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-icon {
  color: #6b7280;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.user-name {
  font-weight: 500;
  color: #1f2937;
}

.dropdown-arrow {
  color: #6b7280;
}

/* Main Content */
.main-content {
  display: flex;
  min-height: calc(100vh - 80px);
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: white;
  border-right: 1px solid #e5e7eb;
  padding: 1rem 0;
}

.nav-menu {
  display: flex;
  flex-direction: column;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: #6b7280;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.nav-item.active {
  background: #ff6b35;
  color: white;
}

.nav-icon {
  flex-shrink: 0;
}

/* Dashboard Content */
.dashboard-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.greeting-section {
  margin-bottom: 2rem;
}

.greeting-title {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.greeting-subtitle {
  color: #6b7280;
  margin: 0;
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

/* Card Base Styles */
.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

/* Recent Course Card */
.recent-course-card {
  grid-column: span 4;
}

.course-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.course-icon {
  font-size: 2rem;
}

.course-details {
  flex: 1;
}

.course-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #ff6b35;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.9rem;
  color: #6b7280;
  white-space: nowrap;
}

/* Resources Card */
.resources-card {
  grid-column: span 4;
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.resource-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.resource-info {
  flex: 1;
}

.resource-name {
  font-weight: 500;
  color: #1f2937;
  display: block;
  margin-bottom: 0.25rem;
}

.resource-size {
  font-size: 0.9rem;
  color: #6b7280;
}

.resource-description {
  font-size: 0.8rem;
  color: #9ca3af;
  margin: 0.25rem 0 0 0;
  line-height: 1.4;
}

.resource-action {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.resource-action:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.card-footer {
  margin-top: 1rem;
  text-align: center;
}

.see-more {
  color: #ff6b35;
  font-weight: 500;
  cursor: pointer;
}

/* Calendar Card */
.calendar-card {
  grid-column: span 4;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.calendar-nav {
  display: flex;
  gap: 0.5rem;
}

.nav-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.calendar-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.calendar-weekdays span {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #6b7280;
  padding: 0.5rem 0;
}

.calendar-dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
}

.date {
  text-align: center;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.date:hover {
  background: #f3f4f6;
}

.date.weekend {
  color: #ef4444;
}

.date.current {
  background: #ff6b35;
  color: white;
}

/* Chart Card */
.chart-card {
  grid-column: span 4;
}

.chart-legend {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.legend-color.study {
  background: #ff6b35;
}

.legend-color.test {
  background: #fbbf24;
}

.chart-container {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 200px;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 0.75rem;
  flex: 1;
}

.chart-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.bar-segment {
  width: 100%;
  border-radius: 2px 2px 0 0;
  transition: height 0.3s ease;
}

.bar-segment.study {
  background: #ff6b35;
}

.bar-segment.test {
  background: #fbbf24;
}

.bar-label {
  font-size: 0.8rem;
  color: #6b7280;
}

.chart-y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 0.8rem;
  color: #6b7280;
}

/* Performance Card */
.performance-card {
  grid-column: span 4;
}

.performance-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.performance-title {
  font-size: 0.9rem;
  color: #6b7280;
}

.dropdown-btn {
  background: #f3f4f6;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #6b7280;
  cursor: pointer;
}

.gauge-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.gauge {
  width: 120px;
  height: 60px;
  position: relative;
  background: conic-gradient(from 180deg, #e5e7eb 0deg, #e5e7eb 180deg);
  border-radius: 60px 60px 0 0;
  overflow: hidden;
}

.gauge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: conic-gradient(from 180deg, #ff6b35 0deg, #ff6b35 162deg, #e5e7eb 162deg);
  border-radius: 60px 60px 0 0;
}

.gauge-needle {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 50px;
  background: #1f2937;
  transform-origin: bottom center;
  border-radius: 1px;
}

.gauge-needle::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -3px;
  width: 8px;
  height: 8px;
  background: #1f2937;
  border-radius: 50%;
}

.gauge-grade {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
}

/* Todo Card */
.todo-card {
  grid-column: span 4;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #ff6b35;
  cursor: pointer;
}

.todo-content {
  flex: 1;
}

.todo-text {
  font-weight: 500;
  color: #1f2937;
  display: block;
  margin-bottom: 0.25rem;
}

.todo-text.completed {
  text-decoration: line-through;
  color: #9ca3af;
}

.todo-date {
  font-size: 0.8rem;
  color: #6b7280;
}

/* Classes Card */
.classes-card {
  grid-column: span 6;
}

.classes-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.classes-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.all-text {
  font-size: 0.9rem;
  color: #6b7280;
}

.classes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.class-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.class-item:hover {
  border-color: #ff6b35;
}

.class-item.featured {
  border-color: #ff6b35;
  background: #fff7ed;
}

.class-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.class-info {
  flex: 1;
}

.class-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.class-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
}

/* Upcoming Card */
.upcoming-card {
  grid-column: span 6;
}

.lesson-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.lesson-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.lesson-info {
  flex: 1;
}

.lesson-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.lesson-time {
  font-size: 0.9rem;
  color: #6b7280;
}

.join-btn {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.join-btn:hover {
  background: #e55a2b;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(8, 1fr);
  }
  
  .recent-course-card,
  .resources-card,
  .calendar-card,
  .chart-card,
  .performance-card,
  .todo-card {
    grid-column: span 4;
  }
  
  .classes-card,
  .upcoming-card {
    grid-column: span 8;
  }
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    order: 2;
  }
  
  .nav-menu {
    flex-direction: row;
    overflow-x: auto;
    padding: 0 1rem;
  }
  
  .nav-item {
    white-space: nowrap;
    min-width: fit-content;
  }
  
  .dashboard-content {
    order: 1;
    padding: 1rem;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .card {
    grid-column: span 1 !important;
  }
  
  .header-center {
    margin: 0 1rem;
  }
  
  .header-bar {
    padding: 1rem;
  }
}
</style>