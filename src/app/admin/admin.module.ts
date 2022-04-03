import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDetalsComponent } from './components/contacts-detals/contacts-detals.component';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    ContactsDetalsComponent,
    AdminDashbordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,


  ]
})
export class AdminModule { }
