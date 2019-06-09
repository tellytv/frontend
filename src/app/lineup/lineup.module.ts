import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgPipesModule } from 'angular-pipes';
import { DragulaModule } from 'ng2-dragula';

import { ChannelEditModalComponent,
  LineupEditModalComponent,
  LineupManagerComponent,
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
    BrowserModule,
  ],
  declarations: [
    LineupOverviewComponent,
    LineupManagerComponent,
    LineupEditModalComponent,
    LineupManagerOverviewComponent,
    ChannelEditModalComponent,
  ],
})
export class LineupModule { }
