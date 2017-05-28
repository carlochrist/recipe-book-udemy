import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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
selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
