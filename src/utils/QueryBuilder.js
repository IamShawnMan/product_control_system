export class QueryBuilder {
  constructor(quertParams) {
    this.queryParams = queryParams;
    this.queryOptions = queryOptions;
  }

  paginate() {
    const page = this.queryParams.page || 1;
    const limit = this.queryParams.limit || 100;
    this.queryOptions.limit = limit;
    this.queryOptions.offset = (page - 1) * limit;
    return this;
  }
}
