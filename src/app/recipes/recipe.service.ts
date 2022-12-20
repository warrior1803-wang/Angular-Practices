import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'PB & J Smoothie',
      'I made this smoothie with peanut butter but it can be made with powdered peanut butter for a lower calorie smoothie.',
      'https://www.allrecipes.com/thmb/ZKDQy1expTsR91KDqb_VabqOwEM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7923552-121a73a8c4984fcb84ebd89979761ae3.jpg',
      [
        new Ingredient('strawberries', 4),
        new Ingredient('milk', 1),
        new Ingredient(' peanut butter', 1),
      ]
    ),
    new Recipe(
      'Saucy Sriracha Franks',
      'A little heat, a little sweet, and a little Asian. Serve with toothpicks, and you have a one-bite appetizer that is so very simple to make.',
      'https://www.allrecipes.com/thmb/Vtd4L3QpptCLVdyn01HPoZZFJww=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6146139-89dca4522f1b4fc0a69577c3f34b6f1b.jpg',
      [
        new Ingredient('ketchup', 1),
        new Ingredient('soy sauce', 1 / 4),
        new Ingredient('brown sugar', 1),
      ]
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {}
  addIngreToSHL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
