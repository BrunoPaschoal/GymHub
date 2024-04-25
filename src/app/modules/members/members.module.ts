import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MembersComponent } from './views/members/members.component';
import { membersRoutes } from './members.routes';
import { PageTitleComponent } from '../../Common/components/text/page-title/page-title.component';
import { SimpleInfoCardComponent } from '../../Common/components/cards/simple-info-card/simple-info-card.component';

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(membersRoutes),
    PageTitleComponent,
    SimpleInfoCardComponent,
  ],
})
export class MembersModule {}
