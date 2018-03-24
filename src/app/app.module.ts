import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { MainTextComponent } from './main-text/main-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightQuoteDirective,
    MainTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
