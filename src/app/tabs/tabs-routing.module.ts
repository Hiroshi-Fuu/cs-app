import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabLivePoll',
        loadChildren: () => import('../tabLivePoll/tabLivePoll.module').then(m => m.TabLivePollPageModule)
      },
      {
        path: 'tabLivePollMultiple',
        loadChildren: () => import('../tabLivePollMultiple/tabLivePollMultiple.module').then(m => m.TabLivePollMultiplePageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabLivePoll',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabLivePoll',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
