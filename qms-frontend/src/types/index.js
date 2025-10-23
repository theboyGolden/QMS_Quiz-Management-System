// Type definitions for the QMS application
// Since we're using JavaScript, these are just documentation

// User object structure:
// {
//   id: number,
//   name: string,
//   email: string,
//   role: 'student' | 'lecturer'
// }

// Course object structure:
// {
//   id: number,
//   title: string,
//   description: string,
//   isPublished: boolean,
//   modules: Module[]
// }

// Module object structure:
// {
//   id: number,
//   courseId: number,
//   title: string,
//   order: number
// }

// Quiz object structure:
// {
//   id: number,
//   moduleId: number,
//   title: string,
//   description: string,
//   timeLimit: number,
//   maxAttempts: number,
//   availableFrom: string,
//   availableUntil: string
// }

// Question object structure:
// {
//   id: number,
//   quizId: number,
//   type: 'multiple_choice' | 'true_false' | 'short_answer',
//   questionText: string,
//   options?: string[],
//   correctAnswer: string | string[],
//   points: number
// }

export default {}
