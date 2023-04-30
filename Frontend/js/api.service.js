
class ApiService {

    Host = 'http://localhost:3000';
    Endpoint = '/';
    Method = 'GET';

    setEndpoint(endpoint) {
        this.Endpoint = endpoint;
        return this;
    }

    setMethod(method) {
        this.Method = this.method;
        return this;
    }

    makeUrl() {
        return `${this.Host}${this.Endpoint}`;
    }

    async fetchService(path) {
        if (path) {
            this.setEndpoint(path);
        }
        const url = this.makeUrl();
        const response = await fetch(url, {
            method: this.Method
        });
        return response.json();
    }

}

document.services = {};

export default ApiService;