import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [AccountsService],
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {
    accountsService.statusUpdated.subscribe((status: string) =>
      alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
