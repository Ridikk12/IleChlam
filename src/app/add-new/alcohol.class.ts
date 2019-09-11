import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Alcohol {

    constructor(type, unit, img) {
        this.alcoholType = type;
        this.alcoholUnit = unit;
        this.imgSrc = img;
    }

    alcoholType: AlcoholType;
    alcoholUnit: AlcoholUnit;
    quantity: number;
    imgSrc: string;
    selected: boolean;
    userUid: string;
    date: any;
}


export type AlcoholType =
    'Beer' | 'Wine' | 'Vodka' | 'Other';

export type AlcoholUnit = 'Ml' | 'Tin' | 'Glass';
