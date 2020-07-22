export interface CrudInterface {
  create(...args: any[]): Promise<any>;
  update(...args: any[]): Promise<any>;
  find(...args: any[]): Promise<any>;
  delete(...args: any[]): Promise<any>;
  list(...args: any[]): Promise<any>;
}
