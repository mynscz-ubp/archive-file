import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateAdminPage } from './template-admin.page';

describe('TemplateAdminPage', () => {
  let component: TemplateAdminPage;
  let fixture: ComponentFixture<TemplateAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
