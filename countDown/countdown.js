export default class Countdown {
  constructor(dataFuture) {
    this.dataFuture = dataFuture;
  }
  get _dataActual() {
    return new Date();
  }
  get _dataFuture() {
    return new Date(this.dataFuture);
  }
  get timeDiff() {
    return this._dataFuture.getTime() - this._dataActual.getTime();
  }
  get day() {
    return Math.floor(this.timeDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this.timeDiff / (60 * 60 * 1000));
  }
  get minute() {
    return Math.floor(this.timeDiff / (60 * 1000));
  }
  get second() {
    return Math.floor(this.timeDiff / 1000);
  }
  get total() {
    const day = this.day;
    const hours = this.hours % 24;
    const minute = this.minute % 60;
    const second = this.second % 60;
    return { day, hours, minute, second };
  }
}
