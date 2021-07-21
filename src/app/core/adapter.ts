export interface Adapter<T> {
  // eslint-disable-next-line no-unused-vars
  adapt(item: any): T;
}
