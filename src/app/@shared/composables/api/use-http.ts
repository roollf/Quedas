// angular
import { computed, effect, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// rxjs
import { catchError, map, Observable, of, startWith } from 'rxjs';

// interfaces
export interface State<T> {
  loading: boolean;
  data?: T;
  error?: any;
}

export function withLoadingAndError<T>(
  source$: Observable<T>
): Observable<State<T>> {
  return source$.pipe(
    map((data) => ({ loading: false, data })),
    startWith({ loading: true } as State<T>),
    catchError((error) => of({ loading: false, error }))
  );
}
