import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos: Object[] = [ ];
  
  constructor(private httpClient: HttpClient) {
    httpClient
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => this.photos = photos);
  }
    
}
