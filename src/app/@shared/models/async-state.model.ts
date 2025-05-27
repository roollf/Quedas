export interface AsyncState<T> {
  loading: boolean;
  data?: T;
  error?: any;
}
