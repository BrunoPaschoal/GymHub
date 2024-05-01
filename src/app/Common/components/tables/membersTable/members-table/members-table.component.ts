import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IMemberTableData, MemberStatusEnum } from './members-table.interface';

@Component({
  selector: 'app-members-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, AvatarModule, TagModule],
  templateUrl: './members-table.component.html',
  styleUrl: './members-table.component.scss',
})
export class MembersTableComponent {
  @Input({ required: true }) tableData: IMemberTableData[] = [];

  editMember(member: IMemberTableData) {
    // Implementar emissão de evento
  }

  getColorTag(status: MemberStatusEnum) {
    const statusTag = {
      [MemberStatusEnum.matriculated]: 'success',
      [MemberStatusEnum.registered]: 'warning',
      [MemberStatusEnum.inactive]: 'danger',
    };
    return statusTag[status];
  }
}
