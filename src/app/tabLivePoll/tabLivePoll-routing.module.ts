import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLivePollPage } from './tabLivePoll.page';

const routes: Routes = [
  {
    path: '',
    component: TabLivePollPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabLivePollPageRoutingModule {}
