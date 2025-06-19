import { Router } from 'express';
import authRoutes from './auth.routes';
import recipeRoutes from './recipe.routes';
import ingredientRoutes from './ingredient.routes';
import nutritionRoutes from './nutrition.routes';
import mealPlanRoutes from './mealPlan.routes';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.use('/auth', authRoutes);
router.use('/recipes', authenticate, recipeRoutes);
router.use('/ingredients', authenticate, ingredientRoutes);
router.use('/nutrition', authenticate, nutritionRoutes);
router.use('/meal-plans', authenticate, mealPlanRoutes);

export default router;