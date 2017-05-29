import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  // better in ngOnInit than in constructor (e.g. complex server-transactions, ..)
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
