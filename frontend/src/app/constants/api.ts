// src/app/constants/api.ts
const API_ENDPOINTS = {
    GET_QUIZZES: '/quizzes',
    CREATE_QUIZ: '/quizzes/create',
    UPDATE_QUIZ: (id: string) => `/quizzes/${id}`,
    DELETE_QUIZ: (id: string) => `/quizzes/${id}`,
  };
  
  export default API_ENDPOINTS;