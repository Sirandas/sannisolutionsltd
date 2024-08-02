import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'raise_solutions_ltd';
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  getBackgroundImg(): string {
    if (this.currentRoute.includes('home')) {
      return 'url(assets/images/homee-bg.jpg)';
    }
    return `url(assets/images/about-us-bg.jpg)`;
  }

  getBackgroundSize(): string {
    if (this.currentRoute.includes('home')) {
      return 'contain';
    } else if (this.currentRoute.includes('services')) {
      return '100% 39%';
    } else if (this.currentRoute.includes('contact')) {
      return '100% 67%';
    }
    return '100% 35%';
  }

  get currentPage(): string {
    if (this.currentRoute.includes('about')) {
      return 'About Us';
    } else if (this.currentRoute.includes('services')) {
      return 'Services';
    } else if (this.currentRoute.includes('contact')) {
      return 'Contact Us';
    }
    return '';
  }
}
