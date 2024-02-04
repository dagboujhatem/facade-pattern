import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  observable?: Observable<number>;
  subscription?: Subscription;

  constructor() {
      // observer design pattern 
      // (publisher) un et un seul qui ecrit les valeurs
      this.observable = interval(3000); // publie les valeurs  
     
      // un ou plusieurs qui peuvent lire la données
      this.subscription?.add(this.observable.subscribe(v => console.log(v))); // subscription  1 (consummer 1)
      this.subscription?.add(this.observable.subscribe(v => console.log(v))); // subscription  2 (consummer 2)
  }

  ngOnDestroy(): void {
    // pour détruire l'espace mémoire des subscription à des observables
    this.subscription?.unsubscribe();
  }
}
