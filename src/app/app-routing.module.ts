import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AddQuantityComponent } from './add-new/add-quantity/add-quantity.component';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Ile przechlałeś?' }
  },
  {
    path: 'add',
    component: AddNewComponent,
    data: { title: 'Co chlałeś?' }
  },
  {
    path: 'quantity',
    component: AddQuantityComponent,
    data: { title: 'Ile chlałeś?' }
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: { title: 'Historia chlania' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
