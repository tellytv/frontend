import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationOverviewComponent } from '@app/configuration/components';
import { LineupManagerComponent, LineupManagerOverviewComponent, LineupOverviewComponent } from '@app/lineup/components';
import { PreviewGuideProviderLineupComponent } from '@app/preview-lineup/components';

const routes: Routes = [
  // Lineup Routing
  { path: '', redirectTo: '/lineup', pathMatch: 'full' },
  { path: 'lineup', component: LineupOverviewComponent },
  { path: 'lineup/manage', component: LineupManagerOverviewComponent },
  { path: 'lineup/manage/:id', component: LineupManagerComponent },
  // Configuration Routing
  { path: 'config', component: ConfigurationOverviewComponent },
  // Guide Provider Lineup Preview
  { path: 'guide_provider/:guideProviderId/lineup_preview/:lineupId', component: PreviewGuideProviderLineupComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
