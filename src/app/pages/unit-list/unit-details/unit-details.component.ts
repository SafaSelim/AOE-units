import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/models/units.model';
import { AoeUnitsService } from 'src/app/services/aoe-units.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnInit {

  unit: Unit | undefined;

  constructor(
    private route: ActivatedRoute,
    private aoeUnitsService: AoeUnitsService,
    ) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? '-1');
     
      this.unit = this.aoeUnitsService.getUnitByID(id);
    }

  ngOnInit(): void {
    
  }
}
