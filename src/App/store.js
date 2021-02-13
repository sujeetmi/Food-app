import { createStore, combineReducers } from "redux";
import { favoriteRecipesReducer } from "../Features/FavoriteRecipe/FavoriteRecipeSlice.js";
import { searchTermReducer } from "../Features/searchTerm/SearchTermSlice.js";
import { allRecipesReducer } from "../Features/AllRecipes/AllRecipeSlice.js";

export const store = createStore(
  combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  })
);
