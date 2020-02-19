import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { AlcoholHistory } from '../dashboard/model/alcohol-history.model';
import { HistoryService } from './services/history.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }
  displayedColumns: string[] = ['name', 'commonUnitValue', 'date'];
  historyDatasource$: Observable<AlcoholHistory[]>;
  ngOnInit() {
    this.historyDatasource$ = this.historyService.getHistory();
  }
}
