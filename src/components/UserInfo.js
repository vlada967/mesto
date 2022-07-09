class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._nameSelector = nameSelector;
        this._infoSelector = infoSelector;
        this._name = document.querySelector(this._nameSelector);
        this._info = document.querySelector(this._infoSelector);
    }

    getUserInfo() {
        return {name: this._name, info: this._info};
    }

    setUserInfo(name, job) {   
        this._name.textContent = name;
        this._info.textContent = job;
    }
}

export default UserInfo;