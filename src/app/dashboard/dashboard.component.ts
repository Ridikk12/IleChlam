import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthService, public dashboardService: DashboardService) { }
  ngOnInit() {
  }

  alcoholUnit: number;
  alcoholPrice: number;

  displayedColumns: string[] = ['commonUnitValue', 'date'];


}
