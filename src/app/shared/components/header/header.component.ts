import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Header } from './Header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menus: Header[] = [
    {
      label: 'Work',
      path: '',
    },
    {
      label: 'About',
      path: 'about',
    },
    {
      label: 'Services',
      path: 'services',
    },
    {
      label: 'Ideas',
      path: 'ideas',
    },
    {
      label: 'Careers',
      path: 'careers',
    },
    {
      label: 'Contact',
      path: 'contact',
    },
  ];
  prevScrollpos = window.pageYOffset;
  @ViewChild('navbar') navbar!: ElementRef;
  activeLink = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.activeLink = router.url;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url.split('/')[1];
      }
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    const currentScrollPos = window.pageYOffset;
    console.log(this.prevScrollpos, currentScrollPos);
    if (this.prevScrollpos > currentScrollPos) {
      this.navbar.nativeElement.style.top = '0';
    } else {
      this.navbar.nativeElement.style.top = '-60px';
    }
    this.prevScrollpos = currentScrollPos;
  }

  navigateRoute(path: string): void {
    this.activeLink = path;
    this.router.navigate([`/${path}`]);
  }
}
