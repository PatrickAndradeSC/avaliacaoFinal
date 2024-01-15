import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'Contato', url: 'contato', icon: 'paper-plane' },
    { title: 'Sobre', url: 'sobre', icon: 'heart' },
    { title: 'Artigos', url: 'artigo', icon: 'archive' },
    { title: 'Privacidade', url: 'privacidade', icon: 'trash' },
    { title: '404', url: 'not-found', icon: 'trash' },
  ];
  constructor() {}
}