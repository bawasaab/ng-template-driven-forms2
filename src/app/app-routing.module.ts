import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgReactiveFormsComponent } from './ng-reactive-forms/ng-reactive-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: 'ng-template-driven-forms',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'ng-reactive-forms',
    component: NgReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
