class UserAuth {

    constructor() {

    }

    setToken(token, cb) {

        localStorage.setItem('devEdToken', token);
        cb();
    }

    getToken() {

    }

    deleteToken() {

    }
}

export default new UserAuth();