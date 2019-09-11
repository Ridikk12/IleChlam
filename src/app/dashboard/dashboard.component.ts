import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboardService: DashboardService) { }
  brainCells = 100;
  lost = '1000 zł';
  ngOnInit() {
  }

  displayedColumns: string[] = ['commonUnitValue','date'];


}
