import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Berita2Page } from './berita2.page';

describe('Berita2Page', () => {
  let component: Berita2Page;
  let fixture: ComponentFixture<Berita2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Berita2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
