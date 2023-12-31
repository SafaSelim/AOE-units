import { Injectable } from '@angular/core';
import { Unit } from '../models/units.model';
import { units } from './aoe-units.mock';

@Injectable({
  providedIn: 'root'
})
export class AoeUnitsService {
  
  constructor() { }

  getUnitByID(id: number): Unit | undefined {
    return units.find(unit=> unit.id === id);
  }
}
