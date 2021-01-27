import { action, computed, makeObservable, observable } from "mobx";

import { AuthController } from 'controllers/auth_mock';

export class AuthStore {
    profile = {};

    constructor(appStore) {
        makeObservable(this, {
            profile: observable,
            setAuthProfile: action,
            isLoggedIn: computed,
        })

        this.appStore = appStore;
        this.controller = new AuthController(this);
    }

    setAuthProfile = (token) => {
        this.profile = {
            token: token,
        };
    }

    get isLoggedIn() {
        const token = localStorage.getItem('token');
        return Boolean(token);
    }
}