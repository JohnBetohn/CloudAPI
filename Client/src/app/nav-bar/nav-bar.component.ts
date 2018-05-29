import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService) {
    /*if(!this.auth.isAuthenticated()){
      this.auth.login();
    }*/
   }

  ngOnInit() {
  }

}