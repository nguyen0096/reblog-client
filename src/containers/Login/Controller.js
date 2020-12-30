import axios from 'axios';
import qs from 'qs';
import HttpClient from "../../utils/http";

export class UserController {
    constructor(store) {
        this.http = new HttpClient();
        this.store = store;
    }

    async login(formData) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/user',
            data: qs.stringify(formData),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
    }
}