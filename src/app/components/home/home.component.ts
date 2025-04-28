import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ChangeInfoService } from '../../services/utils/change-info.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  providers: [ChangeInfoService],
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // private changeInfo = inject(ChangeInfoService);
  name = 'Rolf';
  surName = 'Matela';
  showText = false;
  // listTest = ['Testando 1', 'Testando 2', 'Testando 3'];

  constructor(private changeInfo: ChangeInfoService) {}

  @Input('listTest') testListOnHome: string[] | undefined;
  @Output() userName = new EventEmitter<string>();

  // updateStr(value: string) {
  //   this.nameTest = value;
  // }

  onClickToShowName() {
    this.showText = this.changeInfo.clickTest(this.showText);
  }

  onClickToSend() {
    this.userName.emit(this.name);
  }
}
