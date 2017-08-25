/* global fetch */

class RemoteService {
    constructor (baseUri) {
        this.baseUri = baseUri;
    }

    getHeaders () {
        let headers = {
            'Content-Type': 'application/json'
        };

        return {...headers};
    }

    get (path) {
        return fetch(this.baseUri + path, {
            headers: this.getHeaders()
        });
    }

    post (path, body) {
        return fetch(this.baseUri + path, {
            headers: this.getHeaders(),
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    put (path, body) {
        return fetch(this.baseUri + path, {
            headers: this.getHeaders(),
            method: 'PUT',
            body: JSON.stringify(body)
        });
    }

    delete (path) {
        return fetch(this.baseUri + path, {
            headers: this.getHeaders(),
            method: 'DELETE'
        });
    }
}

const apiRemote = new RemoteService('https://api.knockrentals.com/v1');

export { apiRemote };
