import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoQuoteComponent } from './potato-quote.component';

describe('PotatoQuoteComponent', () => {
  let component: PotatoQuoteComponent;
  let fixture: ComponentFixture<PotatoQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
