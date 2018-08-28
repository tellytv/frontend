import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigurationOverviewComponent, ConfigurationVideoproviderComponent, ConfigurationGuideproviderComponent } from './components';
import { EditVideoproviderModalComponent } from './components/edit-videoprovider-modal/edit-videoprovider-modal.component';
import { EditGuideproviderModalComponent } from './components/edit-guideprovider-modal/edit-guideprovider-modal.component';
import { KeysPipe } from 'angular-pipes';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ConfigurationOverviewComponent,
    ConfigurationVideoproviderComponent,
    ConfigurationGuideproviderComponent,
    EditVideoproviderModalComponent,
    EditGuideproviderModalComponent
  ]
})
export class ConfigurationModule { }
