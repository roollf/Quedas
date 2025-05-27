// rxjs
import { catchError, map, Observable, of, startWith } from 'rxjs';

// models
import * as Models from '../../models';

export function toAsyncState<T>(
  source$: Observable<T>
): Observable<Models.AsyncState<T>> {
  return source$.pipe(
    map((data) => ({ loading: false, data })),
    startWith({ loading: true } as Models.AsyncState<T>),
    catchError((error) => of({ loading: false, error }))
  );
}
