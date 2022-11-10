import { Component, OnInit } from '@angular/core';
import { RecipesModule } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModule[] = [
    new RecipesModule(
      'a test recipe',
      'this is a simply song',
      'https://www.eatwell101.com/wp-content/uploads/2019/07/ok-Creamy-Garlic-Butter-Chicken-with-Spinach-and-Bacon-5-800x800.jpg'
    ),
    new RecipesModule(
      'a test recipe',
      'this is a simply song',
      'https://www.eatwell101.com/wp-content/uploads/2019/07/ok-Creamy-Garlic-Butter-Chicken-with-Spinach-and-Bacon-5-800x800.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
