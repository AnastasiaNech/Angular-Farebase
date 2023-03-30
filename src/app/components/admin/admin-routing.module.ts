import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponent } from './components/sub/sub.component';
import { AbminDashboardComponent } from './components/abmin-dashboard/abmin-dashboard.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '', component: AbminDashboardComponent,
    children: [
      { path: 'contacts', component: ContactsComponent},
      {
        path: 'contacts/user/:id', component: ContactsDetailsComponent, resolve: {
          user: UserResolver
        }
      },
      { path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full' },
      //{ path: 'home', component: HomeComponent },
      { path: 'sub', component: SubComponent },
      { path: '', redirectTo: 'sub', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
