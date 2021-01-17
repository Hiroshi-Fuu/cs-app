import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabLivePollMultiplePage } from './tabLivePollMultiple.page';

describe('TabLivePollMultiplePage', () => {
  let component: TabLivePollMultiplePage;
  let fixture: ComponentFixture<TabLivePollMultiplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLivePollMultiplePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLivePollMultiplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
