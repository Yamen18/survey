import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenceComponent } from './back-office/agence-tier/agence/agence.component';
import { ListAgenceTemplateComponent } from './back-office/agence-tier/list-agence-template/list-agence-template.component';
import { ListCoachComponent } from './back-office/agence-tier/list-coach/list-coach.component';
import { ListCompaniesComponent } from './back-office/agence-tier/list-companies/list-companies.component';
import { ListParticipantComponent } from './back-office/agence-tier/list-participant/list-participant.component';
import { ListSubSessionComponent } from './back-office/agence-tier/list-sub-session/list-sub-session.component';
import { ListSurveyComponent } from './back-office/agence-tier/list-survey/list-survey.component';
import { NewCoachComponent } from './back-office/agence-tier/new-coach/new-coach.component';
import { NewCompanyComponent } from './back-office/agence-tier/new-company/new-company.component';
import { NewParticipantComponent } from './back-office/agence-tier/new-participant/new-participant.component';
import { NewSpecificTemplateComponent } from './back-office/agence-tier/new-specific-template/new-specific-template.component';
import { NewSubSessionComponent } from './back-office/agence-tier/new-sub-session/new-sub-session.component';
import { NewSurveyComponent } from './back-office/agence-tier/new-survey/new-survey.component';
import { PaymentComponent } from './back-office/agence-tier/payment/payment.component';
import { EditeurComponent } from './back-office/editeur-tier/editeur/editeur.component';
import { ListAgenceComponent } from './back-office/editeur-tier/list-agence/list-agence.component';
import { ListTemplateComponent } from './back-office/editeur-tier/list-template/list-template.component';
import { NewAgenceComponent } from './back-office/editeur-tier/new-agence/new-agence.component';
import { NewTemplateComponent } from './back-office/editeur-tier/new-template/new-template.component';
import { LayoutComponent } from './front-office/layout/layout.component';
import { SignUpComponent } from './front-office/sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'back/login', component: LoginComponent },
  {
    path: 'agence',
    component: AgenceComponent,
    children: [
      {
        path: 'companies',
        component: ListCompaniesComponent
      },
      {
        path: 'companies/new-company',
        component: NewCompanyComponent,
      },
      {
        path: 'companies/edit-company/:id',
        component: NewCompanyComponent,
      },
      {
        path: 'templates',
        component: ListAgenceTemplateComponent
      },
      {
        path: 'templates/new-template',
        component: NewSpecificTemplateComponent,
      },
      {
        path: 'templates/edit-template/:id',
        component: NewSpecificTemplateComponent,
      },
      {
        path: 'coachs',
        component: ListCoachComponent
      },
      {
        path: 'coachs/new-coach',
        component: NewCoachComponent,
      },
      {
        path: 'coachs/edit-coach/:id',
        component: NewCoachComponent,
      },
      {
        path: 'surveys',
        component: ListSurveyComponent
      },
      //mode new survey
      {
        path: 'surveys/new-survey',
        component: NewSurveyComponent,
      },
      {
        path: 'surveys/new-survey/new-sub-session',
        component: NewSubSessionComponent,
      },
      {
        path: 'surveys/new-survey/edit-sub-session/:idSubsession',
        component: NewSubSessionComponent,
      },
      {
        path: 'surveys/new-survey/new-sub-session/participants',
        component: ListParticipantComponent,
      },
      {
        path: 'surveys/new-survey/participants',
        component: ListParticipantComponent,
      },
      {
        path: 'surveys/new-survey/edit-sub-session/:idSubsession/participants',
        component: ListParticipantComponent,
      },
      {
        path: 'surveys/new-survey/:idSubsession/participants',
        component: ListParticipantComponent,
      },
      {
        path: 'surveys/new-survey/new-sub-session/participants/new-participant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/new-survey/participants/new-participant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/new-survey/new-sub-session/participants/edit-participant/:idParticipant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/new-survey/participants/edit-participant/:idParticipant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/new-survey/edit-sub-session/:idSubsession/participants/new-participant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/new-survey/participants/new-participant',
        component: NewParticipantComponent,
      },
      //mode edit survey
      {
        path: 'surveys/edit-survey/:id',
        component: NewSurveyComponent,
      },
      //new sub session
      {
        path: 'surveys/edit-survey/:id/new-sub-session',
        component: NewSubSessionComponent,
      },
      //edit sub session
      {
        path: 'surveys/edit-survey/:id/edit-sub-session/:idSubsession',
        component: NewSubSessionComponent,
      },
      //list des participant mode new sub session
      {
        path: 'surveys/edit-survey/:id/new-sub-session/participants',
        component: ListParticipantComponent,
      },
      {
        path: 'surveys/edit-survey/:id/participants',
        component: ListParticipantComponent,
      },
      //list des participant mode edit sub session
      {
        path: 'surveys/edit-survey/:id/edit-sub-session/:idSubsession/participants',
        component: ListParticipantComponent,
      },
      // new participant mode new sub session
      {
        path: 'surveys/edit-survey/:id/new-sub-session/participants/new-participant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/edit-survey/:id/participants/new-participant',
        component: NewParticipantComponent,
      },
      // edit participant mode edit sub session
      {
        path: 'surveys/edit-survey/:id/edit-sub-session/:idSubsession/participants/edit-participant/:idParticipant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/edit-survey/:id/participants/edit-participant/:idParticipant',
        component: NewParticipantComponent,
      },
      {
        path: 'surveys/edit-survey/:id/edit-sub-session/:idSubsession/participants/new-participant',
        component: NewParticipantComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
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
  { path: 'front/login', component: SignUpComponent },
  { path: '', component: LayoutComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
