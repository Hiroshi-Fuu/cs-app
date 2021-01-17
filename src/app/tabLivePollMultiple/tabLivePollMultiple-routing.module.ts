import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLivePollMultiplePage } from './tabLivePollMultiple.page';

const routes: Routes = [
  {
    path: '',
    component: TabLivePollMultiplePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabLivePollMultiplePageRoutingModule {}
