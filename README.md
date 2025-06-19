# Recipe Genius AI

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Recipe Genius AI is an intelligent web application designed to help home cooks, nutritionists, meal planners, and food bloggers create delicious recipes based on available ingredients and dietary constraints. The platform leverages artificial intelligence to analyze ingredients, provide dietary customization options, calculate nutritional information, and assist with meal planning.

## 🌟 Features

- **AI-Powered Recipe Generation** - Create customized recipes based on ingredients you have available
- **Dietary Customization** - Support for various dietary restrictions (vegan, vegetarian, gluten-free, etc.)
- **Nutritional Analysis** - Detailed nutritional breakdown for every recipe
- **Meal Planning** - Create weekly meal plans with shopping lists
- **Recipe Management** - Save, edit, and share your favorite recipes

## 🛠️ Tech Stack

### Frontend
- React.js with TypeScript
- Chakra UI for responsive component styling
- React Context API with hooks for state management
- Axios for API requests
- React Router for navigation

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- OpenAI API for recipe generation
- Edamam Nutrition Analysis API integration
- JWT for authentication

### DevOps
- GitHub Actions for CI/CD
- Netlify for frontend hosting
- Render for backend hosting
- MongoDB Atlas for database hosting

## 📋 Project Status

This project is currently in active development (Phase 1). We are working on the following milestones:

- [x] Project setup and repository creation
- [ ] Frontend UI implementation
- [ ] Backend API development
- [ ] AI integration
- [ ] Nutritional API integration
- [ ] User authentication
- [ ] Database schema implementation
- [ ] Deployment pipeline

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB (local or Atlas connection)
- OpenAI API key
- Edamam API credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dxaginfo/recipe-genius-ai.git
cd recipe-genius-ai
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# In the backend directory, create a .env file
touch .env

# Add the following variables to the .env file
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
EDAMAM_APP_ID=your_edamam_app_id
EDAMAM_APP_KEY=your_edamam_app_key
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# In a new terminal, start frontend server
cd frontend
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## 📊 Features in Detail

### Ingredient Analysis
- Parse and recognize common ingredients
- Suggest substitutes for unavailable ingredients
- Provide seasonal ingredient recommendations
- Offer ingredient pairing suggestions

### Dietary Customization
- Accommodate common dietary restrictions and preferences
- Filter out allergens automatically
- Adapt recipes to different cultural cuisines
- Balance macro-nutrients according to user preferences

### Nutritional Calculation
- Calculate calories and macro-nutrients per serving
- Estimate vitamin and mineral content
- Provide portion size recommendations
- Generate health scores for recipes

### Meal Planning
- Create weekly meal plans based on preferences
- Generate shopping lists automatically
- Provide meal prep instructions
- Suggest recipes that utilize leftover ingredients

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📬 Contact

If you have any questions or feedback, please reach out to us through GitHub issues.

---

Made with ❤️ by the Recipe Genius Team