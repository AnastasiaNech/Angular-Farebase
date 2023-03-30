import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AbminDashboardComponent } from './components/abmin-dashboard/abmin-dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    AbminDashboardComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
