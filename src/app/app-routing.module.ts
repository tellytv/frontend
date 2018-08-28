import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupOverviewComponent, LineupManagerComponent, LineupManagerOverviewComponent } from '@app/lineup/components';

const routes: Routes = [
  { path: '', redirectTo: '/lineup', pathMatch: 'full' },
  { path: 'lineup', component: LineupOverviewComponent },
  { path: 'lineup/manage', component: LineupManagerOverviewComponent },
  { path: 'lineup/manage/:id', component: LineupManagerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
