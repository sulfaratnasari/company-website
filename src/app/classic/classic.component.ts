import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import classicCollection from '../../assets/data/classic-collection.json';

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})
export class ClassicComponent {
    collectionData = classicCollection;
}
