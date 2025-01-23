import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetColorDirective } from './set-color.directive';
import { MyIfDirective } from './myif.directive';
import { MyIfDirectiveV2 } from './myifV2.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective,
    MyIfDirective,
    MyIfDirectiveV2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
