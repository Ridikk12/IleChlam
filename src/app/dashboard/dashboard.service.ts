import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { AlcoholStandardDoseService } from './alcohol-standard-dose.service';
import { Alcohol, AlcoholUnit } from '../add-new/alcohol.class';
import { AlcoholHistory } from './model/alcohol-history.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  historyDatasource: AlcoholHistory[];
  alcoholStandardDoseSummary: number;
  alcoholPriceSummary: number;

  constructor(private authService: AuthService, private angularFireStore: AngularFirestore, private alcoholService: AlcoholStandardDoseService) {
    this.getDashboardData();
  }

  getDashboardData(){
    const user = this.authService.getUser();
    this.angularFireStore.collection('alcoholDrinkStory', ref => ref
      .where('date', '<=', new Date())
      .where('userUid', '==', user.uid)).valueChanges().pipe(map(result => {
        return result.map((alcohol: Alcohol) => {
            const alcoholHistoryModel = new AlcoholHistory();
            alcoholHistoryModel.commonUnitValue = this.alcoholService.calculateAlcoholDose(alcohol);
            alcoholHistoryModel.name = alcohol.alcoholType;
            alcoholHistoryModel.date = moment(alcohol.date.toDate()).format('DD-MM-YYYY');
            alcoholHistoryModel.alcoholPrice = this.alcoholService.calculatePrice(alcohol);
            return alcoholHistoryModel;
        });
      })).subscribe(result => {
        this.alcoholStandardDoseSummary = result.reduce((x, y) => x + y.commonUnitValue, 0);
        this.alcoholPriceSummary = result.reduce((x,y)=> x + y.alcoholPrice,0);
        this.historyDatasource = result;
      });
  }
}
