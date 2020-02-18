import { Injectable } from '@angular/core';
import { Alcohol, AlcoholType } from '../add-new/alcohol.class';

@Injectable({
  providedIn: 'root'
})
export class AlcoholStandardDoseService {

  constructor() { }
  //in ml
  standardDose = 12.5;
  saveMan = 20;
  saveWoman = 10;

  calculateAlcoholDose(alcohol: Alcohol) {
    switch (alcohol.alcoholType) {
      case 'Beer':
        return this.calulateAlcoholUnitPerAlcohol(500, 5) * alcohol.quantity;
      case 'Vodka':
        return this.calulateAlcoholUnitPerAlcohol(50, 40) * alcohol.quantity;
      case 'Wine':
        return this.calulateAlcoholUnitPerAlcohol(150, 13) * alcohol.quantity;
      default:
        return this.calulateAlcoholUnitPerAlcohol(1000, 1)  * alcohol.quantity;
    }
  }

  calculatePrice(alcohol: Alcohol): number {
    return this.costCalculator[alcohol.alcoholType] * alcohol.quantity;
  }

  calulateAlcoholUnitPerAlcohol(size: number, percentStrong: number): number {
    return (size * percentStrong / 100) / this.standardDose;
  }

  private costCalculator = {
    ['Beer']: 8,
    ['Wine']: 12,
    ['Vodka']: 4,
    ['Other']: 4,
  }

}

