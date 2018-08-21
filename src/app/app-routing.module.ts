import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupOverviewComponent } from '@app/lineup/components/lineup-overview/lineup-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/lineup', pathMatch: 'full' },
  { path: 'lineup', component: LineupOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
