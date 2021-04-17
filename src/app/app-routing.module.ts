import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenceComponent } from './back-office/agence-tier/agence/agence.component';
import { ListAgenceTemplateComponent } from './back-office/agence-tier/list-agence-template/list-agence-template.component';
import { ListCoachComponent } from './back-office/agence-tier/list-coach/list-coach.component';
import { ListCompaniesComponent } from './back-office/agence-tier/list-companies/list-companies.component';
import { ListSurveyComponent } from './back-office/agence-tier/list-survey/list-survey.component';
import { NewCoachComponent } from './back-office/agence-tier/new-coach/new-coach.component';
import { NewCompanyComponent } from './back-office/agence-tier/new-company/new-company.component';
import { NewSpecificTemplateComponent } from './back-office/agence-tier/new-specific-template/new-specific-template.component';
import { NewSurveyComponent } from './back-office/agence-tier/new-survey/new-survey.component';
import { EditeurComponent } from './back-office/editeur-tier/editeur/editeur.component';
import { ListAgenceComponent } from './back-office/editeur-tier/list-agence/list-agence.component';
import { ListTemplateComponent } from './back-office/editeur-tier/list-template/list-template.component';
import { NewAgenceComponent } from './back-office/editeur-tier/new-agence/new-agence.component';
import { NewTemplateComponent } from './back-office/editeur-tier/new-template/new-template.component';
import { LayoutComponent } from './front-office/layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'back/login', component: LoginComponent },
  {
    path: 'agence', 
    component: AgenceComponent,
    children: [
      {
        path:'companies',
        component: ListCompaniesComponent
      },
      {
        path: 'companies/new-company', // child route path
        component: NewCompanyComponent,
      },
      {
        path: 'companies/edit-company/:id', // child route path
        component: NewCompanyComponent,
      },

      {
        path:'templates',
        component: ListAgenceTemplateComponent
      },
      {
        path: 'templates/new-template', // child route path
        component: NewSpecificTemplateComponent,
      },
      {
        path: 'templates/edit-template/:id', // child route path
        component: NewSpecificTemplateComponent,
      },

      {
        path:'surveys',
        component: ListSurveyComponent
      },
      {
        path: 'surveys/new-survey', // child route path
        component: NewSurveyComponent,
      },
      {
        path: 'surveys/edit-survey/:id', // child route path
        component: NewSurveyComponent,
      },

      {
        path:'coachs',
        component: ListCoachComponent
      },
      {
        path: 'coachs/new-coach', // child route path
        component: NewCoachComponent,
      },
      {
        path: 'coachs/edit-coach/:id', // child route path
        component: NewCoachComponent,
      },
    ]

  },

  {
    path: 'editeur',
    component: EditeurComponent,
    children: [
      {
        path: 'agencies', // child route path
        component: ListAgenceComponent, // child route component that the router renders
      },
      {
        path: 'templates', // child route path
        component: ListTemplateComponent, // child route component that the router renders
      },
      {
        path: 'agencies/new-agence', // child route path
        component: NewAgenceComponent,
      },
      {
        path: 'agencies/edit-agence/:id', // child route path
        component: NewAgenceComponent,
      },
      {
        path: 'templates/new-template', // child route path
        component: NewTemplateComponent, // child route component that the router renders
      },
      {
        path: 'templates/edit-template/:id', // child route path
        component: NewTemplateComponent,
      },
    ]
  },


  { path: '', component: LayoutComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
