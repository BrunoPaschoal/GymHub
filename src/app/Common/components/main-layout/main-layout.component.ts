import { Component } from '@angular/core';
import { ActivatedRoute, Data, RouterOutlet } from '@angular/router';
import { ProfileLoggedComponent } from '../profile-logged/profile-logged.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ProfileLoggedComponent, FontAwesomeModule],
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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.authService.user.subscribe((user) => {
        this.userName = user?.name;
        this.avatarUrl = user?.avatar;
        this.role = user?.role;
      })
    );

    this.route.firstChild?.data.subscribe((data: Data) => {
      this.pageTitle = data['pageTitle'];
      this.currentIcon = data['icon'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
