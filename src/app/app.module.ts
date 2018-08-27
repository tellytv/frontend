import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'angular-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LineupModule } from './lineup/lineup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NgPipesModule,
    NgSelectModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    LineupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
