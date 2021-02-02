import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DataService, Prototype} from '../data/data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss']
})
export class PrototypeComponent implements OnInit {

  prototypes: Prototype[];

  constructor(private data: DataService) {
    this.prototypes = this.data.prototypes;
  }

  ngOnInit() {
  }

}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
