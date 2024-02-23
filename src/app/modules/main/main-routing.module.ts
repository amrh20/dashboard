import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from '../branches/pages/branches_index/branches.component';
import { HomeComponent } from '../home/pages/home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'branches', loadChildren: () =>
          import('../branches/branches.module').then(
            (m) => m.BranchesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
