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
    const beer = new Alcohol('Beer', 'Puszek', '/assets/icons/003-beer.svg');
    const wine = new Alcohol('Wine', 'Kieliszków', '/assets/icons/wine.svg');
    const vodka = new Alcohol('Vodka', 'Ml', '/assets/icons/001-vodka.svg');
   
    beer.alcoholName = "Piwo";
    wine.alcoholName = "Wino";
    vodka.alcoholName = "Wódka";

    this.alcohols.push(beer);
    this.alcohols.push(wine);
    this.alcohols.push(vodka);
  }

  addNewRecords(alcohols: Alcohol[]) {
    const user = this.authService.getUser();
    alcohols.forEach(alcohol => {
      alcohol.userUid = user.uid;
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
