import { Component, OnInit } from '@angular/core';
import { animations } from './animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: animations,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  counter = 5;
  list = [1, 2, 3, 4];
  img = '../../../assets/back.jpg';

  ngOnInit(): void { }

  add() {
    this.list.push(this.counter++);
  }

  remove(index) {
    if (!this.list.length) {
      return;
    }
    this.list.splice(index, 1);
  }

}
