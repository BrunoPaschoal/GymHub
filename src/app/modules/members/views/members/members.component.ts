import { Component } from '@angular/core';
import {
  faAddressCard,
  faCheck,
  faUserXmark,
} from '@fortawesome/free-solid-svg-icons';

interface IMembersInfo {
  registered: number;
  matriculated: number;
  inactive: number;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  public registeredMembersIcon = faAddressCard;
  public matriculatedMembersIcon = faCheck;
  public inactiveMembersIcon = faUserXmark;
  public membersInfo: IMembersInfo = {
    registered: 527,
    matriculated: 220,
    inactive: 307,
  };
}
