import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: { id: string, thumbnail: string, title: string }[];

  constructor(private http: HttpClient) {
    this.images = [
      {id: 'B0rXVzig_oD', thumbnail: '', title: ''},
      {id: 'BzloGKVhIdD', thumbnail: '', title: ''},
      {id: 'BxqZD3eBomv', thumbnail: '', title: ''},
      {id: 'BgcQY5jH7X6', thumbnail: '', title: ''},
      {id: 'BdqhqMRhlHO', thumbnail: '', title: ''},
      {id: 'Bev4-uTh6O_', thumbnail: '', title: ''},
      {id: 'BY4KEVthf2Y', thumbnail: '', title: ''},
      {id: 'BhCziYthSBn', thumbnail: '', title: ''},
      {id: 'BYEOJEoh85d', thumbnail: '', title: ''},
      {id: 'BX1PhTvhbXA', thumbnail: '', title: ''},
      {id: 'BZq8c-Yhchj', thumbnail: '', title: ''},
      {id: 'BSE01xUB-8M', thumbnail: '', title: ''}
    ];
    for (let i = 0; i < this.images.length; i++) {
      this.http.get('https://api.instagram.com/oembed?url=http://instagr.am/p/' + this.images[i].id,
        {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')})
        .subscribe(
          value => {
            this.images[i].thumbnail = value['thumbnail_url'];
            this.images[i].title = value['title'];
          }
        );
    }
  }
}
