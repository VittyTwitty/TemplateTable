export class TableSettings {
  _columnsHeader?: any;
  _reference?: any;

  constructor(data) {
    this.columnsHeader = data.columnsHeader;
    this.reference = data.reference;
  }

  set columnsHeader(data: string) {
    this._columnsHeader = data ? data : '-hlkljkljkl';
  }

  get columnsHeader() {
    return this._columnsHeader;
  }

  set reference(data: string) {
    this._reference = data ? data : 'нет значения';
  }
}
