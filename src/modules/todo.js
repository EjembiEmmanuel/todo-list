export default class Todo {
  constructor(title, dateCreated, status) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.status = status;
  }

  get dueDate() {
    return this.date;
  }

  set dueDate(date) {
    this.date = date;
  }

  get description() {
    return this.notes;
  }

  set description(description) {
    this.notes = description;
  }
}
