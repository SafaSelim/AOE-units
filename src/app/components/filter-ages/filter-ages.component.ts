import { Component } from '@angular/core';
import { Age } from 'src/app/models/units.model';

type AgeFilter = Age | 'All';

@Component({
  selector: 'app-filter-ages',
  templateUrl: './filter-ages.component.html',
  styleUrls: ['./filter-ages.component.scss']
})
export class FilterAgesComponent {
  unitAges: AgeFilter[] = ['All', 'Dark', 'Castle', 'Feudal', 'Imperial'];
  
  selectedAge: AgeFilter  = 'All';

  constructor() { }

  filterByAge(unitAge: AgeFilter) {
    this.selectedAge = unitAge;
    //TODO create a service to filter units by age
  }
  
}
