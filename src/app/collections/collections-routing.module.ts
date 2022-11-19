import { BiographyComponent } from './biography/biography.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanysComponent } from './companys/companys.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {path:'',
   component:CollectionsHomeComponent,
   children:[
    {path:'', component:BiographyComponent },
    {path:'companys', component:CompanysComponent},
    {path:'partners', component:PartnersComponent},
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
