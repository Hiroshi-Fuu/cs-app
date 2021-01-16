import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabLivePollPage } from './tabLivePoll.page';

describe('TabLivePollPage', () => {
  let component: TabLivePollPage;
  let fixture: ComponentFixture<TabLivePollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLivePollPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLivePollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
