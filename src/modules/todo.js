export default class Todo {
  constructor(title, dateCreated) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.status = false;
  }

  get status() {
    return this.complete;
  }

  set status(status) {
    this.complete = status;
  }

  get description() {
    return this.notes;
  }

  set description(description) {
    this.notes = description;
  }
}
