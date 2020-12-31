import axios from 'axios';
import qs from 'qs';

export class UserController {
    constructor(store) {
        this.store = store;
    }

    async login(formData) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/user/',
            data: qs.stringify(formData),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })

    }
}