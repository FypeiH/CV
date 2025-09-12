import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnChanges {
  
  @Input() skillName: string = '';
  @Input() personal: boolean = false;
  @Input() level: string = '';

  itemPadding = '';
  unfilledColor = '';
  filledColor = '';
  levelPercent = '0%';

  ngOnChanges(changes: SimpleChanges): void {
    this.itemPadding = this.personal ? 'pt-4' : '';
    this.unfilledColor = this.personal ? 'bg-[#696969]' : 'bg-[#ADADAD]';
    this.filledColor = this.personal ? 'bg-[#F2F2F2]' : 'bg-[#3B3B3B]';
    
    const lvl = Number(this.level) || 0;
    this.levelPercent = Math.max(0, Math.min(100, lvl)) + '%';
  }
}
