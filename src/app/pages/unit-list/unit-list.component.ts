import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cost, Unit } from 'src/app/models/units.model';
import { AoeUnitsService } from 'src/app/services/aoe-units.service';
import { State } from './store/units.reducer';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {
  aoeUnits: Unit[] = [];
  aoeUnits$: Observable<State>;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{units: State}>,
    ) {
      this.aoeUnits$ = this.store.select('units');
     }
  
  ngOnInit(): void {
    this.aoeUnits$.subscribe((data: State)=> {
      this.aoeUnits = data.units;
    });
  }

  openUnitDetails(unit: Unit) {
    this.router.navigate(['unit-details/' + unit.id], { relativeTo: this.route });
  }

  parseUnitCost(cost: Cost): string {
    return cost !== null ? JSON.stringify(cost).replace("{",'').replace("}",''): "";
  }
}
