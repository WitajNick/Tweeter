import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    //@ts-ignore
    google.accounts.id.initialize({
      client_id: "187270451087-vttq5ml38pu40aeh5g5kvffjkc84qr3b.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    // @ts-ignore
    google.accounts.id.renderButton(
    // @ts-ignore
      document.getElementById("google-button"), { 
        theme: "outline", 
        size: "large", 
        width: "100%" 
      }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }
  async handleCredentialResponse(response: any) {
    // Here will be your response from Google.
    console.log(response);
    const j: Object = jwtDecode(response.credential);
    console.log(j);
    localStorage.setItem("google", response.credential);
    location.href = '/home';
  }
}