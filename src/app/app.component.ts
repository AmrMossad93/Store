import {Component, OnInit} from '@angular/core';
import {LoaderService} from "./Widgets/Services/Loader/loader.service";
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'store';
  constructor(
    public router: Router,
    private loaderService: LoaderService,
  ) {
  }
  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
