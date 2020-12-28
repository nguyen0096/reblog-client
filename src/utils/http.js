export default class HttpClient {

    get(url, header = undefined, cb = undefined)
    {
        return fetch(url, {
            method: 'GET',
            headers: new Headers(header || {
                'Content-Type': 'application/json'
            })
        })
            .then(this.parseJSON)
            .then(this.checkError)
            .then(cb);
    }

    post(url, data, header = undefined, cb = undefined)
    {
        const req = {
            method: 'POST',
            headers: new Headers(header || {
                'Content-Type': 'application/json'
            }),
            body: data,
        };
        console.log(req);
        return fetch(url, req)
            .then(this.parseJSON)
            .then(this.checkError)
            .then(cb);
    }

    parseJSON(response)
    {
        return response.json();
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