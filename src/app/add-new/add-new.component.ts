import { Component, OnInit } from '@angular/core';
import { Alcohol } from './alcohol.class';
import { AddNewService } from './add-new.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  alcohols: Alcohol[];
  alcohol: Alcohol;

  constructor(private addNewService: AddNewService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.alcohols = this.addNewService.getAlcohols();
  }

  add() {
    if (this.alcohols.filter(x => x.selected).length === 0) {
      this.snackBar.open('Wybierz chodź jeden rodzaj alkoholu.', null, {
        duration: 3000,
        horizontalPosition: 'right'
      });
    } else {
      this.router.navigate(['quantity']);
    }
  }
}

