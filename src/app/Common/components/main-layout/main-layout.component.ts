import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router, RouterOutlet } from '@angular/router';
import { ProfileLoggedComponent } from '../profile-logged/profile-logged.component';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ProfileLoggedComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  private subscription = new Subscription();
  pageTitle: string | undefined;
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
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
