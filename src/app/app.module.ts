import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'angular-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LineupOverviewComponent } from './lineup/components/lineup-overview/lineup-overview.component';
import { AppRoutingModule } from './/app-routing.module';
import { LineupManagerComponent } from './lineup/components/lineup-manager/lineup-manager.component';
import { LineupRowComponent } from './lineup/components/lineup-row/lineup-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LineupOverviewComponent,
    LineupManagerComponent,
    LineupRowComponent
  ],
  imports: [
    HttpClientModule,
    NgPipesModule,
    NgSelectModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
