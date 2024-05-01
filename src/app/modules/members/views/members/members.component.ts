import { Component } from '@angular/core';
import {
  faAddressCard,
  faCheck,
  faUserXmark,
} from '@fortawesome/free-solid-svg-icons';
import { MemberStatusEnum } from '../../../../Common/components/tables/membersTable/members-table/members-table.interface';

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
  public members = [
    {
      id: '352',
      name: 'Paulo Vieira',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.matriculated,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '562',
      name: 'Rogério Almeida',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.inactive,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '739',
      name: 'Matheus Sonaro',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.matriculated,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '382',
      name: 'Daiane Ferreira',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.registered,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '792',
      name: 'Amanda Rocha',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.registered,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '352',
      name: 'Paulo Vieira',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.matriculated,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '562',
      name: 'Rogério Almeida',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.inactive,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '739',
      name: 'Matheus Sonaro',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.matriculated,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '382',
      name: 'Daiane Ferreira',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.registered,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
    {
      id: '792',
      name: 'Amanda Rocha',
      phone: '(11) 93211-7880',
      status: MemberStatusEnum.registered,
      avatar:
        'https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais',
    },
  ];

  onSimpleCardClick(cardId: string) {
    // Implementar filtro na lista de alunos
  }
}
