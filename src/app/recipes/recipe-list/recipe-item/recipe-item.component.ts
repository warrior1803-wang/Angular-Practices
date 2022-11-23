import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  onSelectRecipe() {
    this.recipeSelected.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
