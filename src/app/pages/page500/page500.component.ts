import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page500',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './page500.component.html',
  styleUrl: './page500.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page500Component { }
