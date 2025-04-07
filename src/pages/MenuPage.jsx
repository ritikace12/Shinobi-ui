import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const MenuPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Ramen',
    ingredients: [''],
    isSpicy: false,
    isVegetarian: false
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      console.log('Fetching recipes from:', `${config.API_URL}/recipes`);
      const response = await axios.get(`${config.API_URL}/recipes`);
      setRecipes(Array.isArray(response.data) ? response.data : []);
      setError(null);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to load recipes. Please try again later.');
      setRecipes([]);
    }
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      console.log('Adding recipe to:', `${config.API_URL}/recipes`);
      await axios.post(`${config.API_URL}/recipes`, newRecipe);
      setShowAddForm(false);
      setNewRecipe({
        name: '',
        description: '',
        price: '',
        category: 'Ramen',
        ingredients: [''],
        isSpicy: false,
        isVegetarian: false
      });
      fetchRecipes();
    } catch (error) {
      console.error('Error adding recipe:', error);
      setError('Failed to add recipe. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewRecipe(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...newRecipe.ingredients];
    newIngredients[index] = value;
    setNewRecipe(prev => ({
      ...prev,
      ingredients: newIngredients
    }));
  };

  const addIngredientField = () => {
    setNewRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }));
  };

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fadeIn">
            Ichiraku <span className="text-orange-400">Ramen</span> Menu
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 animate-fadeIn delay-200">
            The best ramen in the Hidden Leaf Village
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            Add New Recipe
          </button>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-500/50 text-red-200 px-4 py-3 rounded relative mb-6 sm:mb-8 backdrop-blur-sm" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {showAddForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-8 max-w-2xl w-full shadow-2xl transform transition-all duration-300 border border-orange-500/20 my-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Add New Recipe</h2>
              <form onSubmit={handleAddRecipe} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newRecipe.name}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2">Description</label>
                  <textarea
                    name="description"
                    value={newRecipe.description}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2">Price (¥)</label>
                  <input
                    type="number"
                    name="price"
                    value={newRecipe.price}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2">Category</label>
                  <select
                    name="category"
                    value={newRecipe.category}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-white"
                  >
                    <option value="Ramen">Ramen</option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Drink">Drink</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2">Ingredients</label>
                  {newRecipe.ingredients.map((ingredient, index) => (
                    <input
                      key={index}
                      type="text"
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-white"
                      placeholder={`Ingredient ${index + 1}`}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={addIngredientField}
                    className="text-orange-400 hover:text-orange-300 transition-colors duration-300"
                  >
                    + Add Ingredient
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="flex items-center text-gray-300">
                    <input
                      type="checkbox"
                      name="isSpicy"
                      checked={newRecipe.isSpicy}
                      onChange={handleInputChange}
                      className="mr-2 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 rounded bg-gray-700 transition-all duration-300"
                    />
                    Spicy
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input
                      type="checkbox"
                      name="isVegetarian"
                      checked={newRecipe.isVegetarian}
                      onChange={handleInputChange}
                      className="mr-2 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 rounded bg-gray-700 transition-all duration-300"
                    />
                    Vegetarian
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                  >
                    Add Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {recipes && recipes.length > 0 ? (
            recipes.map((item) => (
              <div 
                key={item._id}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-r from-orange-500/20 to-red-500/20">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-orange-400">
                      <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,165,0,0.3)]">🍜</span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {item.isSpicy && (
                      <span className="bg-red-900/50 text-red-200 px-2 py-1 rounded-full text-xs sm:text-sm border border-red-500/50">Spicy</span>
                    )}
                    {item.isVegetarian && (
                      <span className="bg-green-900/50 text-green-200 px-2 py-1 rounded-full text-xs sm:text-sm border border-green-500/50">Vegetarian</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <span className="text-xl sm:text-2xl font-bold text-orange-400">¥{item.price}</span>
                    <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 sm:py-12">
              <p className="text-gray-400 text-base sm:text-lg">No recipes available yet. Be the first to add one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage; 