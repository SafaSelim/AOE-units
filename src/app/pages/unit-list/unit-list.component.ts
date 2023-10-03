import { Component, OnInit } from '@angular/core';
import { Cost } from 'src/app/models/units.model';
import { AoeUnitsService } from 'src/app/services/aoe-units.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  aoeUnits = this.aoeUnitsService.getAllUnits();
  
  constructor(private aoeUnitsService: AoeUnitsService) {

  }
  
  ngOnInit(): void {
    console.log("units--->", this.aoeUnitsService.getAllUnits());
  }

  parseUnitCost(cost: Cost): string {
    return cost !== null ? JSON.stringify(cost).replace("{",'').replace("}",''): "";
  }
}
