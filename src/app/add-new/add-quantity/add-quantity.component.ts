import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alcohol } from '../alcohol.class';
import { AddNewService } from '../add-new.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-quantity',
    templateUrl: './add-quantity.component.html',
    styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {
    constructor(private addService: AddNewService, private router: Router, private snackBar: MatSnackBar) {
    }

    alcohols: Alcohol[];

    ngOnInit(): void {
        this.alcohols = this.addService.alcohols.filter(x => x.selected);
    }
    onSubmit() {
        this.addService.addNewRecords(this.alcohols);
        this.snackBar.open('Chlańsko dodane!', null, {
            duration: 1000,
            horizontalPosition: 'right'
        }).afterDismissed().subscribe(_ => {
            this.router.navigate(['dashboard']);
        });
    }
}
