import { Component } from '@angular/core';
import aboutUs from '../../assets/data/about-us.json';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  aboutUs =  aboutUs;
}
