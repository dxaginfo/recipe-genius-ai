import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import GenerateRecipePage from './pages/GenerateRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import MealPlanningPage from './pages/MealPlanningPage';
import NutritionAnalysisPage from './pages/NutritionAnalysisPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Box minH="100vh">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route element={<Layout />}>
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/generate" 
            element={
              <ProtectedRoute>
                <GenerateRecipePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/recipes/:id" 
            element={
              <ProtectedRoute>
                <RecipeDetailPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/saved-recipes" 
            element={
              <ProtectedRoute>
                <SavedRecipesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/meal-planning" 
            element={
              <ProtectedRoute>
                <MealPlanningPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/nutrition" 
            element={
              <ProtectedRoute>
                <NutritionAnalysisPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
};

export default App;