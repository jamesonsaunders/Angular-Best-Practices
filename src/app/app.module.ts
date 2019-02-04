import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { NumberService } from './providers/number/number.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SequenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NumberService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
