export interface IDbQueryFunction {
  sql: string;
  binds?: Array<number | string>;
  options?: any;
}

export interface IDbPlugin {
  query: (params: IDbQueryFunction) => Promise<any>;
}
