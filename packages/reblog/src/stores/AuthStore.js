import { makeObservable, observable } from "mobx";

import { AuthController } from 'containers/Auth/controller';

export class AuthStore {
    // profile = {
    //     name: 'nguyen',
    // };
    profile = null;

    constructor(appStore) {
        makeObservable(this, {
            profile: observable,
        })

        this.appStore = appStore;
        this.controller = new AuthController(this);
    }
}