// User types
export interface User {
  id: string;
  name: string;
  email: string;
  preferences?: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  allergies: string[];
  cuisinePreferences: string[];
  calorieTarget?: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

// Recipe types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  nutrition: NutritionalInfo;
  tags: string[];
  cuisine: string;
  dietaryRestrictions: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
  rating?: number;
  reviews?: Review[];
  createdAt: string;
  updatedAt: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitamins?: Record<string, number>;
}

export interface Review {
  userId: string;
  userName?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GenerateRecipeRequest {
  ingredients: string[];
  excludeIngredients?: string[];
  dietaryRestrictions?: string[];
  cuisine?: string;
  mealType?: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  difficulty?: 'easy' | 'medium' | 'hard';
  maxPrepTime?: number;
  servings?: number;
}

// Meal plan types
export interface MealPlan {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  meals: Meal[];
  nutritionSummary: {
    caloriesPerDay: number;
    proteinPerDay: number;
    carbsPerDay: number;
    fatPerDay: number;
  };
  shoppingList: ShoppingListItem[];
  createdAt: string;
  updatedAt: string;
}

export interface Meal {
  day: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recipeId: string;
  recipeName?: string;
  servings: number;
}

export interface ShoppingListItem {
  ingredient: string;
  amount: number;
  unit: string;
  checked?: boolean;
}

// Nutrition analysis types
export interface NutritionAnalysisRequest {
  ingredients: string[];
  servings?: number;
}

export interface NutritionAnalysisResponse {
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  totalNutrients: Record<string, {
    label: string;
    quantity: number;
    unit: string;
  }>;
  totalDaily: Record<string, {
    label: string;
    quantity: number;
    unit: string;
  }>;
}