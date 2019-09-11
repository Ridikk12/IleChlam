import { Injectable } from '@angular/core';
import { Alcohol, AlcoholType } from '../add-new/alcohol.class';

@Injectable({
  providedIn: 'root'
})
export class AlcoholStandardDoseService {

  constructor() { }
  //in ml
  standardDose = 12.5;

  calculateAlcoholDose(alcohol: Alcohol) {
    switch (alcohol.alcoholType) {
      case 'Beer':
        return this.calulateAlcoholUnitPerAlcohol(500,5);
      case 'Vodka':
        return this.calulateAlcoholUnitPerAlcohol(50,40);
      case 'Wine':
        return this.calulateAlcoholUnitPerAlcohol(150,13);    
      default:
        break;
    }
  }

  calculatePrice(alcohol: Alcohol) {
    return this.costCalculator[alcohol.alcoholType];
  }

  calulateAlcoholUnitPerAlcohol(size: number, percentStrong: number): number {
    return size * percentStrong / 100 * this.standardDose;
  }

  private costCalculator= {
    ['Beer']: () => 5,
    ['Wine']: () => 20,
    ['Vodka']: () => 30,
    ['Other']: (alcohol: Alcohol) => 5
  }

}

