import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabLivePollPage } from './tabLivePoll.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabLivePollPageRoutingModule } from './tabLivePoll-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabLivePollPageRoutingModule
  ],
  declarations: [TabLivePollPage]
})
export class TabLivePollPageModule {}
