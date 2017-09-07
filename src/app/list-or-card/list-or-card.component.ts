import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CardItemDirective } from '../directives/card-item.directive';
import { ListItemDirective } from '../directives/card-list.directive';

@Component({
  selector: 'app-list-or-card',
  templateUrl: './list-or-card.component.html',
  styleUrls: ['./list-or-card.component.css']
})
export class ListOrCardComponent {

  @Input() items: any[] = [];
  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate;
}
