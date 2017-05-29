import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    // push multiple elements into array
    Array.prototype.push.apply(this.ingredients, ingredients);
  }
}
