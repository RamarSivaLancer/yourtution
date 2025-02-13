import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yourtution';
}
