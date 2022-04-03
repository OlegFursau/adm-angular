import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { ContactsDetalsComponent } from './components/contacts-detals/contacts-detals.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { UserResolver } from './components/resolvers/user.resolver';

const routes: Routes = [
  {path: '', component:AdminDashbordComponent,
    children:[
      {path: 'contacts', component:ContactsComponent },
      {path: 'contacts/user/:id', component:ContactsDetalsComponent, resolve:{
        user: UserResolver
      }},
      {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home',pathMatch: 'full'}

    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
