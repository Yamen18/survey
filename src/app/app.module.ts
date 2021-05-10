import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatStepperModule,
  MatMenuModule,
  MatNativeDateModule,
  MatCardModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDialogModule,
  MatCheckboxModule
} from '@angular/material';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { InvokeEventService } from './Services/invokeEvent.Service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './front-office/layout/layout.component';
import { MainSurveyComponent } from './front-office/main-survey/main-survey.component';
import { CommentaryComponent } from './front-office/commentary/commentary.component';
import { MainReviewComponent } from './front-office/main-review/main-review.component';
import { DoneTickComponent } from './front-office/done-tick/done-tick.component';
import { ReviewSectionComponent } from './front-office/review-section/review-section.component';
import { RatingComponent } from './front-office/rating/rating.component';
import { AgreementComponent } from './front-office/agreement/agreement.component';
import { ChartRadarComponent } from './front-office/chart-radar/chart-radar.component';
import { LoginComponent } from './login/login.component';
import { EditeurComponent } from './back-office/editeur-tier/editeur/editeur.component';
import { AgenceComponent } from './back-office/agence-tier/agence/agence.component';
import { SharedService } from './Services/shared.service';
import { NewAgenceComponent } from './back-office/editeur-tier/new-agence/new-agence.component';
import { NewTemplateComponent } from './back-office/editeur-tier/new-template/new-template.component';
import { ListTemplateComponent } from './back-office/editeur-tier/list-template/list-template.component';
import { ListAgenceComponent } from './back-office/editeur-tier/list-agence/list-agence.component';
import { ListCompaniesComponent } from './back-office/agence-tier/list-companies/list-companies.component';
import { NewCompanyComponent } from './back-office/agence-tier/new-company/new-company.component';
import { ListCoachComponent } from './back-office/agence-tier/list-coach/list-coach.component';
import { NewCoachComponent } from './back-office/agence-tier/new-coach/new-coach.component';
import { NewSpecificTemplateComponent } from './back-office/agence-tier/new-specific-template/new-specific-template.component';
import { ListAgenceTemplateComponent } from './back-office/agence-tier/list-agence-template/list-agence-template.component';
import { ListSurveyComponent } from './back-office/agence-tier/list-survey/list-survey.component';
import { NewSurveyComponent } from './back-office/agence-tier/new-survey/new-survey.component';
import { PaymentDialogComponent } from './back-office/agence-tier/payment-dialog/payment-dialog.component';
import { QrCodeGenerateurDialogComponent } from './back-office/agence-tier/qr-code-generateur-dialog/qr-code-generateur-dialog.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ListParticipantComponent } from './back-office/agence-tier/list-participant/list-participant.component';
import { NewParticipantComponent } from './back-office/agence-tier/new-participant/new-participant.component';
import { SignUpComponent } from './front-office/sign-up/sign-up.component';
import { NewSubSessionComponent } from './back-office/agence-tier/new-sub-session/new-sub-session.component';
import { ListSubSessionComponent } from './back-office/agence-tier/list-sub-session/list-sub-session.component';
import { PaymentComponent } from './back-office/agence-tier/payment/payment.component';
import { AddGroupComponent } from './back-office/agence-tier/add-group/add-group.component';
import { CoachComponent } from './back-office/coach-tier/coach/coach.component';
import { RealTimeDataService } from './Services/RealTimeData.service';
import { HttpClientModule } from '@angular/common/http';
import { EnvServiceProvider } from './Services/env.service.provider';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainSurveyComponent,
    CommentaryComponent,
    MainReviewComponent,
    DoneTickComponent,
    ReviewSectionComponent,
    RatingComponent,
    AgreementComponent,
    ChartRadarComponent,
    LoginComponent,
    EditeurComponent,
    AgenceComponent,
    NewAgenceComponent,
    NewTemplateComponent,
    ListTemplateComponent,
    ListAgenceComponent,
    ListCompaniesComponent,
    NewCompanyComponent,
    ListCoachComponent,
    NewCoachComponent,
    NewSpecificTemplateComponent,
    ListAgenceTemplateComponent,
    ListSurveyComponent,
    NewSurveyComponent,
    PaymentDialogComponent,
    QrCodeGenerateurDialogComponent,
    ListParticipantComponent,
    NewParticipantComponent,
    SignUpComponent,
    NewSubSessionComponent,
    ListSubSessionComponent,
    PaymentComponent,
    AddGroupComponent,
    CoachComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    PickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule, MatCardModule, MatSortModule,
    MatTableModule, MatPaginatorModule, MatSelectModule, MatDialogModule,
    NgxQRCodeModule, MatCheckboxModule,HttpClientModule
  ],
  providers: [MatDatepickerModule, InvokeEventService, ThemeService, SharedService,RealTimeDataService,EnvServiceProvider],
  entryComponents: [PaymentDialogComponent, QrCodeGenerateurDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
