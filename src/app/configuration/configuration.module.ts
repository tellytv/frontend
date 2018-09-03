import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ConfigurationOverviewComponent, ConfigurationVideoproviderComponent, ConfigurationGuideproviderComponent } from './components';
import { EditVideoproviderModalComponent } from './components/edit-videoprovider-modal/edit-videoprovider-modal.component';
import { EditGuideproviderModalComponent } from './components/edit-guideprovider-modal/edit-guideprovider-modal.component';
import {
  EditGuideProviderLineupsModalComponent
} from './components/edit-guideprovider-lineups-modal/edit-guideprovider-lineups-modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  declarations: [
    ConfigurationOverviewComponent,
    ConfigurationVideoproviderComponent,
    ConfigurationGuideproviderComponent,
    EditVideoproviderModalComponent,
    EditGuideproviderModalComponent,
    EditGuideProviderLineupsModalComponent,
  ]
})
export class ConfigurationModule { }
