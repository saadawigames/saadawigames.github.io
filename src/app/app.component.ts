import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {forEach} from '@angular/router/src/utils/collection';
import {animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  games: {
    alias: string, name: string, genre: string, description: string, links: { android: string }, style: string
  }[];

  currentGame: any;
  email = 'saadawigames@gmail.com';


  constructor(private _snackBar: MatSnackBar) {
    this.games = [
      {
        alias: 'cursivity',
        name: 'Cursivity',
        genre: 'Puzzle',
        description: 'Solve challenging puzzles using your programming skills.',
        links: {
          android: 'https://play.google.com/store/apps/details?id=com.saadawigames.cursivity',
        },
        style: 'linear-gradient(#529, transparent)'
      },
      {
        alias: 'infinite-rush',
        name: 'Infinite Rush',
        genre: 'Hyper Casual',
        description: 'Keep moving and avoid traps and falling off.',
        links: {
          android: null,
        },
        style: 'linear-gradient(#247, transparent)'
      }
    ];
    this.currentGame = this.games[0];
  }

  ngOnInit() {
  }


  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack'
    });
  }


  copy(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar('Copied to clipboard');
  }
}
