import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Cost, Unit } from 'src/app/models/units.model';
import { State } from './store/units.reducer';
import { selectFilteredUnits } from './store/units.selectors';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {
  aoeUnits: Unit[] = [];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{units: State}>,
    ) { }
  
  ngOnInit(): void {
    // this.aoeUnits$.subscribe((data: State)=> {
    //   this.aoeUnits = data.units;
    // });
    this.store.select(selectFilteredUnits).subscribe((units) => {
      this.aoeUnits = units;
    });
  }

  openUnitDetails(unit: Unit) {
    this.router.navigate(['unit-details/' + unit.id], { relativeTo: this.route });
  }

  parseUnitCost(cost: Cost): string {
    return cost !== null ? JSON.stringify(cost).replace("{",'').replace("}",''): "";
  }
}
