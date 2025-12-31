import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  List,
  LucideAngularModule,
  LucideHouse,
  User,
  ChevronUp,
  OctagonAlert,
  Heart,
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly LucideHouse = LucideHouse;
  readonly User = User;
  readonly List = List;
  readonly ChevronUp = ChevronUp;
  readonly OctagonAlert = OctagonAlert;
  readonly Heart = Heart;

  dropdownOpened: boolean = false;

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }
}
