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

    setUserInfo(name, info) {     
        // console.log('1');
        // console.log(this._name.textContent);
        this._name.textContent = name;
        this._info.textContent = info;
        // console.log('2');
        // console.log(this._name);
    }
}

export default UserInfo;