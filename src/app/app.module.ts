import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BpmnModule } from './components/bpmn/bpmn.module';
import {ExtractFilenamePipe} from './pipes/filename-extractor.pipe';
import { HistoryComponent } from './pages/history/history.component';
import { DifferComponent } from './pages/differ/differ.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtractFilenamePipe,
    HistoryComponent,
    DifferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    BpmnModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
