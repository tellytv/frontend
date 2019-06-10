import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ConfigurationGuideProviderComponent, ConfigurationOverviewComponent, ConfigurationVideoProviderComponent } from './components';
import {
  EditGuideProviderLineupsModalComponent,
} from './components/edit-guideprovider-lineups-modal/edit-guideprovider-lineups-modal.component';
import { EditGuideProviderModalComponent } from './components/edit-guideprovider-modal/edit-guideprovider-modal.component';
import { EditVideoProviderModalComponent } from './components/edit-videoprovider-modal/edit-videoprovider-modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  declarations: [
    ConfigurationOverviewComponent,
    ConfigurationVideoProviderComponent,
    ConfigurationGuideProviderComponent,
    EditVideoProviderModalComponent,
    EditGuideProviderModalComponent,
    EditGuideProviderLineupsModalComponent,
  ],
})
export class ConfigurationModule { }
