import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav'; // no .component needed


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,         // ✅ Needed for <router-outlet>
    BottomNavComponent    // ✅ Your custom nav component
  ],
  templateUrl: './app.html',
})
export class App {}
