class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getProfileInfo() {
        return fetch(`${this._url}users/me`, {
            method: "GET",
            headers: this._headers
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }
  
    getInitialCards() {
        return fetch(`${this._url}cards`, {
            method: "GET",
            headers: this._headers
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }

    editProfile(name, job) {
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: job
              })
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }

    addCard(name, link) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }

    toggleLike(id, isLiked) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: isLiked ? "PUT" : "DELETE",
            headers: this._headers
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }

    editAvatar(link) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
              })
        })
            .then((response) => this._checkResponse(response))
            .catch((err) => {
                console.log(err);
            })
    }

}
  
export default Api;