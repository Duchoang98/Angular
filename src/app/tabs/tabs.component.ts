import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  navs = ['Active', 'Link 1', 'Link 2']
  @Input() linkTemplate!: TemplateRef<any>;
}
