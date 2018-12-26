import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  reccete = '../../../assets/recetario.jpg';
  artisant = '../../../assets/artisant.jpg';
  constructor() { }

  ngOnInit() {
  }

  get gotoRecette() {
    return window.open('https://recette-cuisine.herokuapp.com', '_blank');
  }

  get gotoOuvrier() {
    return window.open('https://ouvrier.herokuapp.com', '_blank');
  }

}
