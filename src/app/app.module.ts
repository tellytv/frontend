import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgPipesModule } from 'angular-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfigurationModule } from './configuration/configuration.module';
import { LineupModule } from './lineup/lineup.module';
import { PreviewLineupModule } from './preview-lineup/preview-lineup.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgPipesModule,
    NgSelectModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LineupModule,
    ConfigurationModule,
    PreviewLineupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
