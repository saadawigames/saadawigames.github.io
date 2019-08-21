import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input('game') game: {
    alias: string, name: string, genre: string, description: string, links: { android: string },
    screenshots: string[]
  };
  index = 0;

  constructor() {
  }

  ngOnInit() {
  }

  move(delta: number) {
    this.index += delta;
    if (this.index > 3) {
      this.index = 1;
    } else if (this.index < 1) {
      this.index = 3;
    }
  }

}
