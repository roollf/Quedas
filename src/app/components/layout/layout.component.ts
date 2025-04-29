import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  // @Input('title') headerTitle: string = '';
  // @Input('primaryBtnText') loginBtn: string = '';
  // @Input('secondaryBtnText') createBtn: string = '';
  // @Input() disablePrimaryBtn: boolean = true;
  // @Output('submit') onSubmit = new EventEmitter();
  // @Output('navigate') onNavigate = new EventEmitter();
  // submit() {
  //   this.onSubmit.emit();
  // }
  // navigate() {
  //   this.onNavigate.emit();
  // }
}
