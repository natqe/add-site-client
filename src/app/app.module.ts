import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddSiteHaederComponent } from './add-site-haeder/add-site-haeder.component';
import { AddSiteFooterComponent } from './add-site-footer/add-site-footer.component';
import { AddSiteMainComponent } from './add-site-main/add-site-main.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSiteHaederComponent,
    AddSiteFooterComponent,
    AddSiteMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
