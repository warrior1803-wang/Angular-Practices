import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is a simply song',
      'https://www.eatwell101.com/wp-content/uploads/2019/07/ok-Creamy-Garlic-Butter-Chicken-with-Spinach-and-Bacon-5-800x800.jpg'
    ),
    new Recipe(
      'another test recipe',
      'this is a simply song',
      'https://www.eatwell101.com/wp-content/uploads/2019/07/ok-Creamy-Garlic-Butter-Chicken-with-Spinach-and-Bacon-5-800x800.jpg'
    ),
  ];
  onRecipeSlected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  constructor() {}

  ngOnInit(): void {}
}
