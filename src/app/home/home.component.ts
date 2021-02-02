import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DataService, Game} from '../data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  copyright: string;
  name = 'Saadawi Games';
  games: Game[];

  constructor(private data: DataService, private title: Title) {
    this.games = data.games;
    this.title.setTitle(this.name);
  }

  ngOnInit() {
    this.copyright = '© ' + new Date().getFullYear().toString() + ' ' + this.name + '.';
  }
}
