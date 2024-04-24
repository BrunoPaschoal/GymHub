import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MembersComponent } from './views/members/members.component';
import { membersRoutes } from './members.routes';

@NgModule({
  declarations: [MembersComponent],
  imports: [CommonModule, RouterModule.forChild(membersRoutes)],
})
export class MembersModule {}
