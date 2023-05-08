export default class Todo {
  constructor(title, dateCreated) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.status = false;
    this.important = false;
  }

  get status() {
    return this.complete;
  }

  set status(status) {
    this.complete = status;
  }

  get important() {
    return this.value;
  }

  set important(important) {
    this.value = important;
  }

  get description() {
    return this.notes;
  }

  set description(description) {
    this.notes = description;
  }
}
