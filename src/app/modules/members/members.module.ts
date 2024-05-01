import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MembersComponent } from './views/members/members.component';
import { membersRoutes } from './members.routes';
import { PageTitleComponent } from '../../Common/components/text/page-title/page-title.component';
import { SimpleInfoCardComponent } from '../../Common/components/cards/simple-info-card/simple-info-card.component';
import { MembersTableComponent } from '../../Common/components/tables/membersTable/members-table/members-table.component';

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(membersRoutes),
    PageTitleComponent,
    SimpleInfoCardComponent,
    MembersTableComponent,
  ],
})
export class MembersModule {}
