import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'angular-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LineupManagerComponent,
  ChannelEditModalComponent,
  LineupEditModalComponent,
  LineupManagerOverviewComponent,
  LineupOverviewComponent } from './lineup/components';

@NgModule({
  declarations: [
    AppComponent,
    LineupOverviewComponent,
    LineupManagerComponent,
    ChannelEditModalComponent,
    LineupManagerOverviewComponent,
    LineupEditModalComponent
  ],
  imports: [
    HttpClientModule,
    NgPipesModule,
    NgSelectModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
