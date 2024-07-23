import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
