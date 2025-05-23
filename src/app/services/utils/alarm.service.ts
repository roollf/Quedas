// angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlarmService {
  private _riskObject: { risk: number; alert: boolean; title: string } = {
    risk: 1,
    alert: false,
    title: '',
  };

  constructor() {}

  evaluateAlarm(data: any): { risk: number; alert: boolean; title: string } {
    const { status, power, pause, alarm_id } = data;

    if (!status) {
      if (power) {
        return (this._riskObject = {
          risk: 1,
          alert: false,
          title: 'inativo',
        });
      } else {
        return (this._riskObject = {
          risk: 1,
          alert: false,
          title: 'desligado',
        });
      }
    }

    if (power) {
      if (pause) {
        return this._riskObject;
      }

      if (!pause) {
        if (alarm_id === 1) {
          console.log('Paciente ok');
          return (this._riskObject = {
            risk: 1,
            alert: false,
            title: 'ativo',
          });
        }

        if (alarm_id === 2) {
          console.log('Paciente em risco de queda');
          return (this._riskObject = {
            risk: 2,
            alert: true,
            title: 'risco de queda',
          });
        }

        if (alarm_id === 3) {
          console.log('Paciente caiu');
          return (this._riskObject = {
            risk: 3,
            alert: true,
            title: 'queda',
          });
        }
      }
    } else {
      console.log('Aparelho com problema');
      return (this._riskObject = {
        risk: 1,
        alert: false,
        title: 'aparelho com problema',
      });
    }

    return this._riskObject;
  }
}
