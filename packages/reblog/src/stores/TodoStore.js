import { makeObservable, observable } from "mobx";

import { TodoController } from 'controllers/todo';

export class TodoStore {
    data = [];

    constructor(appStore) {
        makeObservable(this, {
            data: observable,
        })

        this.appStore = appStore;
        this.controller = new TodoController(this);
    }  
}