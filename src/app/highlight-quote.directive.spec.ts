import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HighlightQuoteDirective } from './highlight-quote.directive';

// stub declaration
@Component({
  template: `
  <article [appHighlightQuote]="quote">
    <p>
      There was an Old Lady of Prague,
      Whose language was horribly vague;
      When they said, 'Are these caps?'
      She answered, 'Perhaps!'
      That oracular Lady of Prague.
    </p>
    <p>
      There was an Old Person of Sparta,
      Who had twenty-one sons and one 'darter';
      He fed them on snails,
      And weighed them in scales,
      That wonderful Person of Sparta.
    </p>
    <p>
      There was an Old Man at a casement,
      Who held up his hands in amazement;
      When they said, 'Sir, you'll fall!'
      He replied, 'Not at all!'
      That incipient Old Man at a casement
    </p>
  </article>
  `
})
class TestHighlightQuoteComponent {
  quote = 'That wonderful Person of Sparta';
}

describe('Directive: HighlightQuote', () => {
  let fixture: ComponentFixture<TestHighlightQuoteComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightQuoteDirective, TestHighlightQuoteComponent],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(TestHighlightQuoteComponent);
    fixture.detectChanges();
  });
  it('should have one highlighted element', () => {
    const highlighted = fixture.nativeElement.querySelectorAll('span');
    expect(highlighted.length).toBe(1);
  });
  it('should turn #FAEA70 when highlighted', () => {
    const highlighted: HTMLElement = fixture.nativeElement.querySelector('span');
    const bgColor = highlighted.style.backgroundColor;
    expect(bgColor).toBe('rgb(250, 234, 112)');
  });
  it('text should be "That wonderful Person of Sparta"', () => {
    const highlightedText = fixture.nativeElement.querySelector('span').innerHTML;
    expect(highlightedText).toBe('That wonderful Person of Sparta');
  });
});
