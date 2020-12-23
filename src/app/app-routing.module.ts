import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateTimeComponent } from './component/date-time/date-time.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/data',
    pathMatch: 'full'
  },
  {
    path: 'data',
    component: DateTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
