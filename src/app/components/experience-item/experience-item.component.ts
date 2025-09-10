import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() firmName: string = ''
  @Input() location: string = ''
  @Input() dates: string = ''
  @Input() role: string = ''
  @Input() details: string = ''
}
