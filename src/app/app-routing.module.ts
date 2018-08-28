import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupOverviewComponent, LineupManagerComponent, LineupManagerOverviewComponent } from '@app/lineup/components';
import { ConfigurationOverviewComponent } from '@app/configuration/components';

const routes: Routes = [
  // Lineup Routing
  { path: '', redirectTo: '/lineup', pathMatch: 'full' },
  { path: 'lineup', component: LineupOverviewComponent },
  { path: 'lineup/manage', component: LineupManagerOverviewComponent },
  { path: 'lineup/manage/:id', component: LineupManagerComponent },
  // Configuration Routing
  { path: 'config', component: ConfigurationOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
