import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscussPage } from './discuss.page';

describe('DiscussPage', () => {
  let component: DiscussPage;
  let fixture: ComponentFixture<DiscussPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
