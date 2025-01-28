import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import classicCollection from '../../assets/data/classic-collection.json';

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {
  allCollectionData = classicCollection;
  selectedCollection = this.allCollectionData[0];

  onCollectionChange(event: Event): void {
    const selectedCollectionName = (event.target as HTMLSelectElement).value;
    this.selectedCollection = this.allCollectionData.find(
      (collection) => collection.collection_name === selectedCollectionName
    )!;
  }
}