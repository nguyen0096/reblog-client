import HttpClient from 'utils/http';

export class UserController {
    constructor(store) {
        this.store = store;
        this.httpClient = new HttpClient();
    }

    async login(formData) {
        this.httpClient.postForm('/user', formData).then((data) => {
            console.log("Data: ", data);
        });
    }
}