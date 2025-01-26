import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import exclusiveCollection from '../../assets/data/exclusive-collection.json';

@Component({
  selector: 'app-exclusive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exclusive.component.html',
  styleUrl: './exclusive.component.scss'
})
export class ExclusiveComponent {
    collectionData = exclusiveCollection;
}
