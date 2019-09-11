import { Injectable } from '@angular/core';
import { Alcohol, AlcoholType, AlcoholUnit } from './alcohol.class';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddNewService {

  alcoholsToAdd = new Array<Alcohol>();
  alcohols = new Array<Alcohol>();

  constructor(private authService: AuthService, private angularFireStore: AngularFirestore) {
    const beer = new Alcohol('Beer', 'Tin', '/assets/icons/beer.png');
    const wine = new Alcohol('Wine', 'Glass', '/assets/icons/wine-bottle.png');
    const vodka = new Alcohol('Vodka', 'Ml', '/assets/icons/vodka.png');
    const vodka2 = new Alcohol('Other', 'Glass', '/assets/icons/vodka.png');

    this.alcohols.push(beer);
    this.alcohols.push(wine);
    this.alcohols.push(vodka);
    this.alcohols.push(vodka2);
  }

  addNewRecords(alcohols: Alcohol[]) {
    const user = this.authService.getUser();
    alcohols.forEach(alcohol => {
      alcohol.userUid = user.uid;
      const dd = new Date();
      this.angularFireStore.collection('alcoholDrinkStory').add({
        'alcoholType': alcohol.alcoholType,
        'alcoholUnit': alcohol.alcoholUnit,
        userUid: user.uid,
        'quantity': alcohol.quantity,
        'date': new Date()
      });
    });
  }

  getAlcohols() {
    return this.alcohols;
  }
}
