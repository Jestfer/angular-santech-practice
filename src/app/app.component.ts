import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santech';
  header = '1|2|3 Current Account Terms & Conditions';
  subHeader = 'Everything you need to know before you apply';

  contactPage = 'https://www.santander.co.uk/uk/current-accounts/current-account-contact-us';
  accKFD = 'https://www.santander.co.uk/info/sites/default/files/123-Current-Account-KFD-do-ec-182_MARCH18.pdf';
  accTerms = 'https://www.santander.co.uk/info/sites/default/files/Current_Account_Terms_%26_Conditions_April_2018.pdf';
}
