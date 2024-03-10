import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>page404 works!</p>`,
  styleUrl: './page404.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page404Component { }
