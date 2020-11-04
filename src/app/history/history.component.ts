import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { AlcoholHistory } from '../dashboard/model/alcohol-history.model';
import { HistoryService } from './services/history.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';

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
    var to = moment().add(1, 'days').toDate();
    var from = moment().subtract(7, 'days').toDate();
    console.log(from, to);

    this.historyDatasource$ = this.historyService.getHistory(from, to);
  }
}
