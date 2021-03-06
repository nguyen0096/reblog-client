import axios from 'axios';
import qs from 'qs';

export default class HttpClient {
    constructor() {
        this.basePath = '/api';
    }
    get(path, header = undefined, cb = undefined)
    {
        return axios({
            method: 'GET',
            url: this.basePath + path,
            headers: new Headers(header || {
                'Content-Type': 'application/json'
            })
        })
            .then(this.parseJSON)
            .then(this.checkError)
            .then(cb);
    }

    post(path, data, headers = undefined, cb = undefined)
    {
        return axios({
            method: 'post',
            url: this.basePath + path,
            data: JSON.stringify(data),
            headers: headers || {
                'content-type': 'application/json'
            }
        })
            .then(res => res.data)
            .then(cb);
    }

    postForm(path, data, headers = undefined, cb = undefined) {
        return axios({
            method: 'post',
            url: this.basePath + path,
            data: qs.stringify(data),
            headers: headers || {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then(this.parseJSON)
            .then(cb);
    }

    parseJSON(response)
    {
        let data;
        try {
            data = JSON.parse(response.data);
        } catch (e) {
            console.log("Invalid JSON response");
        }
        return data;
    }

    checkError(response)
    {
        if (response && response.error)
        {
            // todo: add dialog style later
            alert(response.error.message);

            return null;
        }

        return response;
    }
}