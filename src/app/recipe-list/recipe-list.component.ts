import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[];

  currentIndex: number = 0;

  get currentRecipe() {
    return this.recipes[this.currentIndex];
  }

  constructor() {}

  ngOnInit() { }

  next() {
    this.currentIndex++;
  }

  previous() {
    this.currentIndex--;
  }

  getNoImage(event: any) {
    const src = './assets/no-image-icon.png';
    if (event) {
      event.target.src = src;
    }
    return src;
  }
}
