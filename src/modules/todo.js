export default class Todo {
  constructor(title, dateCreated) {
    this.title = title;
    this.dateCreated = dateCreated;
  }

  get description() {
    return this.notes;
  }

  set description(description) {
    this.notes = description;
  }
}
