import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'angular-pipes';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { LineupOverviewComponent } from './lineup/components/lineup-overview/lineup-overview.component';
import { AppRoutingModule } from './/app-routing.module';
import { LineupManagerComponent } from './lineup/components/lineup-manager/lineup-manager.component';
import { ChannelEditModalComponent } from './lineup/components/channel-edit-modal/channel-edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LineupOverviewComponent,
    LineupManagerComponent,
    ChannelEditModalComponent
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
