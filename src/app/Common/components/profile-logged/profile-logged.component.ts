import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-profile-logged',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './profile-logged.component.html',
  styleUrl: './profile-logged.component.scss',
})
export class ProfileLoggedComponent {
  @Input({ required: true }) userName: string | undefined = '';
  @Input({ required: true }) role: string | undefined = '';
  @Input() avatarUrl: string | undefined = '';
}
