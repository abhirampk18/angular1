import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './bottom-nav.html',
  styleUrls: ['./bottom-nav.scss'],
})
export class BottomNavComponent {
  icons = [
    'fas fa-star',         // Favourites
    'fas fa-clock',        // Recents
    'fas fa-user-friends', // Contacts
    'fas fa-keyboard',     // Keypad
    'fas fa-voicemail'     // Voicemail
  ];

  hoverIndex: number | null = 0;

  onHover(index: number) {
    this.hoverIndex = index;
  }
}
