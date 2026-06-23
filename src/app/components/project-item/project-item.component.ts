import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  @Input() projectName: string = '';
  @Input() projectStack: string = '';
  @Input() projectDescription: string = '';
}
