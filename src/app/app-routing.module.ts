import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DifferComponent } from './pages/differ/differ.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
  {
    path: 'differ',
    component: DifferComponent,
    pathMatch: 'full'
  },
  {
    path: 'history',
    component: HistoryComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'differ',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
