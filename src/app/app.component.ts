import { Component } from '@angular/core';
/*import { OktaAuthService } from '@okta/okta-angular';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*/@Component({
  selector: 'app-root',
  template:
    <button *ngIf="!isAuthenticated" (click)="login()"> Login </button>
    <button *ngIf="isAuthenticated" (click)="logout()"> Logout </button>
    <router-outlet></router-outlet>
  ,
})/*/
export class AppComponent {
  title = 'Admin Page';
  isAuthenticated: boolean;

 /* constructor(public oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.loginRedirect('/profile');
  }

  logout() {
    this.oktaAuth.logout('/');
  }*/
}
