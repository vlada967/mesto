class UserInfo {
    constructor({nameSelector, infoSelector, avatarSelector}) {
        this._nameSelector = nameSelector;
        this._infoSelector = infoSelector;
        this._avatarSelector = avatarSelector;
        this._name = document.querySelector(this._nameSelector);
        this._info = document.querySelector(this._infoSelector);
        this._avatar = document.querySelector(this._avatarSelector);

    }

    getUserInfo() {
        return {name: this._name, info: this._info};
    }

    setUserInfo(name, job, avatar, id) {   
        this._name.textContent = name;
        this._info.textContent = job;
        this._avatar.src = avatar;
        this._id = id;
    }
}

export default UserInfo;