import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupOverviewComponent } from '@app/lineup/components/lineup-overview/lineup-overview.component';
import { LineupManagerComponent } from '@app/lineup/components/lineup-manager/lineup-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/lineup', pathMatch: 'full' },
  { path: 'lineup', component: LineupOverviewComponent },
  { path: 'lineup/manage', component: LineupManagerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
