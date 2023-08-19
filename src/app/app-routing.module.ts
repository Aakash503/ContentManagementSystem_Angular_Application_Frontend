import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardadminGuard } from 'src/guardadmin.guard';
import { ResisterguardGuard } from 'src/registrationguard.guard';
import { ActivateguardGuard } from './activateguard.guard';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';
import { ViewcontentComponent } from './viewcontent/viewcontent.component';

const routes: Routes = [{
  path:"",
   component:LoginComponent
  },
  {
  path:"home",
  component:HomeComponent
  },
 
  {
  path:"login",
  component:LoginComponent
  },
  {
  path:"search",
  component:SearchComponent
  },
  
  {
  path:"register",
  component:RegistrationComponent,
 
},

 {
  path:"admin",
  component:AdminComponent,
  children:[
    {
      path:"add",
      component:AddComponent
    },
    {
      path:"edit",
      component:EditComponent
    },
    {
      path:"delete",
      component:DeleteComponent
    },
    {
      path:"viewallusers",
      component:ViewalluserComponent,
      
     }
  ]
  
},
{
  path:"content",canActivate:[ActivateguardGuard],
  component:ContentComponent,
 
},
{
  path:"viewcontent",canActivate:[ActivateguardGuard],
  component:ViewcontentComponent,
 
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
