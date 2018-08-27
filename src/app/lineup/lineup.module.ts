import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'angular-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { LineupOverviewComponent } from './components/lineup-overview/lineup-overview.component';
import { LineupManagerComponent } from './components/lineup-manager/lineup-manager.component';
import { ChannelEditModalComponent } from './components/channel-edit-modal/channel-edit-modal.component';

@NgModule({
  imports: [
    HttpClientModule,
    NgPipesModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    DragulaModule.forRoot(),
    BrowserModule
  ],
  declarations: [
    LineupOverviewComponent,
    LineupManagerComponent,
    ChannelEditModalComponent
  ]
})
export class LineupModule { }
