import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cost, Unit } from 'src/app/models/units.model';
import { AoeUnitsService } from 'src/app/services/aoe-units.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  aoeUnits = this.aoeUnitsService.getAllUnits();
  
  constructor(
    private aoeUnitsService: AoeUnitsService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }
  
  ngOnInit(): void {
  }

  openUnitDetails(unit: Unit) {
    this.router.navigate(['unit-details/' + unit.id], { relativeTo: this.route });
  }

  parseUnitCost(cost: Cost): string {
    return cost !== null ? JSON.stringify(cost).replace("{",'').replace("}",''): "";
  }
}
