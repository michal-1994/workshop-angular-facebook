import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListComponent } from '../../../posts/components/post-list/post-list.component';
import { PostsModule } from '../../../posts/posts.module';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent, PostListComponent ],
      imports: [PostsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
