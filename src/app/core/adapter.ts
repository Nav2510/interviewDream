export interface AdapterOptions {
  numberOfItems?: number;
  link?: string;
}
export interface Adapter<T> {
  // eslint-disable-next-line no-unused-vars
  adapt(item: any, options?: AdapterOptions): T;
}
