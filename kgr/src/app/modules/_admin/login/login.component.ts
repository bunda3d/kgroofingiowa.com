import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { environment } from '../../../../environments/environment';

declare var google: any;
declare var access_token: any;

interface JwtToken {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  exp: string;
  // whatever else is in the JWT.
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    /*==========================*/
    // Google Identity Sign In
    /*==========================*/
    google.accounts.id.initialize({
      client_id: environment.googleOAuthClientId,
      ux_mode: 'popup',
      cancel_on_tap_outside: true,
      auto_select: false,
      callback: this.handleCredentialResponse.bind(this)
    });

    //both button and 1tap can appear, or just either one
    google.accounts.id.renderButton(document.getElementById('google_btn'), {
      type: 'standard',
      text: 'signin_with',
      theme: 'outline',
      size: 'large',
      width: 240,
    }); 

    //this makes One Tap appear
    //google.accounts.id.prompt();

    /*==========================*/
    // Google Identity Authorization
    // Implicit Grant Model
    // https://developers.google.com/identity/oauth2/web/guides/use-token-model
    /*==========================*/

    const client = google.accounts.oauth2.initTokenClient({
      client_id: environment.googleOAuthClientId,
      scope: 'https://www.googleapis.com/auth/drive',
      callback: (tokenResponse) => {
        access_token = tokenResponse.access_token;
      }
    });
    client.requestAccessToken();
  }

  async handleCredentialResponse(response) {
    const responsePayload = this.decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log("Email: " + responsePayload.email);
  }
  
  decodeJwtResponse(credential: string): JwtToken {
    const decodedToken = jwtDecode<JwtToken>(credential);
    console.log(decodedToken);
    return decodedToken;
  } 

  async loadDrive() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/primary/events');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send();
  }

  async revokeToken() {
    google.accounts.oauth2.revoke(access_token, () => {
      console.log('access token revoked')
    });
  }
}
