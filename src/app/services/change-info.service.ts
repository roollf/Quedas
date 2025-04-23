import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeInfoService {
  constructor() {}

  clickTest(value: boolean) {
    return !value;
  }
}
