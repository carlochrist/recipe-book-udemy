import {Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

export const RECIPE_ROUTES: Routes = [
  // load this path, if no recipe is selected!
  { path: '', component: RecipeStartComponent },
  { path: 'neu', component: RecipeEditComponent },
  // id has to be on last place --> variable element of path!
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/bearbeiten', component: RecipeEditComponent }
];
