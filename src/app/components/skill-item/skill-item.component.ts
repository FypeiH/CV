import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.css'
})
export class SkillItemComponent implements AfterViewInit {
  
  @Input() skillName: string = ''
  @Input() personal: Boolean = false
  @Input() level: string = ''

  itemPadding: string = ''
  unfilledColor: string = ''
  filledColor: string = ''
  levelClass: string = ''

  ngAfterViewInit(): void {
    this.itemPadding = this.personal ? 'pt-4' : ''
    this.unfilledColor = this.personal ? 'bg-[#696969]' : 'bg-[#ADADAD]'
    this.filledColor = this.personal ? 'bg-[#F2F2F2]' : 'bg-[#3B3B3B]'
    this.levelClass = 'w-[' + this.level + '%]'
  }
}
