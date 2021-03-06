import { LoginKeycloakService } from './../../controllers/loginKeykloac.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ads-tela-cliente',
  templateUrl: './tela-cliente.component.html',
  styleUrls: ['./tela-cliente.component.css']
})
export class TelaClienteComponent implements OnInit {
  dev: string = 'CEO - Developer';
  AdminNome: any;

  emailUpdate: any;

  constructor(private router: Router, private loginKeycloak: LoginKeycloakService) { }

  ngOnInit(): void {
    this.emailUpdate = localStorage.getItem("loginEmail")
    this.AdminNome = localStorage.getItem("name");
  }
  
  sair(){
    localStorage.removeItem('access_token_ads04');
    this.loginKeycloak.logout()
    this.loginKeycloak.clearLocalStorage()
    this.router.navigate(["/"]);
   }
}
