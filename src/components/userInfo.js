export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameNode = document.querySelector(nameSelector);
    this._jobNode = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._nameNode.textContent,
      job: this._jobNode.textContent,
    };
  }

  setUserInfo(name, job) {
    this._nameNode.textContent = name;
    this._jobNode.textContent = job;
  }
}
