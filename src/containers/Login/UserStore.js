import { makeObservable, observable } from "mobx";

import { UserController } from './Controller'

export class UserStore {
    // profile = {
    //     name: 'nguyen',
    // };
    profile = null;

    constructor(appStore) {
        makeObservable(this, {
            profile: observable,
        })

        this.appStore = appStore;
        this.controller = new UserController(this);
    }
}