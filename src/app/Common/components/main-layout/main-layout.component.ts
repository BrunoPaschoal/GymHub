import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Data,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { ProfileLoggedComponent } from '../profile-logged/profile-logged.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { Subscription, filter } from 'rxjs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileLoggedComponent,
    FontAwesomeModule,
    SideMenuComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  private subscription = new Subscription();
  pageTitle: string | undefined;
  currentIcon!: IconProp;
  userName: string | undefined;
  avatarUrl: string | undefined;
  role: string | undefined;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.authService.user.subscribe((user) => {
        this.userName = user?.name;
        this.avatarUrl = user?.avatar;
        this.role = user?.role;
      })
    );

    this.updatePageTitleAndIcon();

    this.subscription.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => this.updatePageTitleAndIcon())
    );
  }

  updatePageTitleAndIcon() {
    const child = this.route.firstChild;
    if (child?.data) {
      this.subscription.add(
        child.data.subscribe((data: Data) => {
          this.pageTitle = data['pageTitle'];
          this.currentIcon = data['icon'];
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
