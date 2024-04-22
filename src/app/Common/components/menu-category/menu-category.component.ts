import { Component, Input } from '@angular/core';
import { IMenuCategory } from '../../interfaces/AppTypes';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.scss',
})
export class MenuCategoryComponent {
  @Input({ required: true }) menuData!: IMenuCategory;
}
