import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
      new Recipe(
        'Schnitzel',
        'Yummi',
        'http://www.duden.de/_media_/full/S/Schnitzel-201020474666.jpg',
        [
          new Ingredient('Pommes', 10),
          new Ingredient('Schnitzel', 1),
        ]
      ),
      new Recipe(
        'Salat',
        'Lecker!',
        'https://d1d8i24om29pt.cloudfront.net/static/desktop/products/salat-korfu.png',
        [
          new Ingredient('Feldsalat', 1),
          new Ingredient('Bohnen', 10),
          new Ingredient('Fetastückchen', 8),
          new Ingredient('Möhrenstreifen', 15),
          new Ingredient('Maisstückchen', 15),
        ]
      )
    ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }
}
