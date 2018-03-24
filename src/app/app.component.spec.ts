import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainTextComponent } from './main-text/main-text.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainTextComponent,
        HighlightQuoteDirective
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
