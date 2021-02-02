import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService, Game} from '../data/data.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  games: Game[];
  genre: string;
  destination: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.destination = this.route.snapshot.paramMap.get('game');
    if (this.destination == null) { this.destination = ''; } else { this.destination  = '/game/' + this.destination; }
    this.genre = this.route.snapshot.paramMap.get('genre')
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    this.games = this.data.getGames(this.genre);
    if (this.games == null) {
      this.router.navigate(['']);
    } else {
      this.title.setTitle(this.genre + ' Games');
      console.log(this.route.snapshot.paramMap.get('id'));
    }
  }

}
