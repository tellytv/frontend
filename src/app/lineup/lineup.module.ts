import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgPipesModule } from 'angular-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { LineupManagerComponent,
  ChannelEditModalComponent,
  LineupEditModalComponent,
  LineupManagerOverviewComponent,
  LineupOverviewComponent } from './components';

@NgModule({
  imports: [
    RouterModule,
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
    LineupEditModalComponent,
    LineupManagerOverviewComponent,
    ChannelEditModalComponent
  ]
})
export class LineupModule { }
