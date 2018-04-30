import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('Santech');
  }));

  /// MY TESTS FROM HERE ON

  it('should display the correct header by default', () => {
    expect(app.header).toEqual('1|2|3 Current Account Terms & Conditions');
  });

  it('should display the correct subHeader by default', () => {
    expect(app.subHeader).toEqual('Everything you need to know before you apply');
  });

  it('should render header in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('1|2|3 Current Account Terms & Conditions');
  }));

  it('should render subHeader in a h2 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Everything you need to know before you apply');
  }));

  it('should have the contact page for Santander', () => {
    expect(app.contactPage).toEqual('https://www.santander.co.uk/uk/current-accounts/current-account-contact-us');
  });

  it('should have the Account Key Fact Details', () => {
    expect(app.accKFD).toEqual('https://www.santander.co.uk/info/sites/default/files/123-Current-Account-KFD-do-ec-182_MARCH18.pdf');
  });
});
