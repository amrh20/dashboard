import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbranchComponent } from './pages/add_branch/addbranch.component';
import { BranchesComponent } from './pages/branches_index/branches.component';

const routes: Routes = [
  { path: '', component: BranchesComponent },
  { path: 'add_branch', component: AddbranchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
