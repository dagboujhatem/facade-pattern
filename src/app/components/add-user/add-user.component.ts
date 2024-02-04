import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template: `<div>
  <p> 
  
  add-user works!
  
  </p>
  <a routerLink="/users"> Back to users list </a>
  </div>`,
  styleUrl: './add-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent { }
