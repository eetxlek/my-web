import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = '';
}
