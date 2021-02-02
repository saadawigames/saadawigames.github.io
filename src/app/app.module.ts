import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule, MatRippleModule, MatSnackBarModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactComponent} from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {GameComponent} from './game/game.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {GalleryComponent} from './gallery/gallery.component';
import {AutosizeModule} from 'ngx-autosize';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PrototypeComponent, SafePipe} from './prototype/prototype.component';
import { GenreComponent } from './genre/genre.component';

const appRoutes: Routes = [
  { path: 'prototypes', component: PrototypeComponent},
  { path: 'game/:id', component: GameComponent},
  { path: 'genre/:genre/:game', component: GenreComponent},
  { path: 'genre/:genre', component: GenreComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GameComponent,
    GalleryComponent,
    HomeComponent,
    PrototypeComponent,
    SafePipe,
    GenreComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    AutosizeModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatRippleModule, MatChipsModule,
    MatTabsModule, MatSnackBarModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
