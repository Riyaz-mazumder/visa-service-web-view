import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';
import { InquiryDetailsComponent } from './inquiry-details/inquiry-details.component';

const routes: Routes = [

  { path: 'inquiry-form', component: InquiryFormComponent },
  { path: 'inquiry-details', component: InquiryDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
