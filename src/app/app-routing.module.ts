import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsFaqComponent } from './errors-faq/errors-faq.component';
import { SoapRestTabComponent } from './soap-rest-tab/soap-rest-tab.component';
import { TdmTabComponent } from './tdm-tab/tdm-tab.component';
import { ReportingIssuesComponent } from './reporting-issues/reporting-issues.component';
// import { AppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tdm-tab', pathMatch: 'full'}, 
  { path: 'tdm-tab', component: TdmTabComponent},
  { path: 'soap-rest-tab', component: SoapRestTabComponent},
  { path: 'errors-faq', component: ErrorsFaqComponent},
  { path: 'reporting-issues', component: ReportingIssuesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
