import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService) { }

  ngOnInit() {
    // interested in new selected recipe
    this.recipeService.recipeSelected.subscribe(
      // set selectedRecipe to new selected recipe
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  onAddToList() {
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }
}
