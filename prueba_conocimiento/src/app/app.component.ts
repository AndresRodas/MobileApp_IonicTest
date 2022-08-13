import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'grid' },
    { title: 'Profile', url: '/user/Profile', icon: 'person-circle' }
  ];
  public labels = [
    { name: 'Andres Rodas', position: 'Developer', url: 'https://github.com/AndresRodas' }
  ];
  constructor() {}
}
