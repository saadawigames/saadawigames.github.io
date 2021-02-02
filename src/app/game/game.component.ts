import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService, Game} from 'src/app/data/data.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;
  current = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.game = this.data.getGame(this.route.snapshot.paramMap.get('id'));
    if (this.game == null) {
      this.router.navigate(['']);
    } else {
      this.title.setTitle(this.game.name);
      console.log(this.route.snapshot.paramMap.get('id'));
    }
  }

  move(delta: number) {
    this.current = (this.current + this.game.screenshots.length + delta) % this.game.screenshots.length;
  }

}
