import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { MenuModule } from 'primeng/menu';
import { ContextMenuItems } from '../../interfaces/AppTypes';

@Component({
  selector: 'app-profile-logged',
  standalone: true,
  imports: [AvatarModule, MenuModule],
  templateUrl: './profile-logged.component.html',
  styleUrl: './profile-logged.component.scss',
})
export class ProfileLoggedComponent implements OnInit {
  @Input({ required: true }) userName: string | undefined = '';
  @Input({ required: true }) role: string | undefined = '';
  @Input() avatarUrl: string | undefined = '';
  public contextMenuItems: ContextMenuItems[] | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.contextMenuItems = [
      {
        label: 'Minha conta',
        icon: 'pi pi-user',
        command: () => {},
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        command: () => {},
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  logout() {
    this.authService.logout();
  }
}
