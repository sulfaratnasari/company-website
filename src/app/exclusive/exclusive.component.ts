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
  allCollectionData = exclusiveCollection;
  selectedCollection = this.allCollectionData[0];

  onCollectionChange(event: Event): void {
    const selectedCollectionName = (event.target as HTMLSelectElement).value;
    this.selectedCollection = this.allCollectionData.find(
      (collection) => collection.collection_name === selectedCollectionName
    )!;
  }
}
