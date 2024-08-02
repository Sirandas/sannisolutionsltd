import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  getHeaderClass(): string {
    if (this.currentRoute.includes('home')) {
      return 'header home';
    } else if (this.currentRoute.includes('about')) {
      return 'header about';
    } else if (this.currentRoute.includes('services')) {
      return 'header services';
    } else if (this.currentRoute.includes('contact')) {
      return 'header contact';
    } else {
      return 'header';
    }
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
