import React from "react";

import { AllRecipes } from "../Features/AllRecipes/AllRecipes.js";
import { SearchTerm } from "../Features/searchTerm/SearchTerm.js";
import { FavoriteRecipes } from "../Features/FavoriteRecipe/FavoriteRecipe.js";

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
}
