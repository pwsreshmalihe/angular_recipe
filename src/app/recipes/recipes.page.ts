import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'abc',
      imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/02/pasta-recipes.jpg',
      ingredients: ['aaa', 'bbb', 'ccc']
    },
    {
      id: 'r2',
      title: 'xyz',
      imageUrl: 'http://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-680x900.jpg',
      ingredients: ['ddd', 'eee', 'fff']
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
