import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlcoholStandardDoseService } from 'src/app/dashboard/alcohol-standard-dose.service';
import { Injectable } from '@angular/core';
import { AlcoholHistory } from 'src/app/dashboard/model/alcohol-history.model';
import { Alcohol } from 'src/app/add-new/alcohol.class';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';


@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    constructor(private authService: AuthService, private angularFireStore: AngularFirestore, private alcoholService: AlcoholStandardDoseService) {
    }

    getHistory(): Observable<AlcoholHistory[]> {
        const user = this.authService.getUser();
        return this.angularFireStore.collection('alcoholDrinkStory', ref => ref
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
            }));
    }
}
