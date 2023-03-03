import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test-Recipe 1',
      'Lorem ipsum dolor sit amet.',
      'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg'
    ),
    new Recipe(
      'Test-Recipe 2',
      ' officiis blanditiis temporibus eum. Enim,',
      'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg'
    ),
    new Recipe(
      'Test-Recipe 3',
      'Dolore similique labore architecto.',
      'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg'
    ),
  ];
  constructor() {
    this.recipes = this.recipes;
  }

  ngOnInit(): void {}
}
