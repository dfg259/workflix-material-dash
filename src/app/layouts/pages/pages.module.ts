import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';

import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { TermsAndConditionsComponent } from './registro/terms-and-conditions/terms-and-conditions.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    HomeComponent,
    QuienesSomosComponent,
    ContactoComponent,
    NavigationComponent,
    RegistroComponent,
    LoginComponent,
    ServiciosComponent,
    ProfesionalesComponent,
    TermsAndConditionsComponent,
    NavigationComponent,
    DashboardComponent,
    
    
    


  ],
  exports:[
    HomeComponent,
    QuienesSomosComponent,
    ContactoComponent,
    NavigationComponent,
    RegistroComponent,
    DashboardComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    
    
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    



  ]
})
export class PagesModule {  }
