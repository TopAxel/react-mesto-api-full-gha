class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    _getHeaders() {
        const jwt = localStorage.getItem('jwt');
        return {
          'Authorization': `Bearer ${jwt}`,
          ...this._headers,
        };
      }

      _request(endpoint, method, body) {
        return fetch(`${this._baseUrl}/${endpoint}`, {
            method: method,
            headers: this._getHeaders(),
            body: JSON.stringify(body)
        })
            .then(res => this._parseResponse(res));
    }

    // Получение карточек с сервера
    getInitialCards() {
        return this._request('cards', 'GET');
    }

    // Добавление новой карточки через попап
    addCard(user) {
        return this._request('cards', 'POST', {
            name: user.name,
            link: user.link
        });
    }

    // Удаление карточки
    deleteCard(cardId) {
        return this._request(`cards/${cardId}`, 'DELETE');
    }

    // Ставим лайк карточке
    setLike(cardId) {
        return this._request(`cards/${cardId}/likes`, 'PUT');
    }

    // Удаляем лайк
    deleteLike(cardId) {
        return this._request(`cards/${cardId}/likes`, 'DELETE');
    }

    // Получение информации о пользователе с сервера
    getUserInfo() {
        return this._request('users/me', 'GET');
    }

    // Редактирование информации о пользователе через попап
    editUserInfo(data) {
        return this._request('users/me', 'PATCH', {
            name: data.name,
            about: data.about
        });
    }

    // Редактирование аватара пользователя через попап
    editAvatar(data) {
        return this._request('users/me/avatar', 'PATCH', {
            avatar: data.avatar
        });
    }
}

const api = new Api({
    baseUrl: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;

