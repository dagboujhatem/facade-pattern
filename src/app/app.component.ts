import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
      // observer design pattern 
      // (publisher) un et un seul qui ecrit les valeurs
      const observable = interval(3000); // publie les valeurs  
     
      // un ou plusieurs qui peuvent lire la données
      observable.subscribe(v => console.log(v)); // subscription  1 (consummer 1)
      observable.subscribe(v => console.log(v)); // subscription  2 (consummer 2)
  }
}
