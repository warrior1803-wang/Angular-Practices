import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  onAddToShoppingList() {
    this.recipeService.addIngreToSHL(this.recipe.ingredients);
  }
  ngOnInit(): void {}
}
