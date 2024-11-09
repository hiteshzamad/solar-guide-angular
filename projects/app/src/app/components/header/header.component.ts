import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpened = false;

  menuList = [
    { title: 'Home', link: 'home' },
    { title: 'Explore', link: 'explore' },
  ]

  onMenuClick() {
    this.menuOpened = !this.menuOpened;
  }

}
