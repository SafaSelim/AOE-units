import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  pageTitle: string = '';

  routerSubscription = new Subscription;

  hornAudio = new Audio();
  bornAudio = new Audio();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.loadAudios();
   }

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if(data['title'] === "Home") {
          this.bornAudio.play();
        } else if (data['title'] === "Units") {
          this.hornAudio.play();
        }

        this.pageTitle = data['title'] || 'Default Page Title';
      });
  }

  loadAudios() {
    this.bornAudio.src = "../../assets/audio/aoe-born.mp3"
    this.bornAudio.load();
    this.hornAudio.src = "../../assets/audio/aoe-horn.mp3"
    this.hornAudio.load();
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
