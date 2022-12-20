import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 5),
  ];
  getIngridient() {
    return this.ingredients.slice();
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.getIngridient());
  }
  addIngredients(ingres: Ingredient[]) {
    this.ingredients.push(...ingres);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  constructor() {}
}
