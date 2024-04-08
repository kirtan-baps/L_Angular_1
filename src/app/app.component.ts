import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNumberComponent } from './add-number/add-number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '3_app';
}
