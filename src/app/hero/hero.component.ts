import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  title: string = "Live your life like a TOURIST";
  text: string = "You don't need to think anymore about your next destination, now you have us."
}
