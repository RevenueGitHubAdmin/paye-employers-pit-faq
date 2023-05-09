import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RevdsModule } from 'revds';
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TdmTabComponent } from './tdm-tab/tdm-tab.component';
import { SoapRestTabComponent } from './soap-rest-tab/soap-rest-tab.component';
import { SafePipeModule } from 'safe-pipe';
import { ErrorsFaqComponent } from './errors-faq/errors-faq.component';
import { ReportingIssuesComponent } from './reporting-issues/reporting-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    TdmTabComponent,
    SoapRestTabComponent,
    ErrorsFaqComponent,
    ReportingIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RevdsModule,
    AccordionModule,
    RouterModule,
    BrowserAnimationsModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
